var audiopath = 'http://localhost/php/soundbar/audio/';

(function(){
	var v = "1.8.2";
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initbookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initookmarklet();
	}

	function initbookmarklet() {
		(window.bookmarklet = function() {
      soundbar.init();
		})();
	}
})();

var soundbar = {
  close : function() {
    $('#soundbar').remove();
  },
  init : function() {
    var audiopath = '';
    var bar = $('<div id="soundbar"></div>').css({
      'background-color' : '#999',
      'border-left' : '1px solid #666',
      'font-family' : 'arial',
      'height' : $(window).height(),
      'right' : 0,
      'position' : 'absolute',
      'top' : 0,
      'width' : '200px'
    });
    $('body').append(bar);
    for (var key in soundbar.sounds) {
      var html = $('<span>' + key + '</span>').css({
        'background-color' : '#ededed',
        'border' : '1px solid #dcdcdc',
        'border-radius' : '6px',
        'box-shadow' : 'inset 0px 1px 0px 0px #ffffff',
        'color' : '#777777',
        'cursor' : 'pointer',
        'display' : 'inline-block',
        'font-family' : 'arial',
        'font-size' : '13px',
        'font-weight' : 'bold',
        'margin-top' : '4px',
        'padding' : '6px 24px',
        'text-decoration' : 'none',
        'text-shadow' : '1px 1px 0px #ffffff',
        'width' : '140px',
        '-moz-box-shadow' : 'inset 0px 1px 0px 0px #ffffff',
        '-webkit-box-shadow' : 'inset 0px 1px 0px 0px #ffffff',
        '-moz-border-radius' : '6px',
        '-webkit-border-radius' : '6px'
      }).click(function() {
        soundbar.play(key);
      });
      $(bar).append(html);
    }
    var close = $('<div>Close Soundbar</div>')
      .css({
        'bottom' : '5px',
        'color' : '#666',
        'cursor' : 'pointer',
        'font-size' : '11px',
        'left' : '5px',
        'position' : 'absolute'
      })
      .click(function() { soundbar.close(); });
    $(bar).append(close);
  },
  play : function(key) {
    $('audio').remove();
    var audio = $('<audio id="audio" src="' + audiopath + soundbar.sounds[key] + '"></audio>');
    $('#soundbar').append(audio);
    document.getElementById('audio').play();
  },
  resize : function() {
    $('#soundbar').css('height', $(window).height());
  },
  sounds : {
   'Let the hate...' : 'hate.wav',
   'HIYOOOO!' : 'hiyoooo.wav',
   'It\'s a trap!' : 'itsatrap.wav',
   'NOOOO!' : 'noooo.wav',
   'Your clothes...' : 'yourclothes.wav',
   'More than this' : 'morethanthis.wav',
   'Talk to the hand' : 'talktothehand.wav',
   'Yeah Baby!' : 'yeahbaby.wav'
  }
}

window.onresize = soundbar.resize;
