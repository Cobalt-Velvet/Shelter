function linkcolor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        i++;
    }
}


var body = {
    fontcolor: function (color) {
        document.querySelector('body').style.color = color;
    },
    backcolor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function handler(self) {
    var target = document.querySelector('body');
    if (self.value === 'togle_night mod') {
        body.backcolor('#404040');
        body.fontcolor('white');
        self.value = 'togle_day mod';

        linkcolor('pink');

    }
    else {
        body.backcolor('#e6e6e6');
        body.fontcolor('black');
        self.value = 'togle_night mod';

        linkcolor('magenta');
    }
}