class PropMenu{
    constructor(parent, title){
        this.parent = parent;
        this.title = title;
        this.propClasses = propClasses;
        this.propClassesAdaptNum = propClassesAdaptNum;
        this.propClassesAdapt = propClassesAdapt;
        this.init();
    }
    init(){
        this.buildMenu();
    }
    buildMenu(){
        $(this.parent).append(
            '<div class="block_menu"><div class="block_menu_title">'+
            this.title+
            '</div><div class="block_menu_info"></div><div class="block_menu_content"></div></div>');

        if(typeof propClasses != undefined){
            this.propClasses.forEach(item => this.buildClassCheck(item));
        }
        if(typeof propClassesAdaptNum != undefined){
            this.propClassesAdaptNum.forEach(item => this.buildClassCheckAdaptNum(item));
        }
    }
    reDraw(){
        var _this = this;

        $(this.parent).find(".block_menu_info").html('<div class="tag_name">'+app.activeElementObj.tagName+' '+ app.activeElementObj.id + '</div>');

        var activObj = $(app.activeElementObj);
        var classes = activObj.attr("class");
        var arClasses = classes.split(' ');
        $(arClasses).each(function(){
            _this.buildClassCheck(this,".block_menu_info","checked='checked'")
        });
    }

    buildClassCheck(item, target = ".block_menu_content", checked=""){
        console.log("zsdf");
        console.log(item);
        console.log(target);
        $(this.parent).find(target).append("<div class='check_class'><label><input " + checked + " type='checkbox' />" + item + "</label></div>");
        $(this.parent).find(target + " .check_class input:last").on("change", function(){
            if($(this).prop("checked")){
                $(app.activeElementObj).addClass(item);
            }else{
                $(app.activeElementObj).removeClass(item);
            }

        });
    }
    buildClassCheckAdaptNum(item){
        this.propClassesAdapt.forEach(itemAdapt => {
            $(this.parent).find(".block_menu_content").append("<div class='check_class'>" +
                "<label><input class='check' type='checkbox' />" + item + "-"+itemAdapt+"-</label>" +
                "<input class='num' type='text' />" +
                "</div>");
            $(this.parent).find(".block_menu_content .check_class input[type='checkbox']:last").on("change", function(){
                var num = $(this).closest(".check_class").find("input.num").val();
                var strClass = item+"-"+itemAdapt+"-";
                var strClassNum = strClass + num;
                $(app.activeElementObj).removeClass(strClass);
                $(app.activeElementObj).removeClassWild(strClass+"*");

                if($(this).prop("checked")){
                    $(app.activeElementObj).addClass(strClassNum);
                }else{
                    $(app.activeElementObj).removeClass(strClassNum);
                }
            });
            $(this.parent).find(".block_menu_content .check_class input.num:last").on("keyup",function () {
                var num = $(this).val();
                var strClass = item+"-"+itemAdapt+"-";
                var strClassNum = strClass + num;
                $(app.activeElementObj).removeClassWild(strClass);
                $(app.activeElementObj).removeClassWild(strClass+"*");

                if($(this).closest(".check_class").find("input.check").prop("checked")){
                    $(app.activeElementObj).addClass(strClassNum);
                }else{
                    $(app.activeElementObj).removeClass(strClassNum);
                }
            });
        });
    }
}



