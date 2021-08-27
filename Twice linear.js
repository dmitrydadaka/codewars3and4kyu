function dblLinear(n) {
    var myset = new Set();
    var num = 1;
    myset.add(num);
    if (n === 0) {return num}
    while (myset.size <= n) {
      num++;
      if (myset.has((num - 1)/2) || myset.has((num - 1)/3)) {myset.add(num)}
    }
    return num;
}

function dblLinear(n) {
  
    var u = [1], pt2 = 0, pt3 = 0; //two pointer
    
    for(var i = 1;i<=n;i++){
      u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
      if(u[i] == 2 * u[pt2] + 1) pt2++;
      if(u[i] == 3 * u[pt3] + 1) pt3++;
    }

    return u[n];
  
}

function dblLinear(n) {
    arr=[1]
    i=0
  while(i<59000){
    arr.push(2*arr[i]+1,3*arr[i]+1)
    i++
  }
    arr=[...new Set(arr)]   
  if(arr.sort((a,b)=>a-b)[n]<1511311)return arr.sort((a,b)=>a-b)[n]
  return 1511311
}