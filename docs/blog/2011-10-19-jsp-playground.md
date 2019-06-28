---
date: "2011-10-19 20:18"
categories: JSP
---
# JSP 20111019 上課練習

{% raw %}
```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="20111019_DBSetup.jsp" %>
<%
request.setCharacterEncoding("utf8");
if( request.getParameter("username") != null )
{
    // 檢查
    String query ;
    query = "select * from `account` where `username` = '"+request.getParameter("username")+"' and `password` = '"+request.getParameter("password")+"'";
    ResultSet res = stmt.executeQuery(query);
    if(res.next())
    {
        out.println("<h1 style=\"color:red\">帳號 "+request.getParameter("username")+" 登入成功</h1>");
        session.setAttribute("Login","OK");    // 設定 session
        response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。
    }
    else
    {
        out.println("<h1 style=\"color:red\">帳號或密碼錯誤</h1>");
    }
    res.close();
}
else
{
    String Login = (String)session.getAttribute("Login");
    if(Login != null && Login.equals("OK"))
    {
        out.println("<h1 style=\"color:red\">welcome.</h1>");
        response.setHeader("Refresh","1;url=20111019_memberQuery.jsp");  // 延遲五秒後轉向
    }
    else
    {%>
<html><head><title>memberAdd</title></head><body>
<form action="" method="post">
    帳號：<input type="text" name="username" value="taichunmin"/><br />
    密碼：<input type="password" name="password" value="1234" />
    <input type="submit" value="登入" />
</form>

</body></html>
    <%}
}
%>
```

```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="2011.10.19_DBSetup.jsp" %>
<html>
    <head><title>query</title></head>
    <body>
    <div><a href="20111019_memberAdd.jsp">新增使用者</a> <a href="20111019_memberLogin.jsp">使用者登入</a> <a href="20111019_memberLogout.jsp">使用者登出</a></div>
    <table width="100%" cellspacing="0" border="1">
    <%
        String query = "select * from `account` order by `username`";
        ResultSet res = stmt.executeQuery(query);
        while(res.next())
        {
            out.println("<tr>");
            String username = res.getString("username");
            out.println("<td>"+username+"</td>");
            out.println("<td>"+res.getString("password")+"</td>");
            out.println("<td><a href=\"20111019_memberUpdate.jsp?username=" + username + "\">修改</a></td>");
            out.println("<td><a href=\"20111019_memberDelete.jsp?username=" + username + "\">刪除</a></td>");
            out.println("</tr>");
        }
        res.close();
    %>
    </table>
    </body>
</html>
```

```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="20111019_DBSetup.jsp" %>
<%
    session.setAttribute("Login",null);    // 設定 session
    response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。
%>
```

```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="20111019_DBSetup.jsp" %>
<%
request.setCharacterEncoding("utf8");
if( request.getParameter("username") != null )
{
    if( request.getParameter("password") != null )
    {
        String query ;
        query = "select * from `account` where `username` = '"+request.getParameter("username")+"' and `password` = '"+request.getParameter("password")+"'";
        ResultSet res = stmt.executeQuery(query);
        if(res.next())
        {
            if(request.getParameter("password_n1")!=null && request.getParameter("password_n2")!=null && request.getParameter("password_n1").equals(request.getParameter("password_n2")))
            {
                query = "update `account` set `password` = ? where `username`=?";
                pstmt = conn.prepareStatement(query);
                pstmt.setString(1, request.getParameter("password_n1"));
                pstmt.setString(2, request.getParameter("username"));
                pstmt.executeUpdate();
                response.sendRedirect("20111019_memberQuery.jsp");  // 立即轉換網頁
            }
        }
        else
        {
            out.println("<h1 style=\"color:red\">帳號或密碼錯誤</h1>");
        }
        res.close();
    }
}
else
{
    out.println("<h1 style=\"color:red\">沒有 username = "+request.getParameter("username")+"</h1>");
    response.sendRedirect("20111019_memberQuery.jsp");  // 轉換網頁。
}
%>
<html><head><title>memberAdd</title></head><body>
<form action="" method="post">
    <input type="hidden" name="username" value="<%= request.getParameter("username") %>" />
    舊密碼：<input type="password" name="password" value="1234" />
    新密碼：<input type="password" name="password_n1" value="12345" />
    確認密碼：<input type="password" name="password_n2" value="12345" />
    <input type="submit" value="登入" />
</form>

</body></html>
```

```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="20111019_DBSetup.jsp" %>
<%
request.setCharacterEncoding("utf8");
if( request.getParameter("username") != null )
{
    // 檢查
    String query ;
    query = "select * from `account` where `username` = '"+request.getParameter("username")+"'";
    ResultSet res = stmt.executeQuery(query);
    if(!(res.next()==true))
    {
        query = "insert into `account` (`username`,`password`) values (?,?)";
        pstmt = conn.prepareStatement(query);
        pstmt.setString(1, request.getParameter("username"));
        pstmt.setString(2, request.getParameter("password"));
        pstmt.executeUpdate();
        response.sendRedirect("20111019_memberQuery.jsp");  // 立即轉換網頁
    }
    else
    {
        out.println("<h1 style=\"color:red\">帳號 "+request.getParameter("username")+" 重複</h1>");
        response.setHeader("Refresh","5;url=20111019_memberQuery.jsp");  // 延遲五秒後轉向
    }
    res.close();
}
%>
<html><head><title>memberAdd</title></head><body>
<form action="" method="post">
    帳號：<input type="text" name="username" value="taichunmin"/><br />
    密碼：<input type="password" name="password" value="1234" />
    <input type="submit" value="Add" />
</form>

</body></html>
```

```jsp
<%@page contentType="text/html; charset=utf8" import="java.util.*" %>
<%@ include file="20111019_DBSetup.jsp" %>
<%
request.setCharacterEncoding("utf8");
if( request.getParameter("username") != null )
{
    String query;
    query = "delete from `account` where `username`=?";
    pstmt = conn.prepareStatement(query);
    pstmt.setString(1, request.getParameter("username"));
    pstmt.executeUpdate();
    response.sendRedirect("20111019_memberQuery.jsp");
}
%>
<html><head><title>memberAdd</title></head><body>
<form action="" method="post">
    帳號：<input type="text" name="username" value="taichunmin"/><br />
    <input type="submit" value="delete" />
</form>

</body></html>
```

```jsp
<%@ page import="java.sql.*" %>
<%!
    Connection conn;
    PreparedStatement pstmt = null;
    Statement stmt = null;
%>
<%
    try{
        Class.forName("org.gjt.mm.mysql.Driver");
        String user="root",password="mis",dbName="db20111019";  // 在課堂上的設定
        //String user="jsp",password="mis",dbName="test";  // 在宿舍的設定
        String url="jdbc:mysql://localhost:3306/"+dbName+"?characterEncoding=utf8&useUnicode=true";
        conn = DriverManager.getConnection(url,user,password);
        stmt = conn.createStatement();
    }catch(SQLException sqle)
    {
        out.println("Sql Exception: "+sqle);
    }
%>
```
{% endraw %}
