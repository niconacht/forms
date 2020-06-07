


const showInfo = () => {
    document.addEventListener("click", (e) => {
        const inputs = Array.from(document.getElementsByClassName("input"));
        for (let i = 0; i < inputs.length; i++) {
            const id = inputs[i].id;
            const outputId = `info-${id}`;
            const infoText = document.getElementById(outputId);  
          
            if (e.target === inputs[i]){
               infoText.classList.remove("hidden");
               addPhone(e.target.id);
           } 
           else {
               if
               (!infoText.classList.contains("hidden")) {
                   infoText.classList.add("hidden");
               };
           }  
       }
    });
}

const addEmail = () =>  {}
 

const addPhone = (target) => {
    const html = 
    `
    <div id="fieldset-verify">
    <input id="verify" type="checkbox" name="verify" checked>
        <span id="verify-text" >Verify with text message </span>
        
        <span class="very-small" id="verify-italic">(most secure)</span>
    </div>
    `
    const isVerified = document.getElementById("fieldset-verify")
    if (target ==="phone" && !isVerified){
      const phoneField = document.getElementById("fieldset-phone");
      phoneField.innerHTML += html;
   
    }
}

const addPassword = (e) =>  {

}









showInfo();
// placeholder ="You'll verify this later"
// placeholder="Helps with lost passwords and security"
// placeholder = "Don't reuse an old password" 