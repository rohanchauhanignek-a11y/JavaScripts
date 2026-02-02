//Use filter to find even numbers.
function isEven(num)
    {
        if(num%2==0)
        {
            return num;
        }
    }
    function Filter(arr)
        {
            let array=arr.filter(isEven);
            for(let key of array)
                    {
                        console.log(key);          
                    }
        }
        let arr=[5,6,3,10,15,7,9];
        Filter(arr);
       
//  6
//  10
