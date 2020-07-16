// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let javascript = document.querySelector('.like-glyph1')
let ruby = document.querySelector('.like-glyph2')
let python = document.querySelector('.like-glyph3')
let java = document.querySelector('.like-glyph4')
let elixer = document.querySelector('.like-glyph5')
let bar = document.getElementById('modal')
bar.classList.remove('modal')
bar.classList.add('hidden')

// 1. javascript
javascript.addEventListener('click', function(event){
  if(javascript.innerText == EMPTY_HEART && javascript.classList.contains('like-glyph1')){
    javascript.innerText = FULL_HEART
    javascript.classList.remove('like-glyph1')
    javascript.classList.add('activated-heart')
  }
  else{
    javascript.classList.remove('activated-heart')
    javascript.classList.add('like-glyph1')
    javascript.innerText = EMPTY_HEART
  }
})

// 2. ruby
ruby.addEventListener('click', function(event){
  if(ruby.innerText == EMPTY_HEART && ruby.classList.contains('like-glyph2')){
    ruby.classList.remove('like-glyph2')
    ruby.classList.add('activated-heart')
    ruby.innerText = FULL_HEART
  }
  else{
    ruby.classList.remove('activated-heart')
    ruby.classList.add('like-glyph2')
    ruby.innerText = EMPTY_HEART
  }
})

// 3. python
python.addEventListener('click', function(event){
  if(python.innerText == EMPTY_HEART && python.classList.contains('like-glyph3')){
    python.classList.remove('like-glyph3')
    python.classList.add('activated-heart')
    python.innerText = FULL_HEART
  }
  else{
    python.innerText = EMPTY_HEART
    python.classList.remove('activated-heart')
    python.classList.add('like-glyph3')
  }
})

// 4. java
java.addEventListener('click', function(event){
  if(java.innerText == EMPTY_HEART && java.classList.contains('like-glyph4')){
    java.innerText = FULL_HEART
    java.classList.remove('like-glyph4')
    java.classList.add('activated-heart')
  }
  else{
    java.classList.remove('activated-heart')
    java.classList.add('like-glyph4')
    java.innerText = EMPTY_HEART
  }
})

// 5. elixer
elixer.addEventListener('click', function(event){
  if(elixer.innerText == EMPTY_HEART && elixer.classList.contains('like-glyph5')){
    elixer.classList.remove('like-glyph5')
    elixer.classList.add('activated-heart')
    elixer.innerText = FULL_HEART
  }
  else{
    elixer.classList.remove('activated-heart')
    elixer.classList.add('like-glyph5')
    elixer.innerText = EMPTY_HEART
  }
})

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
