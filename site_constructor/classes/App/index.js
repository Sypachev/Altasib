class App{
    constructor(){
        this.draging = false;
        this.dragingObj = false;
        this.activeElement = false;
        this.activeElementObj = false;
        this.lvl = 0;
        this.leftMenu = false;
        this.breacrumbs = false;
        this.header = false;
        this.body = false;
        this.propMenu = false;
        this.init();
    }

    init(){
        this.disableSelection($("body"));
        console.log("init");
        let itemsMenu = [
            "div",
            "span",
            "h",
            "img",
        ];
        this.leftMenu = new LeftMenu($(".left_panel"),"Тэги", itemsMenu);
        this.breacrumbs = new Breadcrumbs($(".panel"));
        this.header = new Header($(".panel"));
        this.body = new Body($(".panel"));
        this.propMenu = new PropMenu($(".right_panel"),"Атрибуты");
    }
    disableSelection (tag) {
        return tag.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
            ".ui-disableSelection", function( event ) {
            event.preventDefault();
        });
    }
};