var sounds = {
   'Let the hate...' : 'hate.wav',
   'HIYOOOO!' : 'hiyoooo.wav',
   'It\'s a trap!' : 'itsatrap.wav',
   'NOOOO!' : 'noooo.wav',
   'Your clothes...' : 'yourclothes.wav',
   'More than this' : 'morethanthis.wav',
   'Talk to the hand' : 'talktothehand.wav',
   'Yeah Baby!' : 'yeahbaby.wav'
};

var soundboardactive = false;

function init(){
    var closewindow = document.createElement('a');
    var soundbar = document.createElement('div');
    var height = (typeof window.innerHeight != 'undefined' ? window.innerHeight : document.body.offsetHeight);
    soundbar.id = 'soundboard';
    soundbar.style.backgroundColor = '#DDDDDD';
    soundbar.style.borderLeft = '1px solid #AAAAAA';
    soundbar.style.height = height + 'px';
    soundbar.style.position = 'fixed';
    soundbar.style.right = '0px';
    soundbar.style.top = '0px';
    soundbar.style.width = '180px';
    soundbar.style.textAlign = 'center';
    soundbar.style.zIndex = '2147483647';
    var header = document.createElement('div');
    header.id = 'soundbarheader';
    header.innerHTML = 'SoundBar';
    header.style.fontFamily = 'Arial';
    header.style.fontWeight = 'bold';
    header.style.fontSize = '18px';
    header.style.paddingTop = '5px';
    soundbar.appendChild(header);
    for(var key in sounds){
        soundbutton = document.createElement('input');
        linebreak = document.createElement('br');
        soundbutton.id = key;
        soundbutton.style.marginTop = '4px';
        soundbutton.style.width = '150px';
        soundbutton.type = 'button';
        soundbutton.value = key;
        soundbutton.onclick = function(){ disableButton(this); playSound(sounds[this.id]); }
        soundbar.appendChild(soundbutton);
        soundbar.appendChild(linebreak);
    }
    closewindow.style.bottom = '2px';
    closewindow.style.color = '#666666';
    closewindow.style.fontFamily = 'helvetica';
    closewindow.style.fontSize = '10px';
    closewindow.style.left = '2px';
    closewindow.style.position = 'absolute';
    closewindow.href = 'javascript:closeSoundboard()';
    closewindow.innerHTML = 'Close Window';
    soundbar.appendChild(closewindow);
    document.body.appendChild(soundbar);
    soundboardActive = true;
}

function closeSoundboard(){
    var soundboard = document.getElementById('soundboard');
    document.body.removeChild(soundboard);
}

function disableButton(button){
    button.disabled = true;
    setTimeout(function(){ button.disabled = false; }, 5000);
}

function playSound(sound){
    var soundbar = document.getElementById('soundboard');
    if(document.getElementById('audio')){
        var audio = document.getElementById('audio');
        audio.parentNode.removeChild(audio);
    }
    var audio = document.createElement('audio');
    audio.setAttribute('id', 'audio');
    audio.src = 'http://www.chrisvuletich.com/soundbar/audio/' + sound;
    soundbar.appendChild(audio);
    audio.play();
}

function resizeSoundboard(){
    if(soundboardactive){
        var height = (typeof window.innerHeight != 'undefined' ? window.innerHeight : document.body.offsetHeight);
        var soundboard = document.getElementById('soundboard');
        soundbar.style.height = height + 'px';
    }
}

if(!document.getElementById('soundboard') || document.getElementById('soundboard').style.visibility == 'hidden'){
    init();
}
window.onresize = resizeSoundboard;
