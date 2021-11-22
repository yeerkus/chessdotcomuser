const searchBtn = document.querySelector("button")
const defaultBtn = document.querySelectorAll(".default")

async function chessApi(username){
    try{
        const response = await fetch(`https://api.chess.com/pub/player/${username}`)
        const data = await response.json()
        displayData(data)
        animationP.play()
        animationImg.play()
    }
    catch(err){
        console.log(err)
    }
}

function displayData(data){
    document.getElementById("profilePic").src = data.avatar
    document.getElementById("username").innerHTML = "Username: "+ data.username
    document.getElementById("name").innerHTML = "Name: "+ data.name
    document.getElementById("followers").innerHTML = "Followers: "+ data.followers
}

defaultBtn.forEach((btn) =>{
    btn.addEventListener("click", (e) => {
        const username = btn.id
        chessApi(username)
    })
})

searchBtn.addEventListener("click", (e)=>{
    const input = document.querySelector("input").value;
    chessApi(input)
})

// Animation
const  animationP = anime({
        targets: 'p',
        translateX:[-500,0],
        opacity: [0.1,1],
        duration: 300,
        delay: anime.stagger(200),
        easing: 'easeInElastic(1,0.99)'
    })
const animationImg = anime({
        targets: '#profilePic',
        translateY:[-500,0],
        rotate: '360deg',
        duration: 500,
        easing: 'steps(100)'
    })
