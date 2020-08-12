const userName= document.querySelector("#userName");
const wishText = document.querySelector("#wishText");
const shareIcon = document.querySelector("#shareIcon");
const url = window.location.href;
const splits = url.split('?name=');
if(splits && splits[1]){
	const name = decodeURIComponent(splits[1]);
	setName({
		target:{
			value:name
		}
	})
}
else{
	hideName();
	const msg = encodeURIComponent(`🇮🇳Here's a special Independent Day Wish from me 🇮🇳 ${url}`);
	shareIcon.href = `whatsapp://send?text=${msg}`
}
function playAudio(){
	const audio = document.querySelector('audio');
	if(audio.paused){
		audio.play();
		event.target.className = "fa fa-pause-circle"
	}
	else{
		audio.pause();
		event.target.className = "fa fa-play-circle"
	}
}

function setName(e){
	showName();
	const name = e.target.value;
	userName.innerHTML = name;
	const url = window.location.href;
	const msg = encodeURIComponent(`🇮🇳 Here's a special Independent Day Wish from me 🇮🇳 ${url}?name=${name}`);
	shareIcon.href = `whatsapp://send?text=${msg}`;
}

function hideName() {
	userName.style.display = 'none';
	wishText.style.display = 'none';
}

function showName(){
	userName.style.display = 'inline-block';
	wishText.style.display = 'inline-block';
}