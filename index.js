 //When ever a key is pressed down, it should play an audio sound!
 function playSound(e) {

    // Get the audio associated with the key pressed
    const audioSound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  
    // If no audio is attached do nothing
    if (!audioSound) {
      return;
    };

    // For repetitive playback, set currentTime to zero and play the sound
    audioSound.currentTime=0;
    audioSound.play();e
  

    /* Adding the effects */

    // Get the div associated with this class (.key) with the keyCode pressed
    plainKey = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    // Add a class playing to the element so give it animation
    plainKey.classList.add("playing");
  
    

    /* Removing the effects */

    // Get all the keys in the document
    const keys = document.querySelectorAll('.key');
  

    // In theis function, there are many transitions, but the one we are concerned with is TRANSFORM
    // So if the propertyName is not transfrom, forget about it.
    // Else remove the class playing from it
    function removeTransform(e) {
      if(e.propertyName!="transform") return;
  
      this.classList.remove('playing');
      
    }
  
    // Loop through each key and fire and event 'Transition End' i.e 
    // when each transition end what should happen then send it to the function
    // removeTransform
    keys.forEach(key => key.addEventListener('transitionend', removeTransform));
  };


  //Trigger an event when ever a key is pressed and pass it to the playSound function
  window.addEventListener('keydown', playSound);