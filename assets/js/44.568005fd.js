(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{420:function(e,t,n){"use strict";n.r(t);var r=n(8),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"jsp-20111019-shang-ke-lian-xi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jsp-20111019-shang-ke-lian-xi"}},[e._v("#")]),e._v(" JSP 20111019 上課練習")]),e._v(" "),n("p",[e._v("{% raw %}")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="20111019_DBSetup.jsp" %>\n<%\nrequest.setCharacterEncoding("utf8");\nif( request.getParameter("username") != null )\n{\n    // 檢查\n    String query ;\n    query = "select * from `account` where `username` = \'"+request.getParameter("username")+"\' and `password` = \'"+request.getParameter("password")+"\'";\n    ResultSet res = stmt.executeQuery(query);\n    if(res.next())\n    {\n        out.println("<h1 style=\\"color:red\\">帳號 "+request.getParameter("username")+" 登入成功</h1>");\n        session.setAttribute("Login","OK");    // 設定 session\n        response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。\n    }\n    else\n    {\n        out.println("<h1 style=\\"color:red\\">帳號或密碼錯誤</h1>");\n    }\n    res.close();\n}\nelse\n{\n    String Login = (String)session.getAttribute("Login");\n    if(Login != null && Login.equals("OK"))\n    {\n        out.println("<h1 style=\\"color:red\\">welcome.</h1>");\n        response.setHeader("Refresh","1;url=20111019_memberQuery.jsp");  // 延遲五秒後轉向\n    }\n    else\n    {%>\n<html><head><title>memberAdd</title></head><body>\n<form action="" method="post">\n    帳號：<input type="text" name="username" value="taichunmin"/><br />\n    密碼：<input type="password" name="password" value="1234" />\n    <input type="submit" value="登入" />\n</form>\n\n</body></html>\n    <%}\n}\n%>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="2011.10.19_DBSetup.jsp" %>\n<html>\n    <head><title>query</title></head>\n    <body>\n    <div><a href="20111019_memberAdd.jsp">新增使用者</a> <a href="20111019_memberLogin.jsp">使用者登入</a> <a href="20111019_memberLogout.jsp">使用者登出</a></div>\n    <table width="100%" cellspacing="0" border="1">\n    <%\n        String query = "select * from `account` order by `username`";\n        ResultSet res = stmt.executeQuery(query);\n        while(res.next())\n        {\n            out.println("<tr>");\n            String username = res.getString("username");\n            out.println("<td>"+username+"</td>");\n            out.println("<td>"+res.getString("password")+"</td>");\n            out.println("<td><a href=\\"20111019_memberUpdate.jsp?username=" + username + "\\">修改</a></td>");\n            out.println("<td><a href=\\"20111019_memberDelete.jsp?username=" + username + "\\">刪除</a></td>");\n            out.println("</tr>");\n        }\n        res.close();\n    %>\n    </table>\n    </body>\n</html>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="20111019_DBSetup.jsp" %>\n<%\n    session.setAttribute("Login",null);    // 設定 session\n    response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。\n%>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="20111019_DBSetup.jsp" %>\n<%\nrequest.setCharacterEncoding("utf8");\nif( request.getParameter("username") != null )\n{\n    if( request.getParameter("password") != null )\n    {\n        String query ;\n        query = "select * from `account` where `username` = \'"+request.getParameter("username")+"\' and `password` = \'"+request.getParameter("password")+"\'";\n        ResultSet res = stmt.executeQuery(query);\n        if(res.next())\n        {\n            if(request.getParameter("password_n1")!=null && request.getParameter("password_n2")!=null && request.getParameter("password_n1").equals(request.getParameter("password_n2")))\n            {\n                query = "update `account` set `password` = ? where `username`=?";\n                pstmt = conn.prepareStatement(query);\n                pstmt.setString(1, request.getParameter("password_n1"));\n                pstmt.setString(2, request.getParameter("username"));\n                pstmt.executeUpdate();\n                response.sendRedirect("20111019_memberQuery.jsp");  // 立即轉換網頁\n            }\n        }\n        else\n        {\n            out.println("<h1 style=\\"color:red\\">帳號或密碼錯誤</h1>");\n        }\n        res.close();\n    }\n}\nelse\n{\n    out.println("<h1 style=\\"color:red\\">沒有 username = "+request.getParameter("username")+"</h1>");\n    response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。\n}\n%>\n<html><head><title>memberAdd</title></head><body>\n<form action="" method="post">\n    <input type="hidden" name="username" value="<%= request.getParameter("username") %>" />\n    舊密碼：<input type="password" name="password" value="1234" />\n    新密碼：<input type="password" name="password_n1" value="12345" />\n    確認密碼：<input type="password" name="password_n2" value="12345" />\n    <input type="submit" value="登入" />\n</form>\n\n</body></html>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="20111019_DBSetup.jsp" %>\n<%\nrequest.setCharacterEncoding("utf8");\nif( request.getParameter("username") != null )\n{\n    // 檢查\n    String query ;\n    query = "select * from `account` where `username` = \'"+request.getParameter("username")+"\'";\n    ResultSet res = stmt.executeQuery(query);\n    if(!(res.next()==true))\n    {\n        query = "insert into `account` (`username`,`password`) values (?,?)";\n        pstmt = conn.prepareStatement(query);\n        pstmt.setString(1, request.getParameter("username"));\n        pstmt.setString(2, request.getParameter("password"));\n        pstmt.executeUpdate();\n        response.sendRedirect("20111019_memberQuery.jsp");  // 立即轉換網頁\n    }\n    else\n    {\n        out.println("<h1 style=\\"color:red\\">帳號 "+request.getParameter("username")+" 重複</h1>");\n        response.setHeader("Refresh","5;url=20111019_memberQuery.jsp");  // 延遲五秒後轉向\n    }\n    res.close();\n}\n%>\n<html><head><title>memberAdd</title></head><body>\n<form action="" method="post">\n    帳號：<input type="text" name="username" value="taichunmin"/><br />\n    密碼：<input type="password" name="password" value="1234" />\n    <input type="submit" value="Add" />\n</form>\n\n</body></html>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@page contentType="text/html; charset=utf8" import="java.util.*" %>\n<%@ include file="20111019_DBSetup.jsp" %>\n<%\nrequest.setCharacterEncoding("utf8");\nif( request.getParameter("username") != null )\n{\n    String query;\n    query = "delete from `account` where `username`=?";\n    pstmt = conn.prepareStatement(query);\n    pstmt.setString(1, request.getParameter("username"));\n    pstmt.executeUpdate();\n    response.sendRedirect("20111019_memberQuery.jsp");\n}\n%>\n<html><head><title>memberAdd</title></head><body>\n<form action="" method="post">\n    帳號：<input type="text" name="username" value="taichunmin"/><br />\n    <input type="submit" value="delete" />\n</form>\n\n</body></html>\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<%@ page import="java.sql.*" %>\n<%!\n    Connection conn;\n    PreparedStatement pstmt = null;\n    Statement stmt = null;\n%>\n<%\n    try{\n        Class.forName("org.gjt.mm.mysql.Driver");\n        String user="root",password="mis",dbName="db20111019";  // 在課堂上的設定\n        //String user="jsp",password="mis",dbName="test";  // 在宿舍的設定\n        String url="jdbc:mysql://localhost:3306/"+dbName+"?characterEncoding=utf8&useUnicode=true";\n        conn = DriverManager.getConnection(url,user,password);\n        stmt = conn.createStatement();\n    }catch(SQLException sqle)\n    {\n        out.println("Sql Exception: "+sqle);\n    }\n%>\n')])])]),n("p",[e._v("{% endraw %}")])])}),[],!1,null,null,null);t.default=s.exports}}]);