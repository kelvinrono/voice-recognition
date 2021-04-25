const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

//adding feedback
const greetings = ['I am doing good homeboy', " It is a harsh world",'Leave me alone' ];
const weather = ['This weather is not good for me', 'It is freaky cold']

const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition  = new speechRecognition();

recognition.onstart = function(){
    console.log("Voice active");
};

recognition.onresult = function(event){

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;

    readOutLoud(transcript);
};

//add the listener to th

btn.addEventListener('click', ()=>{
    recognition.start();
})

function readOutLoud(message){

    const speech = new speechSynthesis();
    speech.text = 'I don\'t understand you';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random()*greetings.length)]
        speech.text = finalText
    }
  
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}