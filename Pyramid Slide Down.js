function longestSlideDown (p) { 
    for(let i=p.length-2;i>=0;i--){
      for(let j=0;j<p[i].length;j++){
        p[i][j]=p[i][j]+Math.max(p[i+1][j],p[i+1][j+1])
      }
      }
    return p[0][0]
  }
  
  function longestSlideDown (pyramid) {
    return pyramid.reverse().reduce((a,c)=>c.map((e,i)=>e+Math.max(a[i],a[i+1])))[0]
  }
  
  function longestSlideDown (p) {
    let pS=[]
    p.forEach((a,i)=>
              pS.push(a.map(e=>i==p.length-1?e:0)))
    for(let i=pS.length-2;i>=0;i--){
      for(let j=0;j<pS[i].length;j++){
        pS[i][j]=p[i][j]+Math.max(pS[i+1][j],pS[i+1][j+1])
      }
      }
    return pS[0][0]
  }