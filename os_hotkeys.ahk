#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
; SendMode Event
SetTitleMatchMode, 2 ; 2 = a partial match on the title
 
;shift: +
;control: ^
;alt: !

;<<
^!B::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!B  
    WinActivate ahk_id %winid%
}
return

^!V::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!V  
    WinActivate ahk_id %winid%
}
return

!1::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !1  
    WinActivate ahk_id %winid%
}
return

!2::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !2  
    WinActivate ahk_id %winid%
}
return

!3::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !3  
    WinActivate ahk_id %winid%
}
return

!4::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !4  
    WinActivate ahk_id %winid%
}
return

!5::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !5  
    WinActivate ahk_id %winid%
}
return

!6::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !6  
    WinActivate ahk_id %winid%
}
return

!7::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, !7  
    WinActivate ahk_id %winid%
}
return

^!P::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!P  
    WinActivate ahk_id %winid%
}
return

^!Q::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!Q  
    WinActivate ahk_id %winid%
}
return

^!W::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!W  
    WinActivate ahk_id %winid%
}
return

^!E::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!E  
    WinActivate ahk_id %winid%
}
return

^!R::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!R  
    WinActivate ahk_id %winid%
}
return

^!T::
WinGet, winid, ID, A
IfWinExist, StreamYard ahk_class Chrome_WidgetWin_1
{
    WinActivate
    Send, ^!T  
    WinActivate ahk_id %winid%
}
return

;>>