import {v4 as uuidv4} from 'uuid';
import { getRandomUserId,users } from './userData.js';
import { getRandomStoreId,stores } from './storeData.js';

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

const orders = [];

for (let i = 0; i < 10000; i++) {
    const order = generateRandomOrderData();
    orders.push(order);
}
