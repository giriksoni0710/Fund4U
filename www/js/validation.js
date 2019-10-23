// var a=0;

function checkName(id){
  let x = document.getElementById(id).value;
	if(x == "" || isNaN(x) == false)
  {
    let result="*Enter a valid username ";
    document.getElementById('uname_error').innerHTML = result;
    // a=1;
    return false;
  }else{
			document.getElementById("uname_error").innerHTML="";
			// a=0;
			return true;
		}
}

function checkEmail(id)
{
	let x = document.getElementById(id).value;
	let atpos = x.indexOf("@");
	let dotpos = x.lastIndexOf(".");
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		let result="*Enter valid email";
		document.getElementById("email_error").innerHTML=result;
		// a=1;
		return false;
	}else{
    document.getElementById("email_error").innerHTML="";
    // a=0;
    return true;
	}
  // return true;
}
function checkPass(id)
{
  let x = document.getElementById(id).value;
	if(x == "" || x.length<8)
	{
		let result="*Password cannot be less than 8 characters";
		document.getElementById("pass_error").innerHTML=result;
		// a=1;
		return false;
	}
	else{
		document.getElementById("pass_error").innerHTML="";
		// a=0;
		return true;
	}
}

function confirmPassword(id)
{
  // console.log(id);
  let x = document.getElementById('password').value;
  let y = document.getElementById(id).value;
  if(x !== y)
  {
    let result="*Password do not match";
		document.getElementById("pass_confirm_error").innerHTML=result;
    // a=1;
    return false;
  }else{
    // console.log('hey');
    document.getElementById("pass_confirm_error").innerHTML="";
    // a=0;
    return true;
  }
}
// console.log(checkBox);
const submit = document.getElementById('submitbtn');
submit.addEventListener('click',function(e){
  e.preventDefault();
  const checkBox = document.getElementById("checkbox").checked;
  if(checkName('uname') && checkEmail('email') && checkPass('password') && confirmPassword('confirmPass') && checkBox == true)
  {
    username = $('#uname').val();
    // console.log(username);
    email = $('#email').val();
    // console.log(email);
    pass = $('#password').val();
    // console.log(pass);
    $.post('ajaxFiles/signup.php',
    {
      username:username,
      email:email,
      pass:pass
    },function(data){
      console.log(data);
    });
  }else{
    console.log('dont hey me');
  }
});
