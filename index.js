

const api_key = "AIzaSyCrR5OFfm0d8k9lqdPX7uNH-uHAJmiD8Kk" ; 


//<iframe width="560" height="315" src="https://www.youtube.com/embed/9YSbflKeOZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]"



let search = async () => {
  try{ let query = document.getElementById("query").value ;
//   console.log(query) ; 
    let url =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${api_key}` ; 
    let res = await fetch(url) ; 
    let data = await res.json() ; 
    // console.log(data.items) ; 
    append(data.items) ; 
            } catch(err){
            console.log(err) ; 
        }
}
let container =  document.getElementById("container") ; 
let append = (data) => {
    // console.log(data) ;
    container.innerHTML = null ;  
    data.forEach(el=> {
       console.log(el)
        let anchor = document.createElement("a") ; 
        // anchor.href = `https://www.youtube.com/watch?v=${el.id.videoId}` ; 
        anchor.addEventListener("click",function(){
            videoPage(el) ; 
        })
        let div = document.createElement("div") ; 
        let thumbnails = document.createElement("img") ; 
        thumbnails.src = el.snippet.thumbnails.high.url ; 
        let title = document.createElement("h3") ; 
        title.innerText = el.snippet.title ; 
        div.append(thumbnails,title) ; 
        anchor.append(div) ; 
        container.append(anchor)

    });
}
let videoPage = (el) =>{
    console.log(el) ; 
    localStorage.setItem("videoData",JSON.stringify(el))
    window.location.href = "video.html"
}


// let appendData = (data)=>{
//     console.log(data)
//    let container =  document.getElementById("container") ; 
//     // console.log(data)
//     container.innerHTML = null ; 
//     data.forEach(({id: {videoId} , snippet: {title} }) => {
//         // console.log(videoId)
//         // console.log(title)
//         let div = document.createElement("div") ; 

//         let iframe = document.createElement("iframe") ; 
//         iframe.src = `https://www.youtube.com/embed/${videoId}` ;
//         iframe.allow = "fullscreen" ;  
//         let h3 = document.createElement("h3") ; 
//         h3.innerText = title ; 
//         let video = {
//             title,
//             videoId,
//         }
//         div.onclick = () =>{
//             playVideo(video) ; 

//         }

//         div.append(iframe,h3) ; 

//         container.append(div)
//     });
// }

// let playVideo = (video) =>{
//     localStorage.setItem("video",JSON.stringify(video)) ; 
//     window.location.href = "video.html"
// }




 /*
 <iframe width="560" height="315" src="https://www.youtube.com/embed/Ry-azrgoab4"
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */