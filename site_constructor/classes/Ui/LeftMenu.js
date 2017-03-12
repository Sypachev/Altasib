class LeftMenu{
    constructor(parent, title, items){
        this.parent = parent;
        this.title = title;
        this.items = items;
        this.init();
    }
    init(){
        this.buildMenu();
    }
    buildMenu(){
        $(this.parent).append('<div class="block_menu"><div class="block_menu_title">'+this.title+'</div><div class="block_menu_content"></div></div>');
        this.items.forEach(item => this.buildItem(item));
    }
    buildItem(tag){
        let _this = this;
        $(this.parent).find(".block_menu_content").append('<div class="tag" data-tag="'+tag+'">'+tag+'</div>');
        let temp = $(this.parent).find(".block_menu_content .tag:last-child");
        temp
            .on("mousedown", function(e) {

                let that = this;

                //������ ��������� ���������
                var coords = _this.getCoords(that);
                var shiftX = e.pageX - coords.left;
                var shiftY = e.pageY - coords.top;

                //������� ����
                let clon = $(that).clone();
                app.dragingObj = clon;
                $("body").append(clon);

                //���������� ��� drag`n drop
                clon.css("position",'absolute');
                clon.css("zIndex",'1000');
                clon.css("width",'0px');
                clon.css("height",'0px');

                //�������������� ���������������� �����
                moveAt(e);

                //���������� ��������. ���� �� ���������. ����� ����� ��� ���������� ������� ������������
                app.draging = true;

                //������� ����������������
                function moveAt(e) {
                    clon.css("left", e.pageX - shiftX +'px');
                    clon.css("top", e.pageY - shiftY - 20 + 'px');
                }

                //������� �����
                $(document).on("mousemove.leftmenu", function(e) {
                    moveAt(e);
                });

                //�������� �������������� � ��������� ������ �������� ����
                $(document).on("mouseup.leftmenu", function(e) {
                    $(document).unbind("mousemove.leftmenu");
                    app.draging = false;
                    $(document).unbind("mouseup.leftmenu");
                    _this.logicTarget(clon);
                });

            });

        temp.ondragstart = function() {
            return false;
        };
    }

    logicTarget(clon){
        app.body.addItem()
        clon.remove();
    }

    getCoords(elem) { // ����� IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
}



