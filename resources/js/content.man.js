
const root_dir = "resources/img/artworks/";

let gallery_imgs = [

  { src: `${root_dir}1.jpg`, title: "Image 1", desc: "Description 1", tag: "Models Low-poly" },
  { src: `${root_dir}2.jpg`, title: "Image 2", desc: "Description 2", tag: "Assets High-poly" },
  { src: `${root_dir}3.jpg`, title: "Image 3", desc: "Description 3", tag: "Game Assets 3D" },
  { src: `${root_dir}4.jpg`, title: "Image 4", desc: "Description 4", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}5.jpg`, title: "Image 5", desc: "Description 5", tag: "Models Low-poly" },
  { src: `${root_dir}6.jpg`, title: "Image 6", desc: "Description 6", tag: "Assets High-poly" },
  { src: `${root_dir}7.jpg`, title: "Image 7", desc: "Description 7", tag: "Game Assets 3D" },
  { src: `${root_dir}8.jpg`, title: "Image 8", desc: "Description 8", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}9.jpg`, title: "Image 9", desc: "Description 9", tag: "Assets High-poly" },
  { src: `${root_dir}10.jpg`, title: "Image 10", desc: "Description 10", tag: "Game Assets 3D" },
  { src: `${root_dir}11.jpg`, title: "Image 11", desc: "Description 11", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}12.jpg`, title: "Image 12", desc: "Description 12", tag: "Models Low-poly" },
  { src: `${root_dir}13.jpg`, title: "Image 13", desc: "Description 13", tag: "Assets High-poly" },
  { src: `${root_dir}14.jpg`, title: "Image 14", desc: "Description 14", tag: "Game Assets 3D" },
  { src: `${root_dir}15.jpg`, title: "Image 15", desc: "Description 15", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}16.jpg`, title: "Image 16", desc: "Description 16", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}17.jpg`, title: "Image 17", desc: "Description 17", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}1.jpg`, title: "Image 1", desc: "Description 1", tag: "Models Low-poly" },
  { src: `${root_dir}2.jpg`, title: "Image 2", desc: "Description 2", tag: "Assets High-poly" },
  { src: `${root_dir}3.jpg`, title: "Image 3", desc: "Description 3", tag: "Game Assets 3D" },
  { src: `${root_dir}4.jpg`, title: "Image 4", desc: "Description 4", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}5.jpg`, title: "Image 5", desc: "Description 5", tag: "Models Low-poly" },
  { src: `${root_dir}6.jpg`, title: "Image 6", desc: "Description 6", tag: "Assets High-poly" },
  { src: `${root_dir}7.jpg`, title: "Image 7", desc: "Description 7", tag: "Game Assets 3D" },
  { src: `${root_dir}8.jpg`, title: "Image 8", desc: "Description 8", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}9.jpg`, title: "Image 9", desc: "Description 9", tag: "Assets High-poly" },
  { src: `${root_dir}10.jpg`, title: "Image 10", desc: "Description 10", tag: "Game Assets 3D" },
  { src: `${root_dir}11.jpg`, title: "Image 11", desc: "Description 11", tag: "Isometric Weapon Sci-fi" },
  { src: `${root_dir}12.jpg`, title: "Image 12", desc: "Description 12", tag: "Models Low-poly" },
  { src: `${root_dir}13.jpg`, title: "Image 13", desc: "Description 13", tag: "Assets High-poly" },
  { src: `${root_dir}14.jpg`, title: "Image 14", desc: "Description 14", tag: "Game Assets 3D" },
  { src: `${root_dir}15.jpg`, title: "Image 15", desc: "Description 15", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}16.jpg`, title: "Image 16", desc: "Description 16", tag: "Untextured Weapon Sci-fi" },
  { src: `${root_dir}17.jpg`, title: "Image 17", desc: "Description 17", tag: "Untextured Weapon Sci-fi" }

];





function import_contents() {
 

    const gallery_window_positions = document.querySelectorAll('.gallery_window .gallery_itms');
    // const gallery_window_position_len = gallery_window_positions.length - 1;

    var gallery_window_position_index = 0;

    gallery_window_positions.forEach(function(a){
        
        var a = gallery_window_positions[gallery_window_position_index];

        a.innerHTML = `<img src="${gallery_imgs[gallery_window_position_index].src}" alt="" data-img-ttl="${gallery_imgs[gallery_window_position_index].title}" data-img-desc="${gallery_imgs[gallery_window_position_index].desc}" data-img-tag="${gallery_imgs[gallery_window_position_index].tag}" onclick="gallery_viewer_open();">`;


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
      
      masonry_gallery_content += `<div class="gallery_viewer_masonry_item masonry-item"><img src="${masonry_gallery_itms.src}" alt="" data-img-ttl="${masonry_gallery_itms.title}" data-img-desc="${masonry_gallery_itms.desc}" data-img-tag="${masonry_gallery_itms.tag}"></div>`;

    }
    else if(((masonry_gallery_itms.tag).split(" ")).includes(active_tag)){

      masonry_gallery_content += `<div class="gallery_viewer_masonry_item masonry-item"><img src="${masonry_gallery_itms.src}" alt="" data-img-ttl="${masonry_gallery_itms.title}" data-img-desc="${masonry_gallery_itms.desc}" data-img-tag="${masonry_gallery_itms.tag}"></div>`;

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