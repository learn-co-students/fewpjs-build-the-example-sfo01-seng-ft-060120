// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// grab the modal id and add a className of hidden
let hiddenModal = document.getElementById('modal')
hiddenModal.className = 'hidden'
// grab all the likes glyphs
const likeHeart = document.querySelectorAll('.like')

// have the hearts icon be able to switch from full to empty
const  glyphyStatus = {
  '♡':'♥',
  '♥':'♡'
};

// have the color of the hearts be able to switch from red to none
const colorStatus = {
  "blue" : "",
  "": "blue"
};

const likeTheHeart = (e) => {
  let targetHeart = e.target
  mimicServerCall(url="http://mimicServer.example.com")
  .then(function(res){
    targetHeart.innerText = glyphyStatus[targetHeart.innerText]
    targetHeart.style.color = colorStatus[targetHeart.style.color]
  })
  .catch(function(error){
    console.log(error)

    document.getElementById('modal').className = " "
  });


}

for(const glyph of likeHeart){
  console.log(glyph)
  glyph.addEventListener('click', likeTheHeart)
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
mimicServerCall()
