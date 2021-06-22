---
title: "[JSP]Notepad++的NppExec設定檔"
date: 2011-10-05T01:24:00+08
tags:
  - JSP
---
# Notepad++ 的 NppExec 設定檔

需先安裝外掛模組 NppExec  
第一次使用先按 F6  
把下面的程式碼貼上  
並自行更改 `JSP_www` 和 `JSP_url`  
以後就只需要按 Ctrl + F6 即可直接看到結果

```batch
NPP_CONSOLE ?
npp_save
set JSP_www = C:\Tomcat 7.0\webapps\ROOT\
set JSP_url = http://localhost:8080/
cmd.exe /c copy /Y "$(FULL_CURRENT_PATH)" "$(JSP_www)$(FILE_NAME)"
cmd.exe /c start "" "$(JSP_url)$(FILE_NAME)"
```
