function mincost(arr)
{ 
//write your code here
// return the min cost

	let heap = new MinPriorityQueue();
	let total = 0;

	for(let a of arr){
		heap.enqueue(a);
	}

	while(heap.size() > 1){
		let diff = heap.dequeue().element + heap.dequeue().element;
		total += diff;
	}

	return total;
}

module.exports=mincost;
