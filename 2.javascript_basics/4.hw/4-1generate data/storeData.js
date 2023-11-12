import {v4 as uuidv4} from 'uuid';
import fs from 'fs';

const cities = ["서울", "부산", "대전", "광주", "인천", "대구", "울산", "세종"];
const districts = ["서구", "중구", "북구", "남구", "동구", "강서구", "강남구", "강북구", "강동구"]
const storeTypes = ["스타벅스", "커피빈", "이디야", "투썸"];

function getRandomStore(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomId() {
    return uuidv4();
}

function generateRandomStoreName(type) {
    const locations = ["홍대", "송파", "강서", "신촌", "잠실", "서초"];
    const number = Math.floor(Math.random() * 9) + 1; // 1부터 9까지의 랜덤한 숫자
    return `${type} ${getRandomStore(locations)} ${number}호점`;
}

function generateRandomStore() {
    const id = generateRandomId();
    const type = getRandomStore(storeTypes);
    const name = generateRandomStoreName(type);
    const address = `${getRandomStore(cities)} ${getRandomStore(districts)} ${Math.floor(Math.random() * 99) + 1}${Math.random() < 0.5 ? '로' : '길'} ${Math.floor(Math.random() * 99) + 1}`;
    
    return {
        id,
        type,
        name,
        address,
    };
}

export function getRandomStoreId() {
    return getRandomStore(stores).id;
}

export const stores = [];

for (let i = 0; i < 100; i++) {
    const store = generateRandomStore();
    stores.push(store);
}

// CSV 파일 생성 함수
 function createCSVFile(filename, data) {
     fs.writeFileSync(filename, data);
 }

 //stores 데이터를 CSV 파일로 저장
const csvData = stores.map(store => `${store.id},${store.type},${store.name},${store.address}`);
 createCSVFile('stores.csv', 'id,type,name,address\n' + csvData.join('\n'));

console.log(stores);

