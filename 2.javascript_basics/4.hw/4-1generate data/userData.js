import {v4 as uuidv4} from 'uuid';

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomId() {
    return uuidv4();
}

function generateRandomName() {
    const surNames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "맹"];
    const givenNames = ["승진", "승주", "영록", "수형", "상민", "흥제", "선진", "상연", "준하", "재은", "병규", "윤경", "정미"];
    const surName = getRandomItem(surNames);
    const givenName = getRandomItem(givenNames);
    return surName + givenName;
}

function generateRandomBirthdate(birthYear) {
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1;
    return `${birthYear}-${birthMonth.toString().padStart(2, '0')}-${birthDay.toString().padStart(2, '0')}`;
}

function generateRandomAddress() {
    const cities = getRandomItem(["서울", "부산", "대전", "광주", "인천", "대구", "울산", "세종"]);
    const districts = getRandomItem(["서구", "중구", "북구", "남구", "동구", "강서구", "강남구", "강북구", "강동구"]);
    const streetType = Math.random() < 0.5 ? '로' : '길';
    const streetNumber = Math.floor(Math.random() * 99) + 1; // 랜덤으로 1부터 99까지 숫자 생성
    const addressNumber = Math.floor(Math.random() * 99) + 1;
    return `${cities} ${districts} ${streetNumber}${streetType} ${addressNumber}`;
}

function generateRandomUser() {
    const id = generateRandomId();
    const name = generateRandomName();
    const gender = Math.random() < 0.5 ? 'male' : 'female';
    const age = Math.floor(Math.random() * 50) + 20;
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age+1;
    const birthdate = generateRandomBirthdate(birthYear);
    const address = generateRandomAddress();

    return {
        id,
        name,
        gender,
        age,
        birthdate,
        address
    };
}

export function getRandomUserId() {
    return getRandomItem(users).id;
}

export const users = [];

for (let i = 0; i < 1000; i++) {
    const user = generateRandomUser();
    users.push(user);
}

