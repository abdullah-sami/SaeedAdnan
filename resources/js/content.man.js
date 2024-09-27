




function import_contents() {
 

    const gallery_window_positions = document.querySelectorAll('.gallery_window .gallery_itms');
    // const gallery_window_position_len = gallery_window_positions.length - 1;

    var gallery_window_position_index = 0;

    gallery_window_positions.forEach(function(a){
        
        var a = gallery_window_positions[gallery_window_position_index];

        a.innerHTML = `<img src="${gallery_imgs[gallery_window_position_index].src}" alt="" data-img-ttl="${gallery_imgs[gallery_window_position_index].title}" data-img-desc="${gallery_imgs[gallery_window_position_index].desc}" data-img-tag="${gallery_imgs[gallery_window_position_index].tag}" onclick="gallery_viewer_open();" loading="lazy">`;


        gallery_window_position_index++;
            
             
    });




    document.querySelectorAll('.gallery_itms img').forEach(function (img) {

      img.addEventListener('click', function () {

          const gallery_viewer_img = document.getElementById('gallery_viewer_img');
          const gallery_viewer_img_ttl = document.getElementById('gallery_viewer_desc_ttl');
          const gallery_viewer_img_desc = document.getElementById('gallery_viewer_desc');
  
          const gallery_viewer_img_tags = document.getElementById('gallery_viewer_desc_container_tags');
  
  
          const tags = this.getAttribute('data-img-tag');
          var gallery_viewer_img_tag_show = "";
  
          tags.split(" ").forEach(function (img_tag) {
              gallery_viewer_img_tag_show += `<button class="gallery_viewer_desc_tag img_tag_btn" data-img-tag="${img_tag}">${img_tag}</button>`;

              
          });
  
  


          gallery_viewer_img.src = this.getAttribute('src');
          gallery_viewer_img_ttl.innerHTML = this.getAttribute('data-img-ttl');
          gallery_viewer_img_desc.innerHTML = this.getAttribute('data-img-desc');
          gallery_viewer_img_tags.innerHTML = gallery_viewer_img_tag_show;




          fetch_tags();
  
  
      });
  });
  



 
}








function load_masonry_gallery() {




  const masonry_gallery = document.querySelector("#gallery_viewer_masonry_gallery");

  var masonry_gallery_content = "";



  gallery_imgs.forEach(function(masonry_gallery_itms) {


    if(active_tag == ""){
      
      masonry_gallery_content += `<div class="gallery_viewer_masonry_item masonry-item"><img src="${masonry_gallery_itms.src}" alt="" data-img-ttl="${masonry_gallery_itms.title}" data-img-desc="${masonry_gallery_itms.desc}" data-img-tag="${masonry_gallery_itms.tag}" loading="lazy"></div>`;

    }
    else if(((masonry_gallery_itms.tag).split(" ")).includes(active_tag)){

      masonry_gallery_content += `<div class="gallery_viewer_masonry_item masonry-item"><img src="${masonry_gallery_itms.src}" alt="" data-img-ttl="${masonry_gallery_itms.title}" data-img-desc="${masonry_gallery_itms.desc}" data-img-tag="${masonry_gallery_itms.tag}" loading="lazy"></div>`;

    } else{
      masonry_gallery_content += "";
    }




  });




  masonry_gallery.innerHTML = masonry_gallery_content;




  document.querySelectorAll('.gallery_viewer_masonry_item img').forEach(function (img) {

    img.addEventListener('click', function () {
      
        const gallery_viewer_img = document.getElementById('gallery_viewer_img');
        const gallery_viewer_img_ttl = document.getElementById('gallery_viewer_desc_ttl');
        const gallery_viewer_img_desc = document.getElementById('gallery_viewer_desc');

        const gallery_viewer_img_tags = document.getElementById('gallery_viewer_desc_container_tags');


        const tags = this.getAttribute('data-img-tag');
        var gallery_viewer_img_tag_show = "";

        tags.split(" ").forEach(function (img_tag) {
            gallery_viewer_img_tag_show += `<button class="gallery_viewer_desc_tag img_tag_btn" data-img-tag="${img_tag}">${img_tag}</button>`;
        });


        gallery_viewer_img.src = this.getAttribute('src');
        gallery_viewer_img_ttl.innerHTML = this.getAttribute('data-img-ttl');
        gallery_viewer_img_desc.innerHTML = this.getAttribute('data-img-desc');
        gallery_viewer_img_tags.innerHTML = gallery_viewer_img_tag_show;





        fetch_tags();


    });


});



  

}