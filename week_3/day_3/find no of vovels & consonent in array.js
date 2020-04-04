var arre=['x','y','z','o','a','e','p','q','r','u','w','k','i','m','n']
var vovels = 0
var consonent = 0
for(var i=0;i<arre.length;i++){
  if(arre[i]=='a' || arre[i]=='e' || arre[i]=='i' ||arre[i]=='o'|| arre[i]=='u'){
    vovels = vovels+1    
  }
  else{
    consonent =consonent+1
  }
}
console.log("vovels", vovels)
console.log("consonent", consonent)