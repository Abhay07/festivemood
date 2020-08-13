const languageJson = {
	1:{
		wish:'आपको शुभकामनाएं देते हैं',
		ind:'74 वें स्वतंत्रता दिवस की'
	},
	2:{
		wish:"wishes you",
		ind:"Happy 74th Indepence Day"
	},
	3:{
		wish:"আপনাকে শুভেচ্ছা দেয়",
		ind:"Th৪ তম স্বাধীনতা দিবসের"
	},
	4:{
		wish:"ତୁମକୁ ଇଚ୍ଛା ଦିଏ |",
		ind:"74 ତମ ସ୍ୱାଧୀନତା ଦିବସର |"
	},
	5:{
		wish:"तुम्हाला शुभेच्छा देतो",
		ind:"74 व्या स्वातंत्र्य दिनाच्या"
	},
	6:{
		wish:"ನಿಮಗೆ ಶುಭಾಶಯಗಳನ್ನು ನೀಡುತ್ತದೆ",
		ind:"74 ನೇ ಸ್ವಾತಂತ್ರ್ಯ ದಿನ"
	},
	7:{
		wish:"உங்களுக்கு விருப்பங்களைத் தருகிறது",
		ind:"74 வது சுதந்திர தினத்தில்"
	},
	8:{
		wish:"మీకు శుభాకాంక్షలు ఇస్తుంది",
		ind:"74 వ స్వాతంత్ర్య దినోత్సవం"
	}
}
const userName= document.querySelector("#userName");
const wishText = document.querySelector("#wishText");
const shareIcon = document.querySelector("#shareIcon");
const indText = document.querySelector("#ind");
const url = window.location.href;
const splits = url.split('?name=');
changeLanguage({target:{value:1}})
if(splits && splits[1]){
	const name = decodeURIComponent(splits[1]);
	setName({
		target:{
			value:decodeName(name)
		}
	})
}
else{
	hideName();
	shareIcon.href = `whatsapp://send?text=🇮🇳Here's a special Independent Day Wish from me 🇮🇳 ${url}`
}
function playAudio(){
	const audio = document.querySelector('audio');
	if(audio.paused){
		audio.play();
		event.target.className = "fa  fa-volume-up"
	}
	else{
		audio.pause();
		event.target.className = "fa  fa-volume-off"
	}
}

function setName(e){
	if(userName.style.display == 'none'){
		showName();
	}
	const name = e.target.value;
	userName.innerHTML = name;
	const url = window.location.origin+'/independence-day';
	shareIcon.href = `whatsapp://send?text=🇮🇳 Here's a special Independent Day Wish from me 🇮🇳 ${url}?name=${encodeName(name)}`
}

function hideName() {
	userName.style.display = 'none';
	wishText.style.display = 'none';
}

function showName(){
	userName.style.display = 'inline-block';
	wishText.style.display = 'inline-block';
}

function encodeName(t){
	return t.replace(' ','-');
}

function decodeName(t){
	return t.replace('-',' ');
}

function changeLanguage(e){
	wishText.innerHTML = languageJson[e.target.value].wish;
	indText.innerHTML = languageJson[e.target.value].ind;
}


