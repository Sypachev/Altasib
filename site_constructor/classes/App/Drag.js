class Drag{
    constructor(){
        let that = this;
        $( ".alx_drag_container" ).sortable({
            connectWith: ".alx_drag_container",
            update: function( event, ui ) {
                console.log(event);
                console.log(ui);
                that.dropUi(ui);
            }
        });
        //this.dragEl = false;
    }

    dragStart(ev) {
        this.dragEl = ev.target
        ev.dataTransfer.effectAllowed='move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
        ev.dataTransfer.setDragImage(ev.target,100,100);
        return true;
    }
    dragEnter(ev) {
        ev.preventDefault();
        return true;
    }
    dragOver(ev) {
        event.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
        var target = ev.target;
        if(app.body.parent.find(".container *").length >0) {
            if (target && target !== this.dragEl) {
                // Сортируем
                if($(target).attr("draggable")) {
                    var rect = target.getBoundingClientRect();
                    var next = (ev.clientY - rect.top) / (rect.bottom - rect.top) > .5;
                    if(next){
                        $(this.dragEl).insertBefore($(target));
                    }else{
                        $(this.dragEl).insertAfter($(target));
                    }
                }else{
                    app.body.parent.find(".container").append($(this.dragEl));
                }
            }
        }
    }
    drop(ev) {
        var data = ev.dataTransfer.getData("Text");
        console.log($(this.dragEl).data());

        let snipet = $(this.dragEl).data();
        if(snipet.snipet.content != $(this.dragEl).html()){
            $(this.dragEl).html(snipet.snipet.content);
        }

        let isContainer = $(ev.target).hasClass("container");
        if(isContainer){
            ev.target.appendChild(document.getElementById(data));
            
            app.leftMenu.buildSnipet($(this.dragEl).data("snipet"))
            
            app.activeElementObj = this.dragEl;
            app.propMenu.reDraw();
            $(this.dragEl).on("click",function(){
                app.activeElementObj = this;
                app.propMenu.reDraw();
            });
        }

        ev.stopPropagation();
        return false;
    }
    dropUi(ui){
        if(ui.sender !== null){
            if(ui.sender[0].id == "menu_container"){

                app.activeElementObj = ui.item[0];
                app.propMenu.reDraw();
                $(app.activeElementObj).on("click",function(){
                    app.activeElementObj = this;
                    app.propMenu.reDraw();
                });
                app.leftMenu.buildSnipet($(ui.item[0]).data("snipet"))
            }
        }

    }
}

