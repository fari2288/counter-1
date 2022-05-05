function createCount(div) {
let value=0
function count() {
    value+=1
div.textContent=value
}
return count
}
let button1=document.querySelector('.button1')
let count1=document.querySelector('.count1')
button1.onclick=createCount(count1)

let button2=document.querySelector('.button2')
let count2=document.querySelector('.count2')
button2.onclick=createCount(count2)



let number=0
function increasing() {
    number+=1
    document.querySelector('.result').textContent=number
}
document.querySelector('.button').onclick=increasing





function changeColor(sender) {
    sender.classList.add('selected')
}




































/*let value=0
document.querySelector('.knopka').onclick=getNumber
function getNumber() {
    value+=1
    document.querySelector('.increase').textContent=value
}*/





















/*function increase(div) {
let number=0
function createCounter() {
    number+=1
    div.textContent=number
}
return createCounter
}

let button1=document.querySelector('.button1')
let result1=document.querySelector('.result1')
button1.onclick=increase(result1)

let button2=document.querySelector('.button2')
let result2=document.querySelector('.result2')
button2.onclick=increase(result2)*/

/*
function createCount(div) {
    let value=0;
    function count() {
        value+=1;
        div.textContent=value
    }
    return count;
}

let button1 = document.querySelector('.button1')
let count1 = document.querySelector('.count1')
button1.onclick = createCount(count1)


let button2 = document.querySelector('.button2')
let count2 = document.querySelector('.count2')
button2.onclick=createCount(count2)
*/



/*function changeColor(sender) {
    sender.classList.add('selected')
}*/



function changeCatBack() {
    let catImage=document.querySelector('.catImage')
    catImage.src='https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
function changeCatNext() {
    let catImage=document.querySelector('.catImage')
    catImage.src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'
}

document.querySelector('.sum').onclick=getSum;
function getSum() {
    let a=prompt('первое число')
    let b=prompt('второе число')
    let result1=(Number(a)+Number(b))
    document.querySelector('.result_sum').innerHTML=result1
}
document.querySelector('.minus').onclick=getMinus;
function getMinus() {
    let a=prompt('первое число')
    let b=prompt('второе число')
    let result2=(Number(a)-Number(b))
    document.querySelector('.result_minus').innerHTML=result2
}
document.querySelector('.times').onclick=getTimes;
function getTimes() {
    let a=prompt('первое число')
    let b=prompt('второе число')
    let result3=(Number(a)*Number(b))
    document.querySelector('.result_times').innerHTML=result3
}
document.querySelector('.divide').onclick=getDivide;
function getDivide() {
    let a=prompt('первое число')
    let b=prompt('второе число')
    let result4=(Number(a)/Number(b))
    document.querySelector('.result_divide').innerHTML=result4
}

/*
document.querySelector('.back').onclick=changeImageBack;
function changeImageBack() {
    let image=document.querySelector('.image')
    image.src='https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg' 
}
document.querySelector('.next').onclick=changeImageNext;
function changeImageNext() {
    let image=document.querySelector('.image')
    image.src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg'
}*/

