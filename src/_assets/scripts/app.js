console.log(`I was loaded at ${Date(Date.now()).toString()}`);

window.addEventListener('scroll',(e)=>{
    const header = document.querySelector('#header');
    if(window.pageYOffset>30){
      header.classList.add("scroll-shadow");
    }else{
      header.classList.remove("scroll-shadow");
    }
  });