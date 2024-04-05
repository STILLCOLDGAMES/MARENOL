let hashInput = document.getElementById("HashInput");
let deHashInput = document.getElementById("DeHashInput");
let textRes = document.getElementById("TextRes");
let HashPanel = document.getElementById("MessagePanel");
let InfoPanel = document.getElementById("InfoPanel");
let LoginPanel = document.getElementById("LoginPanel");
let CameraPanel = document.getElementById("CameraPanel");
let TitleMain = document.getElementById("TitleMain");

let userInput = document.getElementById("LoginInput");
let paswordInput = document.getElementById("PasswordInput");
let PridurokInfo = document.getElementById("PridurokInfo");


let ps = "_351834X", login = "SECRET_ARHIP"
const dolg = "770€ - Льву, 850€ - Пате", exercies = 1750

let hashStr = "🩸",hashStr2 = "-+}{";
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

function NavBarOpen(name){

    CameraPanel.style.visibility = 'hidden'
    LoginPanel.style.visibility = 'hidden'
    InfoPanel.style.visibility = 'hidden'
    HashPanel.style.visibility = name==="Message"?'visible':'hidden';
    CameraPanel.style.visibility = name==="Camera"?'visible':'hidden';
    TitleMain.innerText = name.toUpperCase()
}

function OpenInfo(){
    NavBarOpen("")
    TitleMain.innerText = "LOGIN"
    LoginPanel.style.visibility = localStorage.getItem("IsLog")!=="true"?'visible':'hidden';
    InfoPanel.style.visibility = localStorage.getItem("IsLog")==="true"?'visible':'hidden';
    if(localStorage.getItem("IsLog")==="true"){

        PridurokInfo.innerText = "Павлович Архип Дюбянов \n Должен: \n" + dolg + "\n Упражнений " + exercies ;
        PridurokInfo.innerHTML += `<br><br>Контакты должника<br><a href="https://vk.com/excepteed" style="color: deepskyblue" >ВК</a> <br> ДC : madscorp4146 <br> Номер : +371 22 337 827`;
        TitleMain.innerText = "INFO"
    }
}

function LoginF(){
if(ps===paswordInput.value&&userInput.value===login){
    alert("Logined successfully!")
    localStorage.setItem("IsLog","true")
    window.location.reload();
  }
else  alert("Wrong data!")
}

NavBarOpen("Message")
