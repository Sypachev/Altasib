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
        let drag = new Drag();
        $(this.parent).prepend('<div id="body">' +
            '<div id="container" ' +
            // 'ondragenter="return app.drag.dragEnter(event);" ' +
            // 'ondrop="return app.drag.drop(event);" ' +
            // 'ondragover="return app.drag.dragOver(event);" ' +
            'class="alx_drag_container container"></div>' +
            '</div>');
    }
}



