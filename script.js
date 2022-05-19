// document.getElementById('ok').addEventListener('click', function(e) {
//     alert('ok is clicked')
// })
// document.getElementById('cancel').addEventListener('click', function(e) {
//     alert('cancel is clicked')
// })
// document.getElementById('no').addEventListener('click', function(e) {
//     alert('no is clicked')
// })

// let elems = document.getElementsByClassName('flex-item')
// console.log(elems)
// for (let elem of elems) {
//     elem.addEventListener('mousemove', function(e) {
//         console.log('x = ' + e.screenX + ' Y = ' + e.screenY)
//     })
//     elem.addEventListener('click', function(e) {
//         alert(elem.innerHTML)
//     })
// }
// document.getElementById('ok').addEventListener('click', function(e) {
//     let noElement = document.getElementById('no')
//     if (noElement.classList.contains('toggleOn')) {
//         noElement.classList.replace('toggleOn', 'toggleOff')
//     } else if (noElement.classList.contains('toggleOff')) {
//         noElement.classList.replace('toggleOff', 'toggleOn')
//     } else(
//         noElement.classList.add('toggleOn')
//     )
// })

// var borderTick = 2;
// document.getElementById('cancel').style.border = `${borderTick}px solid white`;

// let margin = 20
// document.getElementById("ok").addEventListener('click', function(e) {
//     margin += 5
//     let marginSize = `20px ${margin}px`
//     document.getElementById('cancel').style.margin = marginSize
//     document.getElementById('no').style.margin = marginSize
//     margin++
// })

// let showText = ['ok', 'วิชานี้', 'ง่าย', 'จริงๆนะ']
// let showIndex = 0
// document.getElementById('no').addEventListener('dblclick', function(e) {
//     showIndex++
//     if (showIndex >= showText.length) {
//         showIndex = 0;
//     }
//     const okButton = document.getElementById('ok')
//     okButton.innerText = showText[showIndex]
// })

function onOkClicked(e) {
    e.stopPropagation();
    // alert('ok clicked')
    addText('ok')
}

function onCancelClicked(e) {
    e.stopPropagation();
    // alert('cancel clicked')
    addText('cancel')
}

function onNoClicked(e) {
    e.stopPropagation();
    // alert('no clicked')
    addText('no')
}
let output = ' '
let outputElement = document.getElementById('output')
document.getElementById('container').onclick = function() {
    output = ''
    outputElement.innerText = output
}

function addText(input) {
    output = output + input + ' '
    outputElement.innerText = output
}
document.getElementById('cancel').addEventListener('click', onCancelClicked)
document.getElementById('no').onclick = onNoClicked

document.getElementById('container').onclick = function(e) {
    alert('container click')
}