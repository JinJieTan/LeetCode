#### 输入一个数组，一个数值，找出这个数组中两数的和等于这个数值的下标，并且以数组的形式返回


#### 解题思路



1.用Map数据类型存储

2.遍历传入的数组

3.将target减去当前遍历的item值得到剩余的值

4.如果能在map中找到，就返回这个key对应的value值和当前数组下标

5.如果不能在map中找到,就将当前遍历的item作为key,下标i作为value存入map中

6.循环4-5步，直到找到或遍历完成





还有一种用时超过98.59%，内存超过88.98%的解法:

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};//key数字 value下标
    let loop = 0;//循环次数
    let dis;//目标与当前值的差
    while(loop < nums.length){
        dis = target - nums[loop];
        if(map[dis] != undefined){
            return [map[dis], loop];
        }
        map[nums[loop]] = loop;
        loop++;
    }
    return;
};
```