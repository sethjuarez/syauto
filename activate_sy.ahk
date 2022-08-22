#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
; SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SendMode Event
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;shift: +
;control: ^
;alt: !

^!.::
WinGet, winid, ID, A
IfWinExist, Studio ahk_class Chrome_WidgetWin_1
{
    WinActivate
}