console.log("Spotify");
//initialize variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));
// audioElement.play();
let songs = [
    {songName: "Salam-e-Ishq", filePath: '1.mp3', coverPath: "./covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: '2.mp3', coverPath: "./covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: '3.mp3', coverPath: "./covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: '4.mp3', coverPath: "./covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: '5.mp3', coverPath: "./covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: '6.mp3', coverPath: "./covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: '7.mp3', coverPath: "./covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: '8.mp3', coverPath: "./covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: '9.mp3', coverPath: "./covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath: '10.mp3', coverPath: "./covers/10.jpg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML =songs[i].songName;
})
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else {
        audioElement.pause();
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
     //Update Seekbaar
     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
// makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

//     })
// }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    console.log(songIndex);
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
     console.log("Ayush");

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
     
})