//Use map to square all numbers in an array.
function map(arr)
    {
        let tempArr=arr.map(sqr);
        for(let key of tempArr)
                {
                    console.log(key)
                }
    }
    function sqr(num)
        {
            return num*num
        }
        let arr=[1,5,18,4]
    map(arr);
    
// 1
// 25
// 324
// 16
