
//INPUT


document.addEventListener("click", (e) => {
    const inputs = Array.from(document.getElementsByClassName("input"));
    for (let i = 0; i < inputs.length; i++) {
       if (e.target === inputs[i]){
           const id = e.target.id;
           console.log(id);
           const outputId = `info-${id}`;
           const outputId = "info-phone";
           console.log(outputId);
           document.getElementById("info-phone").classList.remove("hidden");
       }   
   }
});

//EMAIL



//PHONE



//PASSWORD









// placeholder ="You'll verify this later"
// placeholder="Helps with lost passwords and security"
// placeholder = "Don't reuse an old password" 