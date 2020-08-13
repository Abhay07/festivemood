const languageJson = {
	1:{
		wish:'आपको शुभकामनाएं देते हैं',
		ind:'74 वें स्वतंत्रता दिवस की',
		msg:'स्वतंत्रता दिवस के अवसर पर मेरी ओर से विशेष शुभकामनाएँ'
	},
	2:{
		wish:"wishes you",
		ind:"Happy 74th Indepence Day",
		msg:"Here's a special wish Independence Day wish from me"
	},
	3:{
		wish:"আপনাকে শুভেচ্ছা দেয়",
		ind:"Th৪ তম স্বাধীনতা দিবসের",
		msg:"স্বাধীনতা দিবস উপলক্ষে আমার পক্ষ থেকে বিশেষ শুভেচ্ছা"
	},
	4:{
		wish:"ତୁମକୁ ଇଚ୍ଛା ଦିଏ |",
		ind:"74 ତମ ସ୍ୱାଧୀନତା ଦିବସର |",
		msg:"ସ୍ୱାଧୀନତା ଦିବସ ଅବସରରେ ମୋ ତରଫରୁ ବିଶେଷ ଶୁଭେଚ୍ଛା |"
	},
	5:{
		wish:"तुम्हाला शुभेच्छा देतो",
		ind:"74 व्या स्वातंत्र्य दिनाच्या",
		msg:"स्वातंत्र्य दिनाच्या निमित्ताने माझ्याकडून विशेष शुभेच्छा"
	},
	6:{
		wish:"ನಿಮಗೆ ಶುಭಾಶಯಗಳನ್ನು ನೀಡುತ್ತದೆ",
		ind:"74 ನೇ ಸ್ವಾತಂತ್ರ್ಯ ದಿನ",
		msg:"ಸ್ವಾತಂತ್ರ್ಯ ದಿನದಂದು ನನ್ನಿಂದ ವಿಶೇಷ ಹಾರೈಕೆ"
	},
	7:{
		wish:"உங்களுக்கு விருப்பங்களைத் தருகிறது",
		ind:"74 வது சுதந்திர தினத்தில்",
		msg:"சுதந்திர தினத்தையொட்டி என்னிடமிருந்து சிறப்பு ஆசை"
	},
	8:{
		wish:"మీకు శుభాకాంక్షలు ఇస్తుంది",
		ind:"74 వ స్వాతంత్ర్య దినోత్సవం",
		msg:"స్వాతంత్ర్య దినోత్సవం సందర్భంగా నా నుండి ప్రత్యేక కోరిక"
	}
}
const userName= document.querySelector("#userName");
const wishText = document.querySelector("#wishText");
const shareIcon = document.querySelector("#shareIcon");
const indText = document.querySelector("#ind");
const url = window.location.href;
const splits = url.split('?name=');
const langSplits = url.split('lang=');
const languageSelect = document.querySelector('select');
const userInput = document.querySelector('input');
let language;
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
}

if(langSplits && langSplits[1]){
	language = langSplits[1];
}
else{
	language = 2;
}
changeLanguage({target:{value:language}});
languageSelect.value = language;

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
	language = e.target.value;
	wishText.innerHTML = languageJson[language].wish;
	indText.innerHTML = languageJson[language].ind;
}

function share(e){
	const msg = `whatsapp://send?text=🇮🇳 ${languageJson[language].msg} 🇮🇳 ${window.location.origin}?name=${encodeName(userInput.value)}${encodeURIComponent('&')}lang=${language}`;
	e.target.href = msg;
}