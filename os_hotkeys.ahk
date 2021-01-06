#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
; SendMode Event
SetTitleMatchMode, 2 ; 2 = a partial match on the title
 
;shift: +
;control: ^
;alt: !

; StreamYard - Toggle Mute
+^!b::
WinGet, winid, ID, A    ; Save the current window ID
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!b   
    WinActivate ahk_id %winid% ; Restore previous window focus
}
return