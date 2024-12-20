jQuery(document).ready(function($){
    var isvalidinputdata = false;
    
       function validateUsername(){
           var username = $("#username").val();
   
           if(username == "" || username == null){
               isvalidinputdata = false;
               $(".username-error").removeClass("hide");
           }
           else{
               isvalidinputdata=true;
               $(".username-error").addClass("hide");
           }
           return isvalidinputdata;
       }
       function validatePassword(){
           var password = $("#password").val();
           if(password == "" || password == null){
               isvalidinputdata=false;
               $(".password-error").removeClass("hide");
           }
           else{
               isvalidinputdata=true;
               $(".password-error").addClass("hide");
           }
           return isvalidinputdata;
       }
      function validateInputfields(){
        var username = $("#username").val();
        var password = $('#password').val();
        if(username != 'Shajahan' || password != 'ShajahanBabu15'){
            isvalidinputdata = false;
            $(".input-mismatch-error").removeClass('hide');
        }
        else{
            isvalidinputdata = true;
            $('.input-mismatch-error').addClass('hide');
        }
        return isvalidinputdata;
      }
       
      $(document).on('click', '.login-btn', function(){
      var valid = validateUsername() && validatePassword() && validateInputfields();
      if(valid){
       console.log("success");
       
       setTimeout(function(){window.location.href = "sms.html"},100 )
      }
   
      });

      var modal = document.getElementById('addStudentDetails');
   
      $("#addstudent").click(function(){
       modal.style.display = "block";
   
      })
      $(".close").click(function(){
       modal.style.display = "none";
   
      })
   
     const create = document.getElementById("create");
       const table =  document.querySelector("tbody");
       function addStudentDetails(e){
           e.preventDefault();
           const ide = document.getElementById("id").value;
           const name = document.getElementById("name").value;
           const course = document.getElementById("course").value;
           const yop = document.getElementById("yop").value;
           const performance = document.getElementById("performance").value;
           const percentage = document.getElementById("percentage").value;
           const attendancepercentage = document.getElementById("attendance-percentage").value;
           const score = percentage/10;
           table.innerHTML += `
           <tr class='tablerow'>
               <td id="ids">${ide}</td>
               <td id="sname">${name}</td>
               <td id="scourse">${course}</td>
               <td id="syop">${yop}</td>
               <td id="aperc">${attendancepercentage}</td>
               <td id="perc">${percentage}</td>
               <td id="perf">${performance}</td>
               <td id="score">${score}</td>
                `;
         modal.style.display = "none";
         if(score >=8.5){
            $("#ids,#sname,#scourse,#syop,#aperc,#perc,#perf,#score").addClass('positivehighlightstudent');
         }
        
        if(score < 3.5){
            $("#ids,#sname,#scourse,#syop,#aperc,#perc,#perf,#score").addClass('negativehighlightstudent');
         }
       
       }
      function validateModalFields(){
        validatemodaldata = false;
        var sid = $("#id").val();
        var name = $("#name").val();
        var course = $("#course").val();
        var yop = $("#yop").val();
        var performance = $("#performance").val();
        var percentage = $("#percentage").val();
      if( sid == "" || sid == null 
          || name == "" || name == null
          || course == "" || course == null 
          || yop == "" || yop == null 
          || performance == "" || performance == null 
          || percentage == "" || percentage == null) {
            validatemodaldata = false;
            $("#modal-input-error").removeClass('hide');

          }
       else{
        validatemodaldata = true;
        $("#modal-input-error").addClass('hide');
        create.addEventListener("click",addStudentDetails);

        } 
    return validatemodaldata;
    }

   create.addEventListener("click",addStudentDetails);

   });
