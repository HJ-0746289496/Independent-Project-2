function userInfor () {
    var CC=parseInt(prompt("Enter the first two digits of the century you were born"));
    var YY=parseInt(prompt("Enter the first two digits of the year you were born"));
    var MM=parseInt(prompt("Enter the first two digits of the month you were born"));
    var DD=parseInt(prompt("Enter the first two digits of the day you were born"));

    alert("Your birthday is" + " " + DD+ " " + MM + " " + CC + YY);

    var day=(((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;

    alert("The day of the week you were born is" + day);

    var gender=prompt("Enter the letter that represents your gender, A=female,B=male");

    if("gender==A"){

    

         alert("You are female");

        if (day===7)

        {
            alert("Your Akan name is Akosua");
        }

        else if (day===1)
        {

        alert("Your Akan name is Adwoa");
        }

        else if (day===2)
        {

        alert("Your Akan name is Abenaa");
        }

        else if (day===3){

        alert("Your Akan name is Akua");
    }

        else if (day===4){

        alert("Your Akan name is Yaa");
        }

        else if (day===5){

        alert("Your Akan name is Afua");
        }

        else {

        alert("Your Akan name is Ama");
        }

    }


if("gender==B"){ 

    alert("You are male");

         if (day===7){

        alert("Your Akan name is Kwasi");
        }

        else if (day===1){

        alert("Your Akan name is Kwadwo");
        }

        else if (day===2){
        

        alert("Your Akan name is Kwabena");
        }

        else if (day===3){

        alert("Your Akan name is Kwaku");
        }

        else if (day===4){

        alert("Your Akan name is Yaw");
        }

        else if (day===5)
        {

        alert("Your Akan name is Kofi");
        }

        else {

        alert("Your Akan name is Kwame");
        }

}

}
userInfor();
//lets run the function now

