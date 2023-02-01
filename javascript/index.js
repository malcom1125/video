const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

$play.addEventListener("click", handleplay)

function handleplay() {
    $video.play()
    $play.hidden = true 
    $pause.hidden = false
    console.log("le diste");
}
$pause.addEventListener("click", handlepause)

function handlepause() {
    $video.pause()
    $pause.hidden = true 
    $play.hidden = false
    console.log("le diste como")
}

$backward.addEventListener("click", handlebackward)
function handlebackward() {
    $video.currentTime = $video.currentTime - 10
    console.log("atrasar 10 segundos", $video.currentTime)
}
$forward.addEventListener("click", handleforforward)
function handleforforward() {
   $video.currentTime = $video.currentTime + 10
    console.log("adelantar 10 segundos",  $video.currentTime )
}
$video.addEventListener("timeupdate", handleTimeUpdate)
$video.addEventListener("loadedmetadata", handleLoaded)
const $progress = document.querySelector("#progress")

function handleLoaded() {
    $progress.max = $video.duration
    console.log("ha cargado mi video", $video.duration)
}
function handleTimeUpdate() {
    $progress.value = $video.currentTime
    console.log("tiempo actual", $video.currentTime)
}
$progress.addEventListener("input", handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}
