// document.getElementById('ok').addEventListener('click', function(e) {
//     alert('ok is clicked')
// })
// document.getElementById('cancel').addEventListener('click', function(e) {
//     alert('cancel is clicked')
// })
// document.getElementById('no').addEventListener('click', function(e) {
//     alert('no is clicked')
// })

let elems = document.getElementsByClassName('flex-item')
console.log(elems)
for (let elem of elems) {
    elem.addEventListener('mousemove', function(e) {
        console.log('x = ' + e.screenX + ' Y = ' + e.screenY)
    })
    elem.addEventListener('click', function(e) {
        alert(elem.innerHTML)
    })
}