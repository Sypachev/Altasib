class Header{
    
    constructor(parent){
        this.parent = parent;
        this.items = [];
        this.init();
    }

    init(){
        this.buildHeader();
    }

    buildHeader(){
        $(this.parent).append('<div id="header"></div>');
    }
    
    addItem(name, lvl){

    }
    
    reDraw(){
      
    }
}



