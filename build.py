import os
import re
import json
import uuid
import shutil
import zipfile

ahk_code = """<KEY_STROKE>::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, <KEY_STROKE>  
    WinActivate ahk_id %winid%
}
return
"""


def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), os.path.relpath(
                os.path.join(root, file), os.path.join(path, '..')))


def generate_profile(mappings, size=(5, 3)):
    version = mappings['version']
    bindings = mappings['mappings']

    buildPath = os.path.join('build', f'{str(uuid.uuid4()).upper()}.sdProfile')
    if not os.path.exists(buildPath):
        os.makedirs(buildPath)

    keys = [f'{j},{i}' for i in range(size[1]) for j in range(size[0])]
    actions = {}
    for i in range(len(bindings)):
        item = bindings[i]
        # keys
        keyOption = '!' in item['keys']
        keyCtrl = '^' in item['keys']
        keyShift = '+' in item['keys']
        m = [4 if keyOption else 0, 2 if keyCtrl else 0, 1 if keyShift else 0]
        keyModifiers = sum(m)
        key = item['keys'].replace('!', '').replace('^', '').replace('+', '')
        keyCode = ord(key.upper()[0])

        # folders/images
        buttonFolder = os.path.join(buildPath, keys[i])
        if not os.path.exists(buttonFolder):
            os.makedirs(buttonFolder)

        actions[keys[i]] = {
            "Name": "Hotkey",
            "Settings": {
                "Hotkeys": [
                    {
                        "KeyCmd": False,
                        "KeyCtrl": keyCtrl,
                        "KeyModifiers": keyModifiers,
                        "KeyOption": keyOption,
                        "KeyShift": keyShift,
                        "NativeCode": keyCode,
                        "QTKeyCode": keyCode,
                        "VKeyCode": keyCode
                    },
                    {
                        "KeyCmd": False,
                        "KeyCtrl": False,
                        "KeyModifiers": 0,
                        "KeyOption": False,
                        "KeyShift": False,
                        "NativeCode": 146,
                        "QTKeyCode": 33554431,
                        "VKeyCode": -1
                    }
                ]
            },
            "State": 0,
            "States": [
                {
                    "FFamily": "",
                    "FSize": "",
                    "FStyle": "",
                    "FUnderline": "",
                    "Image": "",
                    "Title": item['name'],
                    "TitleAlignment": "",
                    "TitleColor": "",
                    "TitleShow": ""
                }
            ],
            "UUID": "com.elgato.streamdeck.system.hotkey"
        }

    actions = {k: actions[k] for k in sorted(actions.keys())}

    manifest = {
        "Actions": actions,
        "DeviceModel": "20GAA9901",
        "DeviceUUID": "@(1)[4057/96/AL36I1C03719]",
        "Name": "StreamYard",
        "Version": f'{version}'
    }

    with open(os.path.join(buildPath, 'manifest.json'), 'w') as f:
        f.write(json.dumps(manifest, separators=(',', ':')))

    profile = os.path.join('build', f'StreamYard.streamDeckProfile')
    zipf = zipfile.ZipFile(profile, 'w', zipfile.ZIP_DEFLATED)
    zipdir(buildPath, zipf)
    zipf.close()
    # shutil.rmtree(buildPath)


def generate_ahk(mappings):
    global ahk_code
    version = mappings['version']
    maps = mappings['mappings']
    f = open('os_hotkeys.ahk', 'r')
    code = f.read()
    f.close()

    new_code = []
    for item in maps:
        k = item['keys'].upper()
        new_code.append(ahk_code.replace('<KEY_STROKE>', k))

    gen_code = "\n".join(new_code)
    code = re.sub(r"(;<<\n).*(\n;>>)",
                  f'\\1{gen_code}\\2', code, flags=re.DOTALL)
    nf = open('os_hotkeys.ahk', 'w')
    nf.write(code)
    nf.close()


def generate_js(mappings):
    version = mappings['version']
    maps = mappings['mappings']
    f = open('streamyard_hotkeys.js', 'r')
    code = f.read()
    f.close()
    code = re.sub(r"(//\s+@version\s+)\s(\d.\d*)", f"\\1 {version}", code)
    new_code = f'\nconst buttons = {json.dumps(maps, indent=4)};\n'
    code = re.sub(r"(\n//<).*(//>\n)",
                  f'\\1{new_code}\\2', code, flags=re.DOTALL)
    nf = open('streamyard_hotkeys.js', 'w')
    nf.write(code)
    nf.close()


if __name__ == '__main__':
    with open('mappings.json', 'r') as f:
        items = json.load(f)
        generate_profile(items)
        generate_js(items)
        generate_ahk(items)
