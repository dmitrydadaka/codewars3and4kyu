function validSolution(bd){
    var o=[0,1,2,3,4,5,6,7,8] , p=[[0,1,2],[3,4,5],[6,7,8]],
    a = o.map(i=>bd[i].slice().sort().join("")),
    b = o.map(i=>o.map(j=>bd[j][i]).sort().join("")),
    c = p.map(x=>p.map(y=>y.reduce((m,n)=>m.concat(x.map(z=>bd[z][n])),[]))).reduce((m,n)=>m.concat(n.map(x=>x.sort().join(""))),[]);
    return a.concat(b,c).every(x=>x=="123456789");
  }
  
  function validSolution(board){
    
    for (i=0; i<9; i++){
    
      let rowSet = new Set(board[i]);
      let colSet = new Set([board[0][i],board[1][i],board[2][i],board[3][i],board[4][i],board[5][i],board[6][i],board[7][i],board[8][i]]);
      
      let cubSet = new Set([  
                             board[3*Math.floor(i/3)]        [3*(i%3)],
                             board[3*Math.floor(i/3)]        [3*(i%3)+1],
                             board[3*Math.floor(i/3)]        [3*(i%3)+2],
                             
                             board[3*Math.floor(i/3) + 1]    [3*(i%3)],
                             board[3*Math.floor(i/3) + 1]    [3*(i%3) + 1],
                             board[3*Math.floor(i/3) + 1]    [3*(i%3) + 2],
                             
                             board[3*Math.floor(i/3) + 2]    [3*(i%3)],
                             board[3*Math.floor(i/3) + 2]    [3*(i%3)+1],
                             board[3*Math.floor(i/3) + 2]    [3*(i%3)+2] 
                          ]);
      
      if (rowSet.size !== 9 || colSet.size !==9 || cubSet.size !==9){
        return false
      }
    }
    
    return true;
    
  }
  
  function validSolution(board){
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
    var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
    for (var i = 0; i < 9; i++)
      if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
        return false;
    return true;
  }
  
  function validSolution(board){
  a=[]
  c=[]
  for(i=0;i<9;i++){
   a.push(board.map(x=>x[i]))
  }
   
  for(i=0;i<9;i+=3){
   c.push([].concat(...a[i].slice(i,i+3),a[i+1].slice(i,i+3),a[i+2].slice(i,i+3))) 
  }
    return c.every(x=>x.sort((a,b)=>a-b).join``=='123456789')&&a.every(x=>x.sort((a,b)=>a-b).join``=='123456789')&&board.every(x=>x.sort((a,b)=>a-b).join``=='123456789')
  }
  
  function validSolution(board){
  //board.every(x=>x.sort((a,b)=>a-b).join``=='123456789')
  a=[]
  for(i=0;i<9;i++){
   a.push(board.map(x=>x[i]))
  }
    c=[]
  for(i=0;i<9;i+=3){
   c.push([].concat(...a[i].slice(i,i+3),a[i+1].slice(i,i+3),a[i+2].slice(i,i+3))) 
  }
    return c.every(x=>x.sort((a,b)=>a-b).join``=='123456789')&&a.every(x=>x.sort((a,b)=>a-b).join``=='123456789')&&board.every(x=>x.sort((a,b)=>a-b).join``=='123456789')
  }