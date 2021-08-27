function nextBigger(n){
    var arr = n.toString().split("").reverse();
    var i = arr.findIndex((d, _i) => d < arr[_i-1]);
    if (i === -1) { return -1; }
    var subarr = arr.slice(0, i);
    var j = subarr.findIndex((d) => d > arr[i]);
    subarr.splice(j, 1, arr[i]);
    return parseInt(arr.slice(i+1).reverse().concat(arr[j]).concat(subarr).join(""));
  }

  function nextBigger(n){
    console.log(n);
    var chars = n.toString().split('');
    var i = chars.length-1;
    while(i > 0) {
      if (chars[i]>chars[i-1]) break;
      i--;
    }
    if (i == 0) return -1;
    var suf = chars.splice(i).sort();
    var t = chars[chars.length-1];
    for (i = 0; i < suf.length; ++i) {
      if (suf[i] > t) break;
    }
    chars[chars.length-1] = suf[i]
    suf[i] = t;
    var res = chars.concat(suf);
    var num = parseInt(res.join(''));
    console.log("->" +num);
    return num;
  }
  
  function nextBigger(n){
    var d = n.toString().split('');
  
    // find the pivot, the point (from right) where i > i-1
    var p = -1;
    for (var i = d.length-1; i > 0; i--) {
      if (+d[i] > +d[i-1]) {
        p = i-1;
        break;
      }
    }
  
    // if we are unable to find the pivot, skip
    if (p == -1) return p;
  
    // splice the digits in the pivot
    var right = d.splice(p);
  
    // extract pivot
    var pv = right.splice(0, 1)[0];
    var mm = null, mmi = null;
    for (var i = 0; i < right.length; i++) {
      if (right[i] > pv) {
        if (mm == null || right[i] < mm) {
          mm = right[i];
          mmi = i;
        }
      }
    }
  
    if (mmi == null) return -1;
  
    right.splice(mmi, 1);
    right.push(pv);
    right = right.sort();
  
    // concat the left + new pivot + right part
    var ret = +d.concat([mm]).concat(right).join('');
    if (ret < n) return -1;
  
    return ret;
  }