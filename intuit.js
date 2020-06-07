'use strict';




const showInfo = () => {
    document.addEventListener("click", (e) => {
        const inputs = Array.from(document.getElementsByClassName("input"));
        for (let i = 0; i < inputs.length; i++) {
            const id = inputs[i].id;
            const outputId = `info-${id}`;
            const infoText = document.getElementById(outputId);  
          
            if (e.target === inputs[i]){
               infoText.classList.remove("hidden");
               phoneEntries.verifyPhone(e.target.id);
               phoneEntries.isNumber();

           } 
           else {
               if
               (!infoText.classList.contains("hidden")) {
                   infoText.classList.add("hidden");
               };
           }  
        }
    });
};

const addEmail = () =>  {}
 
const phoneEntries = (function(){
    const phoneField = document.getElementById("fieldset-phone");
    const phoneInput = document.getElementById("phone");
   
    return {
        
         verifyPhone: function(target) {
            const isVerified = document.getElementById("fieldset-verify");
            const html = 
                 `
                <div id="fieldset-verify">
                <input id="verify" type="checkbox" name="verify" checked>
                <span id="verify-text" >Verify with text message </span>
        
                <span class="very-small" id="verify-italic">(most secure)</span>
                </div>
                `
    
            if (target ==="phone" && !isVerified){
      
                phoneField.innerHTML += html;
            }
         },

         isNumber: function(){
             phoneInput.addEventListener("keydown", function (e){
                 
                var charCode = (e.which) ? e.which : e.keyCode
                if (charCode > 31 && (charCode < 48 || charCode > 57))
                    return false;
                return true;
            })
         }
          
    }  
})();

const addPassword = (e) =>  {

}

showInfo();

// placeholder ="You'll verify this later"
// placeholder="Helps with lost passwords and security"
// placeholder = "Don't reuse an old password" 