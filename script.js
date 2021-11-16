let start = document.getElementsByClassName("start")[0]
let startpg = document.getElementsByClassName("startpg")[0]

start.addEventListener("click", ()=>{
    console.log("clicked");
    if(startpg.style.bottom == "8vh"){
        startpg.style.bottom = "100vh"
    }
    else{
        startpg.style.bottom = "8vh"
    }
})
let search = document.getElementsByClassName("search")[0]
let searchpg = document.getElementsByClassName("searchpg")[0]

search.addEventListener("click", ()=>{
    console.log("clicked");
    if(searchpg.style.bottom == "8vh"){
        searchpg.style.bottom = "100vh"
    }
    else{
        searchpg.style.bottom = "8vh"
    }
})
let recent = document.getElementsByClassName("recent")[0]
let recentpg = document.getElementsByClassName("recentpg")[0]

recent.addEventListener("click", ()=>{
    console.log("clicked");
    if(recentpg.style.bottom == "8vh"){
        recentpg.style.bottom = "100vh"
    }
    else{
        recentpg.style.bottom = "8vh"
    }
})
let explorer = document.getElementsByClassName("explorer")[0]
let explorerpg = document.getElementsByClassName("explorerpg")[0]

explorer.addEventListener("click", ()=>{
    console.log("clicked");
    if(explorerpg.style.bottom == "8vh"){
        explorerpg.style.bottom = "100vh"
    }
    else{
        explorerpg.style.bottom = "8vh"
    }
})
let chromes = document.getElementsByClassName("chromes")[0]
let chromepg = document.getElementsByClassName("chromepg")[0]

chromes.addEventListener("click", ()=>{
    console.log("clicked");
    if(chromepg.style.bottom == "8vh"){
        chromepg.style.bottom = "100vh"
    }
    else{
        chromepg.style.bottom = "8vh"
    }
})