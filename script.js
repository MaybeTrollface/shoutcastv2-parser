        console.log("ShoutParser by jakobcoder")
        // Thank you for using my project! Please check out my GitHub or my site! jakobcoder.me
        var request = new XMLHttpRequest();
        request.open("GET", "https://yourshoutcastv2site.url/?sid=1", false);
        request.send();
        var xml = request.responseXML;
