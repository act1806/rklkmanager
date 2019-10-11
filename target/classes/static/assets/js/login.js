
(function ($) {
    "use strict";

     //jquery form序列化转换为json对象
     
    $.fn.serializeJson=function(){
        var serializeObj={};
        var array=this.serializeArray();
        var str=this.serialize();
        $(array).each(function(){
        if(serializeObj[this.name]){
            if($.isArray(serializeObj[this.name])){
            serializeObj[this.name].push(this.value);
            }else{
            serializeObj[this.name]=[serializeObj[this.name],this.value];
            }
        }else{
            serializeObj[this.name]=this.value;
        }
        });
        return serializeObj;
    };

    /*==================================================================
    [ Focus input ]*/
    // $('.input100').each(function(){
    //     $(this).on('blur', function(){
    //         if($(this).val().trim() != "") {
    //             $(this).addClass('has-val');
    //         }
    //         else {
    //             $(this).removeClass('has-val');
    //         }
    //     })    
    // })
  
  
    /*==================================================================
    [ Validate ]*/
    //var input = $('.validate-input .input100');

    // $('.validate-form').on('submit',function(){
    //     var check = true;

    //     for(var i=0; i<input.length; i++) {
    //         if(validate(input[i]) == false){
    //             showValidate(input[i]);
    //             check=false;
    //         }
    //     }

    //     return check;
    // });


    // $('.validate-form .input100').each(function(){
    //     $(this).focus(function(){
    //        hideValidate(this);
    //     });
    // });

    // function validate (input) {
    //     if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
    //         if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
    //             return false;
    //         }
    //     }
    //     else {
    //         if($(input).val().trim() == ''){
    //             return false;
    //         }
    //     }
    // }

    // function showValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).addClass('alert-validate');
    // }

    // function hideValidate(input) {
    //     var thisAlert = $(input).parent();

    //     $(thisAlert).removeClass('alert-validate');
    // }
    
    /*==================================================================
    [ Show pass ]*/
    // var showPass = 0;
    // $('.btn-show-pass').on('click', function(){
    //     if(showPass == 0) {
    //         $(this).next('input').attr('type','text');
    //         $(this).addClass('active');
    //         showPass = 1;
    //     }
    //     else {
    //         $(this).next('input').attr('type','password');
    //         $(this).removeClass('active');
    //         showPass = 0;
    //     }
        
    // });

    var getCurrAbsPath = function(){
        var curPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curPath.indexOf(pathName);
        return curPath;
       };

    /*====================================================================*/
    $('#lg-submit-btn').on('click', function(){
        //var d = $(".login100-form").serializeJson();
        console.log($('#lg-name').val());
        console.log($('#lg-password').val());

        if (!$('#lg-name').val() || !$('#lg-password').val()) {
            $("#lg-lbl").html("请输入用户名或密码");
            return;
        } else {
            $("#lg-lbl").html("");
        }

        var parameter = {
            "name": $('#lg-name').val(),
            "password": $('#lg-password').val()
        };

        $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "http://www.bj-rklk.com/login" ,//url
                data: JSON.stringify(parameter),
                contentType: "application/json;charset-UTF-8",
                success : function(data){
                    if (data == "501"){
                        $("#lg-lbl").html("用户名或密码错误");
                    } else if (data == "404") {
                        $("#lg-lbl").html("用户名不存在");
                    } else if (data == "200") {
                        $("#lg-lbl").html("登录成功，跳转中......");
                        //console.log(getCurrAbsPath())
                        window.location.href = "videos/videos.html"; 
                    }
                },
                error : function() {
                    alert("异常！");
                }
            });
        
    });




})(jQuery);

   