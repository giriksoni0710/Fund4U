
var cookiename= document.cookie.split(';')[1];
// var cookie;
function userlogin_session(){

// console.log("abc");
var username= $('#username').val();

var password= $('#password').val();

$.post('http://fund4u2.crazy4web.com/usercheck.php',{username:username,password:password},function(data){


if(data==username){

document.cookie=data;

// cookie += data;

//
// $('').append(data);
// console.log(data);
  window.location="projects.html";


  // console.log(data);


}
else {
  console.log("no data");
alert("invalid login credentials!!");

location.reload();


}


});


}

// console.log(usr);

$(document).ready(function(){



    $.post("http://fund4u2.crazy4web.com/get_projects.php",{},function(data){

  if(!data)
  {
    // alert('form not sent successfully.!!');
  }
  else{
    // let userData = null;
var arr= JSON.parse(data);
// console.log(data);

var abc;
for(var i=0;i<arr.length;i++){

//"data:image/jpeg;base64,'.base64_encode($row['name'] ).'"
//console.log(arr[i].p_image);
//return false;

//project page code
var pid= arr[i].id;

abc= '<a href="single.html?'+arr[i].id+'"><div class="proj-card-parent">';
  abc+='<div class="feature-image-parent">';
    abc+='<img src="images/1.png" alt="feature image" class="feature-image"> </div>';
  abc+='<div class="proj-card-detail"><div class="location"><span class="fas fa-map-marker-alt"></span><br><span>'+arr[i].p_country+'</span></div>  <div class="percent-funded">' ;

      abc+='<span>20%</span><br><span>funded</span></div><div class="daysToGo"><span>12</span><br><span>Days to go</span></div></div><div class="description-parent">';
abc+= '<div class="title">'+arr[i].p_name+'</div><div class="desc"><p>'+arr[i].p_desc+'.....</p></div><div class="category"><span class="fas fa-tag"></span><span>'+arr[i].p_category+'</span></div></div></div></a>';


$('.for-grid-2').append(abc);

 // console.log(document.cookie);
// var yy = document.cookie.substring(42);
// console.log(yy.indexOf(';'));
// console.log(document.cookie.substring(42,yy.indexOf(';')));


//var myString = document.cookie.substr(document.cookie.indexOf(";") + 1);
//var myString2 = document.cookie.substr(document.cookie.lastIndexOf(";")-1);


//console.log(myString);
//console.log(myString2);
// console.log(username);
// $('#name_user').append(username);

// console.log(arr[i])

// userlogin_session();




// $('a[href="single.html?'+arr[i].id+'"]').click(function(e){
//   e.preventDefault();
//   console.log(pid);
//   // var idd = arr[i].id;
//   callSingle(pid);
// window.location="single.html";
//
//
//   $('.for-grid-3').append(xyz);
//
//
//
// });

(function(){

  if(window.location.href=='http://192.168.0.23:3000/single.html?'+pid+''){
    // console.log("hey!!!");

    callSingle(pid);

  }



})();

}
$('#name_user').append(cookiename);
}



});






function callSingle(id){
console.log(id);

  $.post('http://fund4u2.crazy4web.com/get_single.php',{id},function(data1){
    if(data1)
    {
      var arr1 = JSON.parse(data1);
      // console.log(arr1);

      var xyz;
      for(var j=0;j<arr1.length;j++){
      console.log(arr1[j].id);

xyz = '<div class="proj-card-parent"><div class="feature-image-parent"><img src="images/33.png" alt="feature image" class="feature-image"></div><div class="description-parent"><div class="OwnerName">By '+arr1[j].p_name+'</div><div class="title">'+arr1[j].p_name+'</div><div class="desc">'+arr1[j].p_desc+'</div><div class="proj-card-detail"><div class="location"><span class="fas fa-map-marker-alt"></span><br><span>'+arr1[j].p_country+'</span></div><div class="percent-funded"><span>20%</span><br><span>funded</span></div><div class="daysToGo"><span>12</span><br><span>Days to go</span></div></div><div class="category"><div><span style="font-weight:700;">125</span> Backers </div><div><span class="fas fa-tag"></span><span>'+arr1[j].p_category+'</span></div></div></div><hr><div class="pledge"><div class="pledge1">Pledge cad $1 or more</div><div class="reward">REWARD</div><div class="reward_amt">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div><div class="num_backers">3 Backers</div></div><div class="pledge"><div class="pledge1">Pledge cad $10 or more</div><div class="reward">REWARD</div><div class="reward_amt">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div><div class="num_backers">3 Backers</div></div><div class="pledge"><div class="pledge1">Pledge cad $25 or more</div><div class="reward">REWARD</div><div class="reward_amt">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div><div class="num_backers">3 Backers</div></div><div class="pledge"><div class="pledge1">Pledge cad $40 or more</div><div class="reward">REWARD</div><div class="reward_amt">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div><div class="num_backers">3 Backers</div></div><div class="btnback"><a href="backer_form.html"><button class="btnBackproj">BACK THIS PROJECT</button></a></div></div>';
$('.for-grid-3').append(xyz);

$('#gmara').append(arr1[j].p_name);

      }
      // console.log(data1);
    }

  });
}






});

