function solution(nums){
    nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
       return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
   }
   
   solution = (list)=>list.reduce((acc,curr,i) => {
     if (i==0) return curr.toString();
     if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
     if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
     return acc+","+curr;
   },'');
   
   function solution(list){
     for(i=0;i<list.length;i++){
       j=i
       while(list[j+1]-list[j]==1)j++
       if(j-i>1) list.splice(i, j-i+1, list[i]+'-'+list[j])
     }
     return list.join`,`
   }
   
     
   const solution = (list, i = 0, j = 1) => {
     let [curr, prev, arr] = [list[0], '', []];
   
     while (j <= list.length) {
       if (list[j] - list[j - 1] !== 1 || j++ === list.length) {
         j > 1 && (prev = `${list[i]}-`);
         list[j - 1] - list[i] === 1 && (prev = `${list[i]},`);
         list[j - 1] === list[i] && (prev = '');
   
         arr.push(`${prev}${list[j - 1]}`);
         prev = list[(i = j++)];
       }
     }
   
     return arr.join`,`;
   }