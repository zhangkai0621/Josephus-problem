/**
 * @description: 获取存活的位置节点
 * @Author: zhangkai
 * @Date: 2020-07-29 20:24:48
 * @param length {Number} 参与的人数
 * @param max {Number} 数到几死亡
 * @return: position {Array} 能够存活的位置数组
 */ 
function getAlivePosition(length, max) {
    const array = new Array();
    let aliveNumber = length; // 死亡人数
    let count = 0; // 计数器

    for(let i = 0; i < length; i++) {
        array[i] = 1; // 刚开始每一位都存活，1 存活，0 死亡
    }

    // 当前存在人数小于 3 时，游戏结束
    while(aliveNumber >= max) {
        for(let i = 0; i < array.length; i++) {
            // 遇到存在的人，计数器 +1
            if (array[i] === 1) {
                ++count;
                // 每数到 3
                if (count === 3) {
                    array[i] = 0; // 玩家死亡
                    count = 0; // 计数器清零，重新数
                    aliveNumber--;
                }
            }
        }
    }

    const position = [];
    array.forEach((item, index) => {
        if (item === 1) {
            console.log(`当前存活的位置是：${index + 1}`);
            position.push(index + 1);
        }
    })

    return position;
}

console.log(getAlivePosition(41, 3)); // [16, 31]
