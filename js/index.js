const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', ()=>{
     $video.play()
     $play.hidden = true
     $pause.hidden = false
})

$pause.addEventListener('click', ()=>{
     $video.pause()
     $play.hidden = false
     $pause.hidden = true
})

$backward.addEventListener('click',()=>{
     $video.currentTime -=3
})

$forward.addEventListener('click', ()=>{
     $video.currentTime +=3
})

const $progress = document.querySelector('#progress')

//setear el valor maximo de la barra de progreso que eventualmente
//vendria siendo la duracion del video que se ha cargado.
$video.addEventListener('loadedmetadata',()=>{
     $progress.max = $video.duration
})

//para que la barra de progeso aumente a medida que el video avanza
$video.addEventListener('timeupdate',()=>{
     $progress.value = $video.currentTime
})

//cuando el usuario adelante en la barra de progreso y con el mause
$progress.addEventListener('input',()=>{
     $video.currentTime = $progress.value
})