let emailCollector = document.getElementById("email-collector");

emailCollector.addEventListener("submit", (event) => {
  event.preventDefault();
  let ourFormData = new FormData(event.target);

  let userName = ourFormData.get("userName");
  let userEmail = ourFormData.get("userEmail");

  let upadateHtml = `
    <h2>Congratulations, ${userName}</h2>

    <p>You're on your way to becoming a BBQ Mater!</p>

    <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
    `;

  let mainContent = document.getElementById("main-content");

    mainContent.innerHTML = upadateHtml;
    
    console.log('mainContent.innerHTML = upadateHtml;:', mainContent.innerHTML = upadateHtml)
  
  console.log('upadateHtml:', upadateHtml)
});
