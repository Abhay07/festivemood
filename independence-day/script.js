const languageJson = {
	1:{
		wish:'आपको शुभकामनाएं देते हैं',
		ind:'74 वें स्वतंत्रता दिवस की',
		msg:'स्वतंत्रता दिवस के अवसर पर मेरी ओर से विशेष शुभकामनाएँ',
		type:'अपना नाम यहां टाइप करें'
	},
	2:{
		wish:"wishes you",
		ind:"Happy 74th Indepence Day",
		msg:"Here's a special wish Independence Day wish from me",
		type:"TYPE YOUR NAME HERE"
	},
	3:{
		wish:"তোমাকে অভিনন্দন",
		ind:"পঁচাত্তরের স্বাধীনতা দিবসের জন্য",
		msg:"স্বাধীনতা দিবস উপলক্ষে আমার পক্ষ থেকে বিশেষ শুভেচ্ছা",
		type:"এখানে আপনার নাম টাইপ করুন"

	},
	4:{
		wish:"ଆପଣଙ୍କୁ ଶୁଭେଚ୍ଛା ଜଣାଉଛି",
		ind:"୭୪ ତମ୍ ସ୍ଵାଧୀନତା ଦିବସ ପାଇଁ",
		msg:"ସ୍ୱାଧୀନତା ଦିବସ ଅବସରରେ ମୋ ତରଫରୁ ବିଶେଷ ଶୁଭେଚ୍ଛା |",
		type:"ଏଠାରେ ତୁମର ନାମ ଟାଇପ୍ କର |"
	},
	5:{
		wish:"आपणास शुभेच्छा",
		ind:"74 व्या स्वातंत्र्य दिनासाठी",
		msg:"स्वातंत्र्य दिनाच्या निमित्ताने माझ्याकडून विशेष शुभेच्छा",
		type:"आपले नाव येथे टाइप करा"
	},
	6:{
		wish:"ನಿಮಗೆ ಶುಭಾಶಯಗಳು",
		ind:"74 ನೇ ಸ್ವಾತಂತ್ರ್ಯ ದಿನಾಚರಣೆಗಾಗಿ",
		msg:"ಸ್ವಾತಂತ್ರ್ಯ ದಿನದಂದು ನನ್ನಿಂದ ವಿಶೇಷ ಹಾರೈಕೆ",
		type:"ನಿಮ್ಮ ಹೆಸರನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ"
	},
	7:{
		wish:"உங்களுக்கு வாழ்த்துக்கள்",
		ind:"74 வது சுதந்திர தினத்திற்கு",
		msg:"சுதந்திர தினத்தையொட்டி என்னிடமிருந்து சிறப்பு ஆசை",
		type:"உங்கள் பெயரை இங்கே தட்டச்சு செய்க"
	},
	8:{
		wish:"మీకు శుభాకాంక్షలు",
		ind:"74 వ స్వాతంత్ర్య దినోత్సవం కోసం",
		msg:"స్వాతంత్ర్య దినోత్సవం సందర్భంగా నా నుండి ప్రత్యేక కోరిక",
		type:"మీ పేరును ఇక్కడ టైప్ చేయండి"
	}
}
const userName= document.querySelector("#userName");
const wishText = document.querySelector("#wishText");
const shareIcon = document.querySelector("#shareIcon");
const indText = document.querySelector("#ind");
const url = window.location.href;
const splits = url.split(/\?name=|&lang=/);
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

if(splits && splits[2]){
	language = splits[2];
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
		event.target.innerHTML = "&#128264;"
	}
	else{
		audio.pause();
		event.target.innerHTML = "&#128263;"
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
	userInput.placeholder = languageJson[language].type;
}

function share(e){
	const msg = `https://wa.me/?text=🇮🇳 ${languageJson[language].msg} 🇮🇳 ${window.location.origin}/independence-day/?name=${encodeName(userInput.value)}${encodeURIComponent('&')}lang=${language}`;
	e.target.href = msg;
}