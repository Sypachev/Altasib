class Body extends DomElement{
    
    constructor(parent){
        super();
        this.parent = parent;
        this.items = [];
        this.init();
    }

    init(){
        this.buildBody();
    }

    buildBody(){
        let _this = this;
        $(this.parent).append('<div id="body"></div>');
        $(this.parent).find("#body").hover(
            function(){
                if(app.lvl == 0){
                    $(this).addClass("alx_active");
                    app.activeElement = $(this);
                    app.activeElementObj = $(this);
                }
            }, 
            function(){
                $(this).removeClass("alx_active");
                app.activeElement = false;
                app.activeElementObj = false;
            }
        );
    }

    addItem(){
        if(app.activeElement){
            let item = new DomElement(app.activeElement);
            item.addItem(app.dragingObj);
            this.items.push(item);
        }
    }
    
    reDraw(){

    }
}



