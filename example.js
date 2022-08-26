<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <p id="servertitle">Server title: </p>
    <script>
        console.log("ShoutParser by jakobcoder")
        // Thank you for using my project! Please check out my GitHub or my site! jakobcoder.me
        var request = new XMLHttpRequest();
        request.open("GET", "https://yourshoutcastv2site.url/?sid=1", false);
        request.send();
        var xml = request.responseXML;

        // example
        var servertitle = xml.getElementsByTagName("SERVERTITLE")[0].childNodes[0].nodeValue
        document.getElementById("servertitle").innerHTML = "Server title: " + servertitle;
    </script>
</body>
</html>
