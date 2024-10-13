var active_tag = "";


function fetch_tags() {

    document.querySelectorAll("button.img_tag_btn").forEach(function (btn) {


        assign_tag();
        
        btn.addEventListener("click", function () {

            active_tag = this.getAttribute("data-img-tag");

            assign_tag();

            load_masonry_gallery();
        });

    });


}






function assign_tag(){
    document.querySelectorAll(".gallery_tag_selected").forEach(function (active_btn) {
        active_btn.classList.remove("gallery_tag_selected");
        active_btn.disabled = false;

    });

    document.querySelectorAll(".img_tag_btn").forEach(function (btn) {

        if ((btn.getAttribute("data-img-tag").split(" ")).includes(active_tag)) {

            btn.classList.add("gallery_tag_selected");
            btn.disabled = true;

        }

    });
}