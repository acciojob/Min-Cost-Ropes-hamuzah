function mincost(arr)
{ 
//write your code here
// return the min cost

  // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes
        const first = arr.shift();
        const second = arr.shift();

        // Calculate the cost to combine them
        const cost = first + second;
        totalCost += cost;

        // Insert the combined rope back into the array
        arr.push(cost);

        // Sort the array again
        arr.sort((a, b) => a - b);
    }

    return totalCost;
	
}

module.exports=mincost;
