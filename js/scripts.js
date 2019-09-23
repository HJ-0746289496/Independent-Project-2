function userInfor () {

    var dd = parseInt(document.getElementById('dd').value);
    var mm =  parseInt(document.getElementById('mm').value);
    var cc = parseInt(document.getElementById("cc").value);
    var yy =  parseInt(document.getElementById('yy').value);

    var d =parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

    alert("The day of the week you were born is :" + d);

    var gender=document.querySelector('input[name="gender"]:checked').value;

   

    
    if(gender == "1"){

        alert("You are male");

        if (d===0){

        alert("Your Akan name is Kwasi");
        }

        else if (d===1){
    
        alert("Your Akan name is Kwadwo");
        }

        else if (d===2)
        {

        alert("Your Akan name is Kwabena");
        }

        else if (d===3){

        alert("Your Akan name is Kwaku");
        }

        else if (d===4){

        alert("Your Akan name is Yaw");
        }

        else if (d===5){

        alert("Your Akan name is Kofi");
        }

        else if(d===6) {

        alert("Your Akan name is Kwame");

        }
        else{
            alert("error.try again");
        }
    } 
    
    else{
        alert("You are female");

         if (d===0){

        alert("Your Akan name is Akosua");
        }

        else if (d===1){

        alert("Your Akan name is Adwoa");
        }

        else if (d===2){
        

        alert("Your Akan name is Abenaa");
        }

        else if (d===3){

        alert("Your Akan name is Akua");
        }

        else if (d===4){

        alert("Your Akan name is Yaa");
        }

        else if (d===5)
        {

        alert("Your Akan name is Afua");
        }

        else if(d===6) {

        alert("Your Akan name is Ama");

        }
        else{
            alert("error.try again")
        }

    }

}
userInfor();


