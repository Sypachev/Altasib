class PropMenu{
    constructor(parent, title){
        this.parent = parent;
        this.title = title;
        this.init();
    }
    init(){
        this.buildMenu();
    }
    buildMenu(){
        $(this.parent).append(
            '<div class="block_menu"><div class="block_menu_title">'+
            this.title+
            '</div><div class="block_menu_content"></div></div>');
    }
    reDraw(){
        $(this.parent).find(".block_menu_content").html('<div class="tag_name">'+app.activeElementObj.tagName+'</div>');
    }
}



