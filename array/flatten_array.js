//Flatten a multidimensional array without using flat().
function Flatten(arr)
    {
        let temp1=[];
        for(let i=0;i<arr.length;i++)
        {
            if(Array.isArray(arr[i]))
            {
             temp1=temp1.concat(Flatten(arr[i]));
            }
            else{
                temp1.push(arr[i])
            }
        }
        return temp1;
    }
    let arr=[1,[2,3],4,[5,6]]
    console.log(Flatten(arr));

//  [1, 2, 3, 4, 5, 6]
