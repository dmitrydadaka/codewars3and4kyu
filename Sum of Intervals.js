function sumIntervals(is){
    return new Set([].concat(...is.map(v=>Array.from(Array(v[1]-v[0]),(_,i)=>i+v[0])))).size
  }
  
  function sumIntervals(i){
    let len=new Set()
   i.map(([a,b])=>{
     for(let j=a;j<b;j++){
     len.add(j) 
     }})
  return len.size     
  }
  
  function sumIntervals(i){
    let len=[]
   i.map(([a,b])=>{
     for(let j=a;j<b;j++){
     if(len.indexOf(j)==-1)len.push(j) 
     }})
  return len.length       
  }
  
  
  function sumIntervals(intervals){
    intervals = intervals.sort(function(a, b) { // O(n)
      return a[0] - b[0];
    });
    intervals = intervals.reduce(function(acc, el, index, array) { // O(n)
      const anterior = array[index - 1];
      if (array.length > 1 && anterior !== undefined) {
        if (el[0] < acc[acc.length - 1]) {
          if (el[1] >= acc[acc.length - 1]) {
            acc[acc.length - 1] = el[1];
          }
        } else {
          acc.push(...el);
        }
      } else {
        acc.push(...el);
      }
      return acc;
    }, []);
    let result = 0;
    for (let i = 0; i < intervals.length - 1 ; i+=2) { // O(2n)
      result+=(intervals[i + 1] - intervals[i]);
    }
    return result;
  }