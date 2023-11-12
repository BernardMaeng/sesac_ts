import {v4 as uuidv4} from 'uuid';
import { getRandomUserId,users } from './userData.js';
import { getRandomStoreId,stores } from './storeData.js';
import fs from 'fs';

function getRandomOrder(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomId() {
    return uuidv4();
}

function generateRandomOrderDate() {
    const year = Math.floor(Math.random() * 3) + 2020; // 2020부터 2022까지 랜덤 년도
    const month = Math.floor(Math.random() * 12) + 1; // 1부터 12까지 랜덤 월
    const day = Math.floor(Math.random() * 28) + 1; // 1부터 28까지 랜덤 일
    const hour = Math.floor(Math.random() * 24); // 0부터 23까지 랜덤 시간
    const minute = Math.floor(Math.random() * 60); // 0부터 59까지 랜덤 분

    return new Date(year, month - 1, day, hour, minute).toISOString();
}

function generateRandomOrderData() {
    const id = generateRandomId();
    const user_id = getRandomUserId();
    const store_id = getRandomStoreId();
    const ordered_at = generateRandomOrderDate();

    return {
        id,
        user_id,
        store_id,
        ordered_at,
    };
}
export function getRandomOrderId() {
    const randomOrder = getRandomOrder(orders);
    return randomOrder.id;
}

export const orders = [];

for (let i = 0; i < 10000; i++) {
    const order = generateRandomOrderData();
    orders.push(order);
}

// CSV 파일 생성 함수
 function createCSVFile(filename, data) {
     fs.writeFileSync(filename, data);
     console.log('CSV 파일이 생성되었습니다.');
 }

// orders 데이터를 CSV 파일로 저장
 const csvData = orders.map(order => `${order.id},${order.user_id},${order.store_id},${order.ordered_at}`);
 createCSVFile('orders.csv', 'id,user_id,store_id,ordered_at\n' + csvData.join('\n'));

console.log(orders);