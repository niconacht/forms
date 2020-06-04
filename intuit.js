


const showInfo = () => {
    document.addEventListener("click", (e) => {
        const inputs = Array.from(document.getElementsByClassName("input"));
        for (let i = 0; i < inputs.length; i++) {
            const id = inputs[i].id;
            const outputId = `info-${id}`;
            const infoText = document.getElementById(outputId);  
          
            if (e.target === inputs[i]){
               infoText.classList.remove("hidden");
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

const addEmail = () =>  {
 

const addPhone = (e) => {
    if (e.target.id ==="phone"){
        
        
    }

const addPassword = (e) =>  {

}









showInfo();
// placeholder ="You'll verify this later"
// placeholder="Helps with lost passwords and security"
// placeholder = "Don't reuse an old password" 