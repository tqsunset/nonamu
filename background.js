function insertImage() {
    document.oncopy = event => {
        console.log("copied!");

        // var tag = document.createElement("p");
        // var text = document.createTextNode("Tutorix is the best e-learning platform");

        var tag = document.createElement("img");
        tag.src = chrome.runtime.getURL("/images/nongdam.jpg"); // works!


        tag.id = 'imageAdded';
        tag.style.width = "50%";
        tag.style.height = "auto";
        // tag.style.backgroundColor = "green";
        tag.style.position = "fixed";
        tag.style.top = "100px";
        tag.style.left = "20%";
        // tag.style.backgroundImage =  chrome.runtime.getURL('/images/nongdam.jpg'); // does not work

      // 
        // tag.appendChild(text);
        document.body.appendChild(tag);


    };
  }
  
chrome.action.onClicked.addListener((tab) => {  // insert script in DOM when extension icon cliked
    if(!tab.url.includes("chrome://")) {      
      chrome.scripting.executeScript({          // insert function insertImage in current tab webpage
        target: { tabId: tab.id },
        function: insertImage
      });
    }
  });


