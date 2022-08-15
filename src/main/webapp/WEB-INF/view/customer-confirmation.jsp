<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	Danh sách khách hàng:
	<br>
	<form:form action="showForm" modelAttribute="customerList">
		<c:forEach var="temp" items="${customerList}">
			<li>${temp.firstName}</li>
			<li>${temp.lastName}</li>
			<li>${temp.sex}</li>
			<li>${temp.email}</li>
			<li>${temp.address}</li>
		</c:forEach>
		
		<input type="submit" value="Back to List">
	</form:form>
</body>
</html>