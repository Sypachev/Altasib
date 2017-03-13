class Breadcrumbs{
    constructor(parent){
        this.parent = parent;
        this.items = [];
        this.init();
    }

    init(){
        this.buildBreadcrumsbs();
    }

    buildBreadcrumsbs(){
        let _this = this;
        $(_this.parent).prepend('<div id="breadcrumbs"></div>');
        this.addItem("Body", 0);
    }
    
    addItem(name, lvl){
        let _this = this;
        if(lvl === false){
            lvl = ++app.lvl;
        }
        $(_this.parent).find("#breadcrumbs").append('<span>' + (lvl == 0 ? '' : '/') + name + '</span>');
        _this.items.push(name);
        let newEl = $(this.parent).find("#breadcrumbs span:last-child");
        newEl.data("lvl", lvl);
        newEl.on("click", function(){
            app.lvl = $(this).data("lvl");
            _this.reDraw();
        });
    }
    
    reDraw(){
        let _item = this.items;

        $(this.parent).find("#breadcrumbs").html("");
        this.items = [];
        for(let i in _item){
            if(i <= app.lvl){
                this.addItem(_item[i],i);
            }
        }
        
    }
}



