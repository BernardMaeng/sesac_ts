import { v4 as uuidv4 } from 'uuid';
import { getRandomOrderId, orders } from './orderData.js';
import { getRandomItemId, itemData } from './itemData.js';
import fs from 'fs';

function generateRandomOrderedItemData() {
    const id = uuidv4();
    const order_id = getRandomOrderId();
    const item_id = getRandomItemId();

    return {
        id,
        order_id,
        item_id,
    };
}

export function getRandomOrderedItemId() {
    return getRandomOrderedItemId(orderedItems).id;
}

export const orderedItems = [];

for (let i = 0; i < 50000; i++) {
    const orderedItem = generateRandomOrderedItemData();
    orderedItems.push(orderedItem);
}


// 이 함수는 객체 배열을 CSV 문자열로 변환합니다.
function convertArrayToCSV(array) {
    const header = Object.keys(array[0]).join(',') + '\n';
    const rows = array.map(obj => Object.values(obj).join(',') + '\n');
    return header + rows.join('');
}

// CSV 파일로 저장
fs.writeFileSync('./orderedItems.csv', convertArrayToCSV(orderedItems));


console.log(orderedItems);