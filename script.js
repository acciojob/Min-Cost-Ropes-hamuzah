function mincost(arr)
{ 
//write your code here
// return the min cost

	const minHeap = new MinHeap();
    arr.forEach(length => minHeap.push(length));

    let totalCost = 0;

    while (minHeap.size() > 1) {
        const first = minHeap.pop();
        const second = minHeap.pop();
        const cost = first + second;
        totalCost += cost;
        minHeap.push(cost);
    }

    return totalCost;
  
}

module.exports=mincost;
