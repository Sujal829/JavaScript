

//remove
let removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', () => {
    let item = document.getElementById('item');
    item.remove();
});

function deletitem(){
    let item = document.getElementById('item');
    if(item.childElementCount)
    {
        item.removeChild(item.firstElementChild);
    }
    else{
              console.log("no more items");
        item.removeChild(item.lastElementChild);
    }
}




//update

let item = document.querySelectorAll('li');
console.log(item);
item[0].style.color ='red';
let i=0;
 let toogle =()=> {
//     if(item[0].style.color =='red'){
//         item[0].style.color ='blue';
//     }
//     else{
//         item[0].style.color ='red';
//         //item[2].style.backgroundColor ='yellow';
//     }
    switch(i){
        case 0:
            item[0].style.color ='yellow';
            item[1].style.color ='black';
            item[2].style.color ='black';
            break;
        case 1:
            item[0].style.color ='black';
            item[1].style.color ='blue';
            item[2].style.color ='black';
            break;
        case 2:
            item[0].style.color ='black';
            item[2].style.color ='red';
            item[1].style.color ='black';
            break;

    }
     if (i < item.length - 1) {
    i++;
  } else {
    i = 0; 
  }
 }