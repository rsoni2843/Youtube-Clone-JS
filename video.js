

let frameVideo = document.getElementById("videoFrame")
let showData = ()=>{
    let video = JSON.parse(localStorage.getItem("videoData")) ; 
    let div = document.createElement("div") ; 

    let iframe = document.createElement("iframe") ; 
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}` ;
    let title = document.createElement("h3") ; 
    title.innerText = video.snippet.title ; 
    frameVideo.append(iframe,title) ; 

    // console.log()

}
showData() ; 