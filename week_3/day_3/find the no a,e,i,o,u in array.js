var arre=['e','y','z','o','a','e','p','e','e','u','w','i','i','m','n','a','a']
var a = 0
var e = 0
var i = 0
var o = 0
var u = 0
var consonent = 0
for(var id=0;id<arre.length;id++){
  if(arre[id]=='a'){
    a = a+1
  }
  else if(arre[id]=='e'){
    e = e+1
  }
  else if(arre[id]=='i'){
    i = i+1
  }
  else if(arre[id]=='o'){
    o = o+1
  }
  else if(arre[id]=='u'){
    u = u+1
  }
  else{
    consonent =consonent+1
  }
}
console.log(a,e,i,o,u)
console.log("consonent", consonent)