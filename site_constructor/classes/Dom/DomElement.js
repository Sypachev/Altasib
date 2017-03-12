class DomElement{

    constructor(parent){
        this.parent = parent;
        this.items = [];
        this.init();
    }

    init(){
        //this.buildBody();
    }

    addItem(dragObj){
        let _this = this;
        let tagName = dragObj.data("tag");
        this.tagName = tagName;
        let tagObj = document.createElement(tagName);
        this.obj = tagObj;
        this.parent.append(tagObj);
        $(tagObj).on("dblclick", function(){
            app.breacrumbs.addItem(tagName,false);
        });
        $(tagObj).on("click", function(){
            app.activeElement = $(this);
            app.activeElementObj = _this;
            app.propMenu.reDraw();
        });
    }

    reDraw(){
        // let _item = this.items;
        // $(this.parent).find("#breadcrumbs span").remove();
        // this.items = [];
        // this.addItem("Body");
        // for(let i in _item){
        //     if(i <= app.lvl){
        //         this.addItem(_item[i],i);
        //     }
        // }

    }
}



