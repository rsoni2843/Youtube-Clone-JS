const api_key = "AIzaSyCrR5OFfm0d8k9lqdPX7uNH-uHAJmiD8Kk" ; 
let showData = async()=>{
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=${api_key}` ; 
    let res = await fetch(url) ; 
    let data = await res.json() ; 
    append(data.items)
    // console.log(data)
}
let container = document.getElementById("container") ; 
let append = (data)=>{
    // console.log(data) ;
    data.forEach(el => {
        // console.log(el.snippet) ; 
        let anchor = document.createElement("a") ; 
       
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


showData() ; 