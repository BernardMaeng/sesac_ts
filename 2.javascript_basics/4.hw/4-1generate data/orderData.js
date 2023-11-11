import { getRandomUserId } from './userData.js';
import { getRandomStoreId } from './storeData.js';

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function generateRandomId() {
    const segments = [
        Math.random().toString(16).substring(2, 10),
        Math.random().toString(16).substring(2, 6),
        Math.random().toString(16).substring(2, 6),
        Math.random().toString(16).substring(2, 6),
        Math.random().toString(16).substring(2, 14),
    ];
    return segments.join('-');
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

const orderData = [];

for (let i = 0; i < 10000; i++) {
    const order = generateRandomOrderData();
    orderData.push(order);
}

console.log(orderData);