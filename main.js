// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modalError = () => {
  const modal = document.getElementById('modal')
  modal.classList.remove('hidden')
  setTimeout(() => modal.classList.add('hidden'), 5000)
}

const heartChange = heart => {
  if (heart.classList.contains('activated-heart')) {
    heart.classList.remove('activated-heart')
    heart.innerText = EMPTY_HEART
  } else {
    heart.innerText = FULL_HEART
    heart.classList.add('activated-heart')
  }
}

const handleClick = (e) => {
    mimicServerCall().then((res) => {
      alert(res)
      heartChange(e.target)
    })
    .catch((error) => {
      modalError()
      alert(error)
    })
  }

const likes = document.getElementsByClassName('like-glyph')
for (const like of likes) {
  like.addEventListener('click', (e) => handleClick(e))
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
