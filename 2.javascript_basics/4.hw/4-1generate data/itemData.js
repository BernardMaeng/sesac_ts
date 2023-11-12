import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const itemTypes = ['Coffee', 'Cake', 'Juice'];
const coffeeNames = ['Americano', 'Espresso', 'Mocha', 'Cappuccino'];
const cakeNames = ['Vanilla', 'Red Velvet', 'Strawberry'];
const juiceNames = ['Watermelon', 'Pineapple', 'Orange'];


export const itemData = [];

function generateRandomItem() {
    const type = getRandomItem(itemTypes);
    let name;
    let existingItem;

    switch (type) {
        case 'Coffee':
            name = `${getRandomItem(coffeeNames)} Coffee`;
            break;
        case 'Cake':
            name = `${getRandomItem(cakeNames)} Cake`;
            break;
        case 'Juice':
            name = `${getRandomItem(juiceNames)} Juice`;
            break;
        default:
            name = 'Unknown Item';
    }

    // 이미 같은 아이템이 존재하는지 확인
    existingItem = itemData.find(item => item.name === name);

    // 이미 같은 아이템이 존재하면 존재하는 아이템과 동일한가격으로 책정 그렇지 않을 경우 새로 책정
    const unit_price = existingItem ? existingItem.unit_price : Math.floor((Math.random() * 7) + 6) * 500;

    // 새로운 아이템 객체 생성
    const newItem = {
        id: uuidv4(),
        type,
        name,
        unit_price,
    };

    itemData.push(newItem);

    return newItem;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
export function getRandomItemId() {
    const randomItem = getRandomItem(itemData);
    return randomItem.id;
}

for (let i = 0; i < 20; i++) {
    generateRandomItem();
}

// CSV 파일 생성 함수
 function createCSVFile(filename, data) {
     fs.writeFileSync(filename, data);
 }

// itemData 데이터를 CSV 파일로 저장
 const csvData = itemData.map(item => `${item.id},${item.type},"${item.name}",${item.unit_price}`);
 createCSVFile('items.csv', 'id,type,name,unit_price\n' + csvData.join('\n'));

console.log(itemData);