$('#burger').click(function(){
  if($('.menu:visible').length == 0)
  {
    // console.log('hey');
    $('.menu').show("slide", { direction: "left" }, 300);
    $('.for-grid-2').css('position','absolute');
    $('.for-grid-2').css('top','5.5%');
    $('.for-grid-2').css('opacity','0.4');
    $('body').css('overflow','hidden');
  }else {
    $('.menu').toggle();
    $('.for-grid-2').css('position','absolute');
    $('.for-grid-2').css('top','initial');
    $('.for-grid-2').css('opacity','1');
    $('body').css('overflow','initial');
  }

});

$('.proj-card-parent').click(function(){
  window.location.href = 'single.html';
});


$('.enter_link').click(function() {

       $(this).parent().fadeOut(500);
});


//================AJAX request======================//


$('#submitbtn').on('click', function(e)  {

var uname = $("#uname").val();
  var params= {uname: uname, email: $("#email").val(), password : $("#password").val() };
  e.preventDefault();
//  alert(JSON.stringify(params));
    $.ajax({
        'type'       : "POST",
        'url'        : "http://fund4u2.crazy4web.com/insert.php",
        'dataType'   : 'json',
        'data'       : params,

        ContentType: "application/json",
        success    : function(data) {
console.log(data);
// window.parent.location.href="projects.html";
  //          console.error(JSON.stringify(response));
//console.log("no error");

        },
        error      : function(data) {
           // console.log('error');
           document.cookie = uname;
           window.parent.location.href="projects.html";
           console.log(data);

        }
    });
});


$('#submitbtn2').on('click', function(e)  {

  var lmn= $("#Country-select option:selected").text();

  var params= {p_name: $("#project_name").val(), p_category: $("#Category-select option:selected").val(), p_country : lmn, p_desc: $("#project_desc").val(), fund_goal: $("#fund_required").val(),p_video: $("#video_upload").val(), p_image: $("#image_upload").val(), p_bank_acnt: $("#p_bank_acnt").val(), p_bank_branch: $("#p_bank_branch").val(), p_addn_details: $("#add_details").val() };

  e.preventDefault();

  alert(JSON.stringify(params));

    $.ajax({
        'type'       : "POST",
        'url'        : "http://fund4u2.crazy4web.com/project_insert.php",
        'dataType'   : 'json',
        'data'       : params,

        ContentType: "application/json",
        success    : function(data) {
console.log(data);
            // console.error(JSON.stringify(response));
// console.log("no error");
        },
        error      : function() {
            console.log("error");
            // console.log(data);

        }
    });
});
$('#submitbtn3').on('click', function(e){

// alert("hi");
  e.preventDefault();

  $.post("http://fund4u2.crazy4web.com/backer_insert.php",{
    f_name: $('#fname').val(), l_name: $('#lname').val(), email: $('#email').val(), fund_amount: $('#fund_amount').val()
  },function(data){

if(data=="1")
{
  alert('form not sent successfully.!!');
}else{
 window.location="payment-page.html";
}


  });
});

$('#logout').click(function(e){
  e.preventDefault();
  document.cookie = "";

  // console.log(document.cookie);
  $.post("http://fund4u2.crazy4web.com/logout.php",{},function(data){
    if(data){
      // console.log(data);
      // return false;
    window.location = "loginsignup.html";
  }
    else{
      alert('logout not done');
    }
  });
});
