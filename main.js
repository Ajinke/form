const  squarearr = [10,20,30,40,50,5.5];
var temp;
var currTop = 0;
var docHeight = document.documentElement.clientHeight;
var docWidth = document.documentElement.clientWidth;

function squaregenerate(arr){
    console.log(arr);


for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    temp = document.createElement('div');
    temp.className= 'square';
    temp.id = "result" + i;
    temp.innerHTML = arr[i];
    temp.addEventListener('click', function(e){
        onclick(e.target.id);
        console.log(e.target.id);
      })

document.getElementsByTagName('body')[0].appendChild(temp);
document.getElementById(temp.id).style.width = arr[i] + "px";
document.getElementById(temp.id).style.height = arr[i] + "px";
document.getElementById(temp.id).style.border = "7px solid orange";
console.log(temp.id);

currentTop = Math.floor(Math.random()*docHeight) + 1;
currLeft = Math.floor(Math.random()*docWidth) + 1;


document.getElementById(temp.id).style.top = currTop + "px";
document.getElementById(temp.id).style.left = currLeft + "px";


    }

    function onclick(e){
        let targetDiv = document.getElementById(e);
        console.log('hell',e);
        targetDiv.style.display = 'none';

        
    }
}
squaregenerate(squarearr);


