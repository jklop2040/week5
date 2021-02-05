// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener

document.addEventListener('DOMContentLoaded', function(event){
    alert('the page is loaded!') //shows a notification that the page is loaded
    let clickMeButton = document.querySelector('.click-me-button')
    clickMeButton.addEventListener('click', function(event){
        let outputElement = document.querySelector('.output')
       // outputElement.innerHTML = '<p>Click me! was clicked <p>'
       // console.log('clicked')
       outputElement.insertAdjacentHTML('beforeend',`
       <p>Click me! was clicked <p>
       `)
    })
})