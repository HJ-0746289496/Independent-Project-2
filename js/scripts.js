function userInfor () {
    var CC=parseInt(prompt("Enter the first two digits of the century you were born"));
    var YY=parseInt(prompt("Enter the first two digits of the year you were born"));
    var MM=parseInt(prompt("Enter the first two digits of the month you were born"));
    var DD=parseInt(prompt("Enter the first two digits of the day you were born"));

    alert("Your birthday is" + " " + DD+ " " + MM + " " + CC + YY);

    var day=(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;

    alert("The day of the week you were born is" + day);

    var gender=prompt("Enter the letter that represents your gender, A=female,B=male");

    if("gender===A")
    { alert("You are female");

    if (day===0);
    {alert("Akosua")}

    if (day===1);
    {alert("Adwoa")}

    if (day===2);
    {alert("Abenaa")}

    if (day===3);
    {alert("Akua")}

    if (day===4);
    {alert("Yaa")}

    if (day===5);
    {alert("Afua")}

    if (day===6);
    {alert("Ama")}

    }


if("gender===B")
{ alert("You are male");
if (day===0);
{alert("Kwasi")}

if (day===1);
{alert("Kwadwo")}

if (day===2);
{alert("Kwabena")}

if (day===3);
{alert("Kwaku")}

if (day===4);
{alert("Yaw")}

if (day===5);
{alert("Kofi")}

if (day===6);
{alert("Kwame")}

}

}

userInfor();

