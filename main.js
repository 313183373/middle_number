function middle_number(arr){
    arr.sort((a,b)=>a-b);
    while(arr.length>2){
        arr.shift();
        arr.pop();
    }
    return arr.reduce((pre,now,arr)=>pre+now)/arr.length;
}


console.log(middle_number([5,3,5,7,2,5,4,1,2,6,8,5]));