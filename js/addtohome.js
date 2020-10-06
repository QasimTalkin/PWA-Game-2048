var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e){
    e.preventDefault;
    deferredPrompt=e;
    showAddToHomeScreen();
});

function showAddToHomeScreen(){
    var a2hsbtn= document.querySelector(".ad2hs-prompt");
    a2hsbtn.style.display="flex";
    a2hsbtn.addEventListener("click", addToHomeScreen);
}

function addToHomeScreen(){

    if (deferredPrompt){
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choiceResult){
            if (choiceResult.outcome == 'accepted'){
                console.log("accepted");
            }else {
                console.log("denied");
            }
            deferredPrompt = null;
        });
    }

}