<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="1; url=index.ca.html" />
</head>
<body>
<script>
var lang=navigator.language || navigator.systemLanguage;
lang=lang.toLowerCase();
lang=lang.substr(0,2);
document.cookie.split(";").forEach(function(val,key) {
	val=val.trim().split("=");
	if(val[0]="lang") lang=val[1];
});
if(lang!="ca" && lang!="es" && lang!="en") lang="ca";
var hash=window.location.hash;
window.location.href="index."+lang+".html"+hash;
</script>
</body>
</html>
