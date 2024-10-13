window.addEventListener(`contextmenu`, (e) => e.preventDefault());





function gallery_viewer_open() {
    const gallery_viewer = document.getElementById('gallery_viewer');

    gallery_viewer.style.visibility = 'visible';
    gallery_viewer.style.opacity = '0';
    gallery_viewer.style.transform = 'scale(1.1)';
    
    gallery_viewer.style.display = 'flex';

    setTimeout(() => {
        gallery_viewer.style.opacity = '1';
        gallery_viewer.style.transform = 'scale(1)';
    }, 100);




    load_masonry_gallery();


}









function gallery_viewer_full_screen() {
    const gallery_full_screen = document.getElementById('gallery_viewer_img_full_screen');
    const gallery_full_screen_img = document.getElementById('gallery_viewer_img_full_screen_img');

    const gallery_viewer_close_btn = document.getElementById('gallery_viewer_close_btn');


    const gallery_viewer_img = document.getElementById("gallery_viewer_img");


    gallery_full_screen_img.src = gallery_viewer_img.src;
    



    gallery_viewer_close_btn.style.display = 'none';
    
    
    
    gallery_full_screen.style.visibility = 'visible';
    gallery_full_screen.style.opacity = '0';
    gallery_full_screen.style.transform = 'scale(1.1)';
    
    gallery_full_screen.style.display = 'flex';
    
    setTimeout(() => {
        gallery_full_screen.style.opacity = '1';
        gallery_full_screen.style.transform = 'scale(1)';
    }, 100);
    
    


    gallery_full_screen.addEventListener('click', function () {
        
        gallery_full_screen.style.transform = 'scale(.9)';
        
        
        gallery_full_screen.style.opacity = '0';
        
        setTimeout(() => {
            
            gallery_full_screen.style.display = 'none';
        }, 100);

        gallery_full_screen.style.visibility = 'visible';
        
        gallery_viewer_close_btn.style.display = 'flex';
        
    });
    
    
    
    
    
}







function gallery_viewer_close() {
    const gallery_viewer = document.getElementById('gallery_viewer');
    
    
    
    
    
    gallery_viewer.style.opacity = '0';
    gallery_viewer.style.transform = 'scale(.9)';
    
    setTimeout(() => {
        gallery_viewer.style.visibility = 'hidden';
    }, 100);
    setTimeout(() => {
        gallery_viewer.style.display = 'none';
    }, 50);
    


}





















 const slider = document.querySelector('#gallery_tags_drag');
 let mouseDown = false;
 let startX, scrollLeft;
 let startDragging = function (e) {
     mouseDown = true;
     startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
 };

 let stopDragging = function (event) {
     mouseDown = false;
 };

 slider.addEventListener('mousemove', (e) => {
     e.preventDefault();  if(!mouseDown) {
         return;
     }
     const x = e.pageX - slider.offsetLeft;
     const scroll = x - startX;
     slider.scrollLeft = scrollLeft - scroll;
 });

 slider.addEventListener('mousedown', startDragging, false);
 slider.addEventListener('mouseup', stopDragging, false);
 slider.addEventListener('mouseleave', stopDragging, false);
 