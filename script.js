document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element2', {
       strings:[
        "<b>Web Developer.</b>",
          "<b>Programmer.</b>",
       ],
        typeSpeed: 80,
        backSpeed: 100,
        backDelay: 1300,
        startDelay: 400,
        loop: true,
      });
    document.querySelector(".elements li a").style.color="#ec4899"
});
function nav(){
  let nav_lists=document.querySelectorAll(".elements li");
    // nav_lists.forEach((item,index)=>{
    //   item.addEventListener("click",()=>{
    //   document.querySelector(".elements span").style.left="56vh";
       
    //   })
    // })
    nav_lists[0].addEventListener("click",()=>{
      let list=document.querySelectorAll(".elements li a");
     list.forEach((li)=>{
      li.style.color="white"
     })
      list[0].style.color="#ec4899";
      
    })
    nav_lists[1].addEventListener("click",()=>{
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
        list[1].style.color="#ec4899";
    
    })
    nav_lists[2].addEventListener("click",()=>{
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[2].style.color="#ec4899";
    })
    nav_lists[3].addEventListener("click",()=>{
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[3].style.color="#ec4899";
    })
    nav_lists[4].addEventListener("click",()=>{
       let list=document.querySelectorAll(".elements li a");
       list.forEach((li)=>{
        li.style.color="white"
       })
     list[4].style.color="#ec4899";
    })
     
    let scroll=document.querySelectorAll(".elements li a")
    scroll.forEach(link=>{
      link.addEventListener('click',function(event){
        event.preventDefault();
       let pages=document.querySelector(this.getAttribute('href'));
       pages.scrollIntoView({
        behavious:'smooth'
       })
      })
    })

   
}
function hamburger() {
  let menu = document.querySelector(".ham");
  menu.addEventListener("click", () => {
    document.querySelector(".left").style.display="block";
    document.querySelector(".left").style.left = "0px";  // Show the menu when hamburger icon is clicked
    document.querySelector(".nav").style.display = "none";
  });

  let close = document.querySelector("#close");
  close.addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";  // Hide the menu when close icon is clicked
    document.querySelector(".nav").style.display = "flex";
  });

  // Add event listeners to the list items to hide the sidebar on click
  let scroll2 = document.querySelectorAll(".nav-remove");
  scroll2.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(".nav").style.display = "flex";
      document.querySelector(".left").style.left = "-100%";
      let pages = document.querySelector(this.getAttribute('href'));
      pages.scrollIntoView({
        behavior: 'smooth'  // Scroll to the corresponding section
      });
    });
  });
}
document.getElementById('download_btn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'assets/resume.pdf';  // Relative path to the resume file
  link.download = 'Animesh Prakash';  // Suggested name for the downloaded file
  link.click();
});

nav();
hamburger();