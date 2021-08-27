const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');
const delegates = [
  { s: 'year', v: 60 * 60 * 24 * 365 },
  { s: 'day', v: 60 * 60 * 24 },
  { s: 'hour', v: 60 * 60 },
  { s: 'minute', v: 60 },
  { s: 'second', v: 1 }
];

function formatDuration (seconds) {
  if (!seconds) return 'now';
  
  return delegates.reduce((ret, dg, idx) => {
    const val = Math.floor(seconds / dg.v);
    if (!val) return ret;
    seconds -= dg.v * val;
    const str = val > 1 ? dg.s + 's' : dg.s;
    const add = !ret ? '' : (seconds > 0 ? ', ' : ' and ');
    return ret + add + `${val} ${str}`;
  }, '');
}

var formatDuration = (function () {

  return function formatDuration (seconds) {
    return [{name: 'year',   size: 365 * 24 * 60 * 60 * 1},
            {name: 'day',    size:       24 * 60 * 60 * 1},
            {name: 'hour',   size:            60 * 60 * 1},
            {name: 'minute', size:                 60 * 1},
            {name: 'second', size:                      1}].
            reduce(parse, { parts: [], seconds: seconds }).
            parts.
            reduce(join, 'now');
  };
  
  function parse (result, part) {
    var quantity = Math.floor(result.seconds / part.size);
    if (quantity > 0) {
      result.seconds -= quantity * part.size;
      result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
    }
    return result;
  }
  
  function join (result, part, index, arr) {
    switch (index) {
      case 0: return part;
      case arr.length - 1: return result + ' and ' + part;
      default: return result + ', ' + part;
    }
  }
  
}());

function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

function formatDuration (seconds) {
  var year, day, hour, minute=0
if(seconds==0)return 'now' 
if(seconds>=86400*365)
{year=~~(seconds/(86400*365))
seconds=seconds-year*86400*365}
if(seconds>=86400){
  day=~~(seconds/86400)
  seconds=seconds-day*86400
}
if(seconds>=3600) {
  hour=~~(seconds/3600)
  seconds=seconds-hour*3600
}
if(seconds>=60) {
  minute=~~(seconds/60)
  seconds=seconds-minute*60
}
  arr=[]
if(year)arr.push(year>1?year+' years':year+' year')
if(day)arr.push(day>1?day+' days':day+' day')
if(hour)arr.push(hour>1?hour+' hours':hour+' hour')
if(minute)arr.push(minute>1?minute+' minutes':minute+' minute')
if(seconds)arr.push(seconds>1?seconds+' seconds':seconds+' second')

return arr.length<3?arr.join` and `:arr.slice(0,-1).join`, `+' and '+arr[arr.length-1]
}