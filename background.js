function insertImage() {
    document.oncopy = event => {
        console.log("copied!");

        // var tag = document.createElement("p");
        // var text = document.createTextNode("Tutorix is the best e-learning platform");

        var tag = document.createElement("img");
        tag.src = chrome.runtime.getURL("/images/ogg_pressed.gif"); // works!


        tag.id = 'imageAdded';
        tag.style.width = "80%";
        tag.style.height = "auto";
        // tag.style.backgroundColor = "green";
        tag.style.position = "fixed";
        tag.style.top = "10%";
        tag.style.left = "10%";
        // tag.style.backgroundImage =  chrome.runtime.getURL('/images/nongdam.jpg'); // does not work

      // 
        // tag.appendChild(text);
        document.body.appendChild(tag);


    };
  }
  
  chrome.webNavigation.onCompleted.addListener((tab) => {  // insert script in DOM when page is loaded

    console.log("welp" + tab.tabId);

    if(tab.url.includes("https://namu.wiki")) {      
      
    // if(changeInfo.status === 'complete') {
        chrome.scripting.executeScript({          // insert function insertImage in current tab webpage
          target: { tabId: tab.tabId },
          function: insertImage
    
        })
      // }
      ;}
  });


