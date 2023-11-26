let playBtn = document.querySelector('#playBtn')
let video = document.querySelector('video')
let pauseBtn = document.querySelector('#pauseBtn')
let volumeHigh = document.querySelector('#volumeHigh')
let audio_seek = document.querySelector('#audio_seek')
let forward = document.querySelector('.fa-chevron-right')
let backward = document.querySelector('.fa-chevron-left')


let audioPressed = true;
audio_seek.style.display = 'none'
pauseBtn.style.display = 'none'

let vidSource = ['./Videos/vid-1.mp4', './Videos/vid-2.mp4', './Videos/vid-3.mp4']


let index = 0
function playVid() {

    video.src = vidSource[index]

}
playVid()

let playPause = () => {
    if (video.paused) {
        video.play()

        pauseBtn.style.display = 'inline-block'
        playBtn.style.display = 'none'
    }
    else {
        video.pause()
        pauseBtn.style.display = 'none'
        playBtn.style.display = 'inline-block'

    }


}



volumeHigh.addEventListener('click', () => {
    if (audioPressed) {
        audio_seek.style.display = 'inline-block'
        audioPressed = false

    }
    else {
        audio_seek.style.display = 'none'
        audioPressed = true
    }
})

function playNext() {
    index++
    index = index % vidSource.length
    console.log(index)
    playVid();
}
function playPrev() {
    index--;
    index = (index + vidSource.length) % vidSource.length
    playVid()
}

function changeVolume() {
    video
}
playBtn.addEventListener('click', playPause)
pauseBtn.addEventListener('click', playPause)
forward.addEventListener('click', playNext)
backward.addEventListener('click', playPrev)
audio_seek.addEventListener('click', changeVolume)



