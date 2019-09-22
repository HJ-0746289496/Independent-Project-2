function userInfor () {

    var dd = parseInt(document.getElementById('dd').Value);
    var mm =  parseInt(document.getElementById('mm').Value);
    var yyyy =  parseInt(document.getElementById('yyyy').Value);
    var gender=document.querySelector('input[name="gender"]:checked').Value;

    var cc = parseInt(yyyy.toString().substring(0,2)) + 1;

    var yy = parseInt(yyyy.toString().substring(2,4));

    var d=(((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd ) % 7;
    if(cc === 21){
        var workingD = Math.ceil(d);
    } else {
        var workingD = Math.round(d);
    }

    console.log(workingD)

    
    if(gender === "male"){

        if (workingD===7){

        alert("Your Akan name is Kwasi");
        }

        else if (workingD===1){
    
        alert("Your Akan name is Kwadwo");
        }

        else if (workingD===2)
        {

        alert("Your Akan name is Kwabena");
        }

        else if (workingD===3){

        alert("Your Akan name is Kwaku");
        }

        else if (workingD===4){

        alert("Your Akan name is Yaw");
        }

        else if (workingD===5){

        alert("Your Akan name is Kofi");
        }

        else {

        alert("Your Akan name is Kwame");

        }

     } else{
        

         if (workingD===7){

        alert("Your Akan name is Akosua");
        }

        else if (workingD===1){

        alert("Your Akan name is Adwoa");
        }

        else if (workingD===2){
        

        alert("Your Akan name is Abenaa");
        }

        else if (day===3){

        alert("Your Akan name is Akua");
        }

        else if (day===4){

        alert("Your Akan name is Yaa");
        }

        else if (day===5)
        {

        alert("Your Akan name is Afua");
        }

        else {

        alert("Your Akan name is Ama");

        }

    }

}
userInfor();


