chrome.runtime.onMessage.addListener(request => {
    if (request.type === 'genderMag') {
     /*   const myIframe = document.createElement('iframe');
        myIframe.innerHTML = `<iframe id="headlineFetcher"style="height:100%"></iframe>`;
        document.body.appendChild(myIframe);
        myIframe.src = chrome.extension.getURL("index.html");
        myIframe.style.width = "640px";
        myIframe.style.height = "480px"; */
 
     
        const modal = document.createElement('dialog');
      modal.setAttribute("style", "height:70%");
      modal.innerHTML = `<iframe id="headlineFetcher" width="560" height="315""></iframe>
          <div style="position:absolute; top:0px; left:5px;">  
              <button>x</button>
          </div>`; 
      document.body.appendChild(modal);
      const dialog = document.querySelector("dialog");
      dialog.showModal();
      const iframe = document.getElementById("headlineFetcher");  
      iframe.src = chrome.extension.getURL("index.html");
      iframe.frameBorder = 0;
      dialog.querySelector("button").addEventListener("click", () => {
          dialog.close();
       }); 
    } 
  });