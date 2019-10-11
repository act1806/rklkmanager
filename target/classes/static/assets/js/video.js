(function ($) {

  "use strict";

  $(window).on('load', function () {



    /* 读取视频
    ==========================================================*/
    $.ajax({
      //几个参数需要注意一下
      type: "GET",//方法类型
      dataType: "json",//预期服务器返回的数据类型
      url: "http://www.bj-rklk.com/video/list",//url

      contentType: "application/json;charset-UTF-8",
      success: function (data) {
        console.log(data[4]);
        //  $("#title").html(data[4].title);
        //  $("#time").html(data[4].time);
        //  $("#description").html(data[4].description);
        //  $("#img").attr('src',data[4].pic);
        //  $("#url").attr('href',data[4].url);

        var html = '';

        for (var i = 0; i < data.length; i++) {

          html += '<div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail">' +
            ' <a id="url" class="lightbox" href=' + data[i].url + '>' +
            '<img id="img" src=' + data[i].pic + ' alt="">' +
            '</a>' +
            '<div class="caption">' +
            '<span id="title">' + data[i].title + '</span>&nbsp;&nbsp;<span id="time">' + data[i].time + '分钟' + '</span>' +
            ' <p id="description">' + data[i].description + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';

        }

        $("#row").append(html);
      },
      error: function () {
        alert("异常！");
      }
    });



  });

}(jQuery));