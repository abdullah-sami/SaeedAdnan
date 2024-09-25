
function gallery_viewer_open() {
    const gallery_viewer = document.getElementById('gallery_viewer');
    gallery_viewer.style.display = 'flex';



    load_masonry_gallery();


}









function gallery_viewer_full_screen() {
    const gallery_full_screen = document.getElementById('gallery_viewer_img_full_screen');
    const gallery_full_screen_img = document.getElementById('gallery_viewer_img_full_screen_img');

    const gallery_viewer_img = document.getElementById("gallery_viewer_img");

    gallery_full_screen.style.display = 'flex';
    gallery_full_screen_img.src = gallery_viewer_img.src;


    gallery_full_screen.addEventListener('click', function () {
        gallery_full_screen.style.display = 'none';
    });


}







function gallery_viewer_close() {
    const gallery_viewer = document.getElementById('gallery_viewer');
    gallery_viewer.style.display = 'none';
}