
    $('#btnGetValue').on('click', function() {
        alert('Finished');
        var result1 = $('input[name=sites]:checked').val(); 
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');

        var result2 = $('input[name=character]:checked').val(); 
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');

        var result3 = $('input[name=coach]:checked').val(); 
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
    })

    var i = 10;
    function timer(){
        var x = document.getElementById("startClock").innerHTML = i;
        i--;
    }

    var m = setInterval('timer',1000)

    function xx(){
        clearInterval(m);
    }

    setTimeout('xx',12000);