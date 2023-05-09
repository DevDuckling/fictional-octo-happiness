// const container = document.querySelector('.container');
// const parent = document.querySelector('#parent');
// const parentList = document.querySelectorAll('.parentList');
// const colors = ['green', 'blue', 'cyan', 'pink'];

// // ---------------------ITERATING over li------------------------------
// // for(let li of parentList){
// //     parentList[li].innerText = `I am ${li+1} list item.`;
// // } does not work 

// // for(let i=0; i<parentList.length; i++){
// //     parentList[i].innerText = `I am ${i+1} list item.\n by JavaScript`;
// //     parentList[i].style.fontSize = "2rem";
// //     parentList[i].style.color = "#FDF7C3";
// //     parentList[i].style.backgroundColor = "#66347F";
// // }

// // parentList.forEach((element, colorList)=>{
// // const colorForList = colors[colorList];
// // console.log(colorForList);
// // element.innerText = `I am ${element+1} list item.\n by JavaScript`;
// // element.style.color = colorForList;
// // element.style.backgroundColor = "cadetblue"
// //  })  

// // ----------------classList toggle------------------------------
 
// parentList.forEach((element, colorList)=>{
// element.innerText = `I am list item.\n by JavaScript`;
// element.classList.toggle('forListItems');
//  }) 


// // -------------CREATE ELEMENT----------------------------------

// const divElement = document.createElement('div');
// divElement.innerText="I am js generated div"
// divElement.className = 'forListItems'
// container.appendChild(divElement);

// // -----------------------------------------------------------
// // ----------------------------------------------------------

// promise---------------------
const sum = (x,y) =>{
    return new Promise((executor, rejected)=>{
       if(x === y){
        rejected('error')    
    }else{
        executor('success')
    }
    })

}
sum(4,4).then((res)=>{
console.log('success', res);
}).catch((err)=>{
console.log('error', err)
})

// ---------------