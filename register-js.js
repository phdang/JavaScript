$( function() {
  $( "#dialog" ).dialog({

    autoOpen:true,
    draggable: false,
    title: "Hello there!",
    modal:true,
    show: { effect: "blind", duration: 800 },
    hide: { effect: "drop", direction: "up", duration: 1000 },


  });
});
function checkInfo(){

    var obj = document.getElementById('user');

    $(document).ready(function(){

      $('input + div.AlertError').remove();

    });

    if (obj.value==""){

      $(document).ready(function(){

        $('#user').parent().append("<div class=\"AlertError\">Bạn phải điền tên đăng nhập</div>");

      });

      obj.focus();

      return false;
    }

    obj = document.getElementById('email');

    if (obj.value==""){

      $(document).ready(function(){

        $('#email').parent().append("<div class=\"AlertError\">Bạn phải điền email</div>");

      });

      obj.focus();

      return false;
    }

    obj = document.getElementById('pass');

    if (obj.value==""){

      $(document).ready(function(){

        $('#pass').parent().append("<div class=\"AlertError\">Bạn phải điền vào ô mật khẩu</div>");

      });

      obj.focus();

      return false;
    }

    obj = document.getElementById('retypepass');

    if (obj.value==""){

      $(document).ready(function(){

        $('#retypepass').parent().append("<div class=\"AlertError\">Bạn phải điền vào ô nhập lại mật khẩu</div>");

      });

      obj.focus();

      return false;
    }

    return true;
  };

  $(document).ready(function(){

    $('#dob').datepicker({

        changeMonth: true,
        changeYear: true,
        yearRange: "c-100:c",
        dateFormat: "dd/mm/yy",
        dayNamesMin: [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
        monthNamesShort: ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]
    });

  })
