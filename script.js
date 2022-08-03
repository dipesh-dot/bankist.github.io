'use strict';





// ==========================user details=================




var objPeople = [
  {
    user: 'b',
    pin: 5,
    amount: 10,

  },


  {
    user: 'dipesh',
    pin: 1,
    amount: 10,

  },
  {
    user: 'Rajesh',
    pin: 123,
    amount: 20,
  },
  {
    user: 'abishkar',
    pin: 123,
    amount: 30,
  },


];



document.getElementById("enter_btn").addEventListener("click", function () {

  // =====================================initialize the value of username and password ====================================

  var username = document.querySelector('.input_type_username').value;
  var userpin = document.querySelector('.input_type_pin').value;




  for (var i = 0; i < objPeople.length; i++) {


    if (username == objPeople[i].user && userpin == objPeople[i].pin) {



      // ================================display current balance===============================

      const currentBalance = objPeople[i].amount
      document.getElementById("balance").innerHTML = currentBalance;


      // ============================dashboard display=============================================

      var opacityValue = document.querySelector('.dashboard')
      opacityValue.setAttribute("style", "opacity: 1;");


      // ============================login title popup==========================================

      const changeP = document.querySelector('.login_title')
      changeP.textContent = ` hi i am ${objPeople[i].user}`

      //=================================username and password visibility=================================
      var login_ui = document.querySelector('.login_id_and_password  ')
      login_ui.setAttribute('style', 'opacity:1;')

      //==================================enter btn visibility=========================================
      var enterbtn1 = document.querySelector('.enter_btn')
      enterbtn1.setAttribute('style', 'opacity:1;')

      return
    }
  }
  console.log(' incorrect username or password');


});


//==================================transfer money======================================= 



document.querySelector(".money_transfer_enter_btn").addEventListener("click", function () {


  // =================Receiver name and sending amount==================================

  var receiverName = document.querySelector(".transfer_to_username").value;
  var amount_Sending = parseInt(document.querySelector(".amount_to_transfer_to").value);

  for (var i = 0; i < objPeople.length; i++) {

    if (receiverName == objPeople[i].user) {
      var prevAmount = objPeople[i].amount;

      prevAmount = prevAmount - amount_Sending;
      

      
      document.getElementById("balance").innerHTML = prevAmount;

    }
  }



});


// ============================Request loan ===========================



document.querySelector(".request_money_enter_btn").addEventListener("click", function () {
 

   var request_loan  = parseInt(document.querySelector('.Request_money_input').value);



 currentBalance = request_loan + currentBalance;

 document.getElementById("balance").innerHTML = currentBalance;
 
});

// =======================================media Query================================================

