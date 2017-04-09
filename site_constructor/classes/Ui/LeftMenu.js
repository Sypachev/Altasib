class LeftMenu{
    constructor(){
        this.counter = 0;
        this.parent = false;
        this.title = "Μενώ";
        this.snipets = snipets;
        this.init();
    }
    init(){
        this.buildMenu();
    }
    buildMenu(){
        $("body").append('<div id="left_panel"></div>');
        this.parent = $("#left_panel");
        $(this.parent).append('<div class="block_menu">' +
            '<div class="block_menu_title">'+this.title+'</div>' +
            '<div ' +
            'id="menu_container" ' +
            // 'ondragenter="return app.drag.dragEnter(event)" ' +
            // 'ondrop="return app.drag.drop(event)" ' +
            // 'ondragover="return app.drag.dragOver(event)" ' +
            'class="alx_drag_container block_menu_content"></div></div>');
        this.snipets.forEach(item => this.buildSnipet(item));
    }
    buildSnipet(snipet){
        if(this.hasSnipet(snipet)) return;
        let _this = this;
        $(this.parent).find(".block_menu_content").append('<div ' +
            'id="menu_item_'+this.counter+'" ' +
            // 'ondragstart="return app.drag.dragStart(event);" ' +
            // 'draggable="true" ' +
            'class="tag col-sm-12">' +
            snipet.name +
            '</div>');
        let item = $(this.parent).find(".block_menu_content .tag:last-child");
        item.data("snipet", snipet);
        this.counter++;
    }
    hasSnipet(snipet){
        var res = false;
        $("#menu_container *").each(function(){
            var data = $(this).data("snipet");
            if(data.name == snipet.name){
                res = true;
                return true;
            }
        });
        return res;
    }
}




