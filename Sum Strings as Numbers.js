function sumStrings(a,b) {
    d=0
    c=''
    if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
    if(a.length<b.length)a='0'.repeat(b.length-a.length)+a  
    for(i=a.length-1;i>=0;i--){ 
      s=((+a[i]+ +b[i])+d)%10
      d=~~(((+a[i]+ +b[i])+d)/10)
      c=s+c
    }
    return d>0?d+c:c.replace(/^0/g,'')
  }
  
  function sumStrings(a,b) {
    d=0
    c=''
    if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
    if(a.length<b.length)a='0'.repeat(b.length-a.length)+a  
    for(i=a.length-1;i>=0;i--){ 
      s=((+a[i]+ +b[i])+d)%10
      d=~~(((+a[i]+ +b[i])+d)/10)
      c=s+c
    }
    e=[...c].findIndex(e=>e!=0)
    return d>0?d+c:c.slice(e)
  }
  
  function sumStrings(a,b) { 
  return (BigInt(a)+BigInt(b)).toString()
  }
  
  function sumStrings(a,b) {
    d=0
    c=''
    if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
    if(a.length<b.length)a='0'.repeat(b.length-a.length)+a  
    for(i=a.length-1;i>=0;i--){ 
      s=(+a[i]+ +b[i])+d
      if(s>=10){
      s-=10
      d=1      
      }else{
      d=0
      }
      c=s+c
    }
    e=[...c].findIndex(e=>e!=0)
    return d>0?d+c:c.slice(e)
  }