
var getCommon = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b)
    nums2.sort((a, b)=>a-b)
    let common=-1
    let i=0;
    let j=0
    while(i<nums1.length && j<nums2.length)
    {
        if(nums1[i]===nums2[j])
        {
            common=nums1[i]
            break
        }
        else if(nums1[i]<nums2[j])
        {
            i++
        }
        else
        {
            j++
        }
    }
    return common
};