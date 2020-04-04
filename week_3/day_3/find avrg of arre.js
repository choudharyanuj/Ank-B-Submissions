arre1=[10,10,10,10]
arre2=[2,4,10]
var a = 0
var b=0
for(var i=0;i<arre1.length;i++){
  a = a + arre1[i]
}
for(var i=0;i<arre1.length;i++){
  a = a + arre1[i]
}
var avg1=a/arre1.length
for( var i=0;i<arre2.length;i++){
  b = b + arre2[i]
}
 var avg2=b/arre2.length
 if(avg1>avg2){
   console.log(avg1)
 }
else{
  console.log(avg2)
}