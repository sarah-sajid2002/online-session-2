//js online session sir ishaq's assignmnet 2:

// question 1
// let input_1 = +prompt("enter no 1");
// let input_2 = +prompt("enter no 2");

// function parent_function(value_1){
//     return function child_functon(value_2){
//         console.log(value_1 + value_2);
//         // let a = 4;//scope error
//     }
// }

// let function_1 = parent_function(input_1);
// let function_2 = function_1(input_2);

//======================================================

//question 2
//concept

//hat ka ha code ka part ni ha
/*
i = 0
array[0] = 2
no_to_search === array[0]  =>false

0 < array.length (7)=>true
i = i+1; => i = 1

array[1] = 4
no_to_search === array[1]  =>false

1 < array.length (7) =>true
i = i+1; => i = 2

array[2] = 5
no_to_search === array[6]  =>false

92 74
6 < 6

length = 1
index = 0
*/

// let arr = [2,4,5,67,90,74,92];

// let no_to_search = 10;

// let i = 0;

// function recursion(array){
//     if (no_to_search === array[i]){
//        console.log("true");
//     }
//     else if(i < array.length-1){ 
//         i = i+1; //i =1;
//         recursion(array);
//     }
//     else {
//        console.log("false");
//     }
// }
// recursion(arr);


// function recursion(array){
//     if (no_to_search === array[i]) {
//         return true;
//     }
//     else if(i < array.length-1){
//         i = i+1;
//         recursion();
//        }
//     else{ 
//         return;
//     }
// }

// //=========calling function
// recursion(arr);

// //=========printing true and flase
// if (recursion(arr)==true){
//     console.log("true");
// }
// else{
//     console.log("flase");
// }





// //hat ka ha code ka part ni ha
// function a (a) {
//     return a;
// }

// // function b (b){
// //     console.log(b)
// // }


// // a (3);
// console.log(a(4));
// // b (5);

//==============================================================

// q3

// let input_text = prompt("enter content:")
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// // console.log(parent);
// function para_work(string) {
//     para.innerHTML = string;
//     parent.appendChild(para);
//     parent.insertAdjacentElement("afterbegin", para);
// }

// para_work(input_text)

//=================================================================

//q 4

localStorage.clear()

let object_1 = {
    name:"sarah",
    age: 20,
    phone_no:"0382380234",
    height:"5'4",
    cnic: "23462464794920",
    eng_marks:23,
    urdu_marks:65,
    maths_marks:100
}


let object_2 = {
    name:"ayesha",
    age: 15,
    phone_no:"94500684",
    height:"4'3",
    cnic: "8058543456-9",
    eng_marks:90,
    urdu_marks:40,
    maths_marks:80
}


let object_3 = {
    name:"noor fatime",
    age: 14,
    phone_no:"94500684",
    height:"5'6",
    cnic: "8058543456-9",
    eng_marks:50,
    urdu_marks:80,
    maths_marks:60
}

function object_saving(key , value){
    let new_object = JSON.stringify(value);
    localStorage.setItem(key, new_object);
}


object_saving("data of sarah" , object_1);
object_saving("data of ayesha", object_2 );
object_saving("data of noor", object_3 );
object_saving("data of sarah" , object_1);
object_saving("data of ayesha", object_2 );
object_saving("data of noor", object_3 );








