arre=[2,3,6,7,9,5,18]
var even = 0
var odd = 0
for(var i=0;i<arre.length;i++){
  if(arre[i]%2==0){
    even = even + 1    
  }
  else{
    odd = odd + 1
  }
}
console.log("even", even)
console.log("odd", odd)