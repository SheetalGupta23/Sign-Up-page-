var namee=document.getElementById('fill_name');
namee.onblur=function n()
{
		namee.style.border="2px solid red";
		var nalert=document.getElementById('n_alert');
		nalert.style.display="block";

		namee.onclick=function hide()
		{
			nalert.style.display="none";
			namee.style.border="none";
			var name_png=document.getElementById('pngname');

			if(namee.value=="")
			{
				name_png.style.display="block";
			}
			else
			{
				name_png.style.display="none";
			}

			namee.onblur=function only()
			{
				name_png.style.display="none";
			}

			namee.oninput=function again_hide()
			{
				name_png.style.display="none";
				if(namee.value=="")
				{
					n();
				}
				else
				{
					nalert.style.display="none";
					namee.style.border="none";
				}
			}

		}
}

var surname=document.getElementById('fill_surname');
surname.onblur=function sn()
{
		surname.style.border="2px solid red";
		var salert=document.getElementById('s_alert');
		salert.style.display="block";

		surname.onclick=function hide1()
		{
			salert.style.display="none";
			surname.style.border="none";
			var surname_png=document.getElementById('pngsurname');

			if(surname.value=="")
			{
				surname_png.style.display="block";
			}
			else
			{
				surname_png.style.display="none";
			}

			surname.onblur=function sonly()
			{
				surname_png.style.display="none";
			}

			surname.oninput=function surname_hide()
			{
				surname_png.style.display="none";
				if(surname.value=="")
				{
					sn();
				}
				else
				{
					salert.style.display="none";
					surname.style.border="none";
				}
			}

		}
}

var number=document.getElementById('fill_number');
number.onblur=function num()
{
		number.style.border="2px solid red";
		var numalert=document.getElementById('no_alert');
		numalert.style.display="block";

		number.onclick=function hide2()
		{
			numalert.style.display="none";
			number.style.border="none";
			var number_png=document.getElementById('pngnumber');

			if(number.value=="")
			{
				number_png.style.display="block";
			}
			else
			{
				number_png.style.display="none";
			}

			number.onblur=function numonly()
			{
				number_png.style.display="none";
			}

			number.oninput=function number_hide()
			{
				number_png.style.display="none";
				if(number.value=="")
				{
					num();
				}
				else
				{
					numalert.style.display="none";
					number.style.border="none";
				}
			}

		}
}


var password=document.getElementById('fill_pass');
password.onblur=function pass()
{
		password.style.border="2px solid red";
		var passalert=document.getElementById('pass_alert');
		passalert.style.display="block";		

		password.onclick=function hide3()
		{
			passalert.style.display="none";
			password.style.border="none";
			var pass_png=document.getElementById('pngpass');

			if(password.value=="")
			{
				pass_png.style.display="block";
			}
			else
			{
				pass_png.style.display="none";
			}

			password.oninput=function removebox()
			{	
				if(password.value=="")
			{
				pass_png.style.display="block";
			}
			else
			{
				pass_png.style.display="none";
				passbox.style.display="none";
			}

			var check=document.getElementById('chk');
			if(password.value=="")
			{
				check.disabled=true;
			}
			else
			{
				check.disabled=false;
			}
		}

			password.onblur=function passonly()
			{
				pass_png.style.display="none";
			}
		}
}

password.onclick=function showbox()
{
	var passbox=document.getElementById('passbox');
	passbox.style.display="block";

	var rec=document.getElementById('rec_pass');
	rec.onclick=function fill()
	{
		var given=rec.innerHTML;
		password.value=given;
		passbox.style.display="none";

		if(password.value==given)
		{
			password.style.border="none";
			var passalert=document.getElementById('pass_alert');
			passalert.style.display="none";
			var check=document.getElementById('chk');
			check.disabled=false;
		}
	}

	var check=document.getElementById('chk');
	check.onclick=function show()
	{	

		if(check.checked)
		{
			password.type="text";
		}
		else
		{
			password.type="password";
		}
	}
}

var subtn=document.getElementById('btn');
subtn.onclick=function sub()
{
	var namee=document.getElementById('fill_name');
	var surname=document.getElementById('fill_surname');
	var number=document.getElementById('fill_number');
	var password=document.getElementById('fill_pass');
	var date=document.getElementById('fill_dob');

	var nalert=document.getElementById('n_alert');
	var salert=document.getElementById('s_alert');
	var numalert=document.getElementById('no_alert');

	if(namee.value || surname.value || number.value || password.value || date.value=="")
	{
		namee.style.border="2px solid red";
		surname.style.border="2px solid red";
		number.style.border="2px solid red";
		password.style.border="2px solid red";
		date.style.border="2px solid red";

		nalert.style.display="block";
		salert.style.display="block";
		numalert.style.display="block";
	}
	else
	{	
		var loginbox=document.getElementById('loginbox');
		loginbox.style.display="block";
		var ok=document.getElementById('ok');
		ok.style.display="block";
	}
}




