const ulNavbar =document.getElementById('ul-navbar')
const buttonToggle = document.querySelector(".menu-toggle")
const cardProject =document.querySelector("#card-project")

buttonToggle.addEventListener('click', ()=>{
    if(ulNavbar.style.display==="none"){
        ulNavbar.style.display="flex"
        buttonToggle.textContent="Close"
    }
    else{
        ulNavbar.style.display="none"
        buttonToggle.textContent="Menu"
        
    }
})

const cardContaintProject ={
    projek1:{
        judul:"projek1",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since "
    },
    projek2:{
        judul:"projek2",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since"
    },
    projek3:{
        judul:"projek3",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since"
    },
    projek4:{
        judul:"projek4",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since"
    },
    projek5:{
        judul:"projek5",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since"
    },
    projek6:{
        judul:"projek6",
        ImageUrl:"./image/image-project.png",
        containt:"The standard chunk of Lorem Ipsum used since The standard chunk of Lorem Ipsum used since"
    }
}

for (let i in cardContaintProject) {
    cardProject.innerHTML+=`
    <div class="card">
     <img src="${cardContaintProject[i].ImageUrl}">
    <h4>${cardContaintProject[i].judul}</h4>
    <p>${cardContaintProject[i].containt}</p>
    </div>
    `
}