let arr=[10,20,30]
function multiplication(arr)
    {
        let result=arr.reduce(multiplicate,1);
        console.log(result);
    }
  function  multiplicate(total,num)
        {
            return total*num;
        }
        multiplication(arr);
    