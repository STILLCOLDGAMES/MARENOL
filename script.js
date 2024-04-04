let hashInput = document.getElementById("HashInput");
let deHashInput = document.getElementById("DeHashInput");
let textRes = document.getElementById("TextRes");





let hashStr = "🩸",hashStr2 = "*}{";
const encryptionMap = {
    'А': '✈',
    'Б': '🌆',
    'В': '🌇',
    'Г': '❤',
    'Д': '💛',
    'Е': '🥺',
    'Ё': '💤',
    'Ж': '💚',
    'З': '🤩',
    'И': '🦷',
    'Й': '♻',
    'К': '🀄',
    'Л': '🔔',
    'М': '👁',
    'Н': '👻',
    'О': '👽',
    'П': '🛑',
    'Р': '🖤',
    'С': '🔈',
    'Т': '🥶',
    'У': '🎃',
    'Ф': '👾',
    'Х': '🤑',
    'Ц': '🔱',
    'Ч': '<',
    'Ш': '>',
    'Щ': '🧳',
    'Ъ': '☢',
    'Ы': '💍',
    'Ь': '🐳',
    'Э': '𐊵',
    'Ю': '❎',
    'Я': '🎵',

    'а': '🧠',
    'б': '🧶',
    'в': '👓',
    'г': '🥽',
    'д': '🎓',
    'е': '😀',
    'ё': '🌤',
    'ж': '🈶',
    'з': '🈚',
    'и': '🈸',
    'й': '🈺',
    'к': '🈷',
    'л': '✴',
    'м': '🆚',
    'н': '🕐',
    'о': '🕑',
    'п': '🕗',
    'р': '🕒',
    'с': '🕕',
    'т': '↖',
    'у': '✠',
    'ф': '✟',
    'х': '✚',
    'ц': '☧',
    'ч': '𒀭',
    'ш': '★',
    'щ': '⟣',
    'ъ': '⁎',
    'ы': '᪥',
    'ь': '▮',
    'э': '◉',
    'ю': '👜',
    'я': '●'
    // добавьте другие символы по аналогии
};

function encrypt() {
    deHashInput.value = ""
    let text = hashInput.value
    let encryptedText = '';
    for (let char of text) {
        if (encryptionMap[char]) {
            console.log(getRandomInt(5));
            encryptedText += (getRandomInt(5)>=3?encryptionMap[char.toLowerCase()]:encryptionMap[char.toUpperCase()]) + (getRandomInt(5)>=3?hashStr:hashStr2);
        } else {
            encryptedText += char;
        }
    }
    textRes.innerText = encryptedText;
    navigator.clipboard.writeText(encryptedText);
}

function decrypt() {
    hashInput.value = ""
    let text = deHashInput.value
    let decryptedText = '';
    for (let char of text) {
        let found = false;
        for (let key in encryptionMap) {
            if (encryptionMap[key] === char) {
                decryptedText += key;
                found = true;
                break;
            }
        }
        if (!found) {
            decryptedText += char;
        }
    }
    decryptedText = decryptedText.replaceAll(hashStr, '').replaceAll(hashStr2, '');
    textRes.innerText = decryptedText;

}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

