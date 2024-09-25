


var active_tag = "";


function fetch_tags(){

    document.querySelectorAll("button.img_tag_btn").forEach(function(btn) {

        btn.addEventListener("click", function() {
            
            active_tag = this.getAttribute("data-img-tag");

            load_masonry_gallery();
        });

    });


}