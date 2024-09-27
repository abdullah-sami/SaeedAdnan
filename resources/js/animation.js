function preloader(){
    
    let main = document.querySelector("main");
    let gal_view = document.querySelector("#gallery_viewer");
    let footer = document.querySelector("footer");


    main.style.display = "flex";
    
    footer.style.display = "flex";
    
    
    
    setTimeout(function(){
        
        document.querySelector("#preloader").classList.add('loaded');
        
        }, 1000);
    

    

}



















const cursorBall = document.querySelector('#cursor');


const positionElement = (e)=> {
    
  cursorBall.style.display = 'block';


  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorBall.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;

  

}

window.addEventListener('mousemove', positionElement);