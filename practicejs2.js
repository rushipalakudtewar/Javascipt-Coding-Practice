function MostFreqElement(arr){
    let n = arr.length;
    let freqMap = new Map();
    for(let i=0;i<n;i++)
        freqMap.set(arr[i],(freqMap.get(arr[i]) || 0)+1)
    console.log("freq ",freqMap)
    let maxcnt=0,res=-1;
    for(let [val,cnt] of freqMap){
        console.log("val ",val," cnt ",cnt);
        if(maxcnt<cnt || (cnt===maxcnt || val>res)){
            res = val;
            maxcnt = cnt
        }
    }
    return res;
}

let arr = [40, 50, 30, 40, 50, 30, 30];
console.log(MostFreqElement(arr));