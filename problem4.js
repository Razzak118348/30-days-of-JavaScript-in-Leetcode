var findMedianSortedArrays = function(nums1, nums2) {
    let margeArr=[...nums1,...nums2]
margeArr.sort((a,b)=>a-b)
    if(margeArr.length%2==0){
        const length =margeArr.length
        return((margeArr[length/2-1]+margeArr[length/2])/2)
    }else{
        return(margeArr[Math.floor(margeArr.length/2)])
    }
};
findMedianSortedArrays([1,3],[2])
findMedianSortedArrays([1,2],[3,4])
