let arr=[1,2,3,4,5,6,7];
let sum=0;


function evenSqr(){

    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0) {
            let sqr=arr[i]*arr[i];
            sum+=sqr
        }
    }
    return sum;
}

console.log(evenSqr(arr));