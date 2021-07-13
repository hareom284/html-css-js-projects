
var shape = setInterval(function() {
    var num = Math.floor(Math.random() * 1) + 1;
    var size = Math.floor(Math.random() * 15) + 10;
    var left = Math.floor(Math.random() * 100) + 1;
    var bg = Math.floor(Math.random() * 2) + 100;
    var time = Math.floor(Math.random() * 5) + 5;

    $('.blow_hear').append("<div class='hear' style='width:" + size + "px;height:" + size + "px;left:" + left + "%;background:#953a57;animation:shape " + time + "s ease;-moz-animation:shape " + time + "s ease;'></div>");

    $('.blow_hear').append("<div class='hear' style='width:" + (size - 10) + "px;height:" + (size - 10) + "px;left:" + (left + num) + "%;background:#d5ebee;animation:shape " + (time + 5) + "s ease'></div>");

    $('.hear').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -200 || width >= 45) {
            $(this).detach();
        }
    });
}, 50);