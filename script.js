const textToType = document.getElementById('textToType');
const inputBox = document.getElementById('inputBox');
const resetBtn = document.getElementById('resetBtn');

  resetBtn.addEventListener('click', () => {
    location.reload(); 
  });


const words = [
  "apple","banana","orange","grape","mango","lemon","peach","cherry","berry","kiwi",
  "melon","plum","pear","fig","lime","apricot","avocado","coconut","papaya","date",
  "guava","nectarine","pomegranate","tangerine","persimmon","blueberry","raspberry","strawberry","blackberry","cranberry",
  "pineapple","watermelon","cantaloupe","honeydew","passionfruit","dragonfruit","lychee","jackfruit","durian","kumquat",
  "tomato","carrot","potato","onion","garlic","spinach","cabbage","lettuce","broccoli","cauliflower",
  "pepper","cucumber","zucchini","eggplant","pumpkin","radish","turnip","beet","okra","celery",
  "chili","corn","peas","beans","soybean","mushroom","artichoke","asparagus","leek","parsnip",
  "sage","basil","thyme","rosemary","oregano","cilantro","dill","mint","tarragon","chive",
  "cinnamon","nutmeg","clove","ginger","turmeric","saffron","paprika","cumin","cardamom","vanilla",
  "bread","butter","milk","cheese","yogurt","cream","egg","honey","jam","cake",
  "cookie","pie","pasta","rice","noodle","soup","pizza","sandwich","burger","taco",
  "chocolate","candy","soda","juice","tea","coffee","water","wine","beer","whiskey",
  "shirt","pants","jeans","jacket","coat","sweater","dress","skirt","hat","cap",
  "shoe","sneaker","boot","sock","glove","scarf","belt","tie","bag","backpack",
  "phone","laptop","tablet","keyboard","mouse","monitor","camera","headphone","charger","speaker",
  "book","pen","pencil","notebook","paper","eraser","ruler","marker","stapler","folder",
  "car","bike","bus","train","plane","boat","truck","scooter","taxi","subway",
  "city","village","town","street","road","park","school","office","market","store",
  "river","lake","sea","ocean","mountain","hill","forest","desert","beach","island",
  "sun","moon","star","planet","sky","cloud","rain","snow","wind","storm",
  "dog","cat","rabbit","horse","cow","sheep","goat","pig","lion","tiger",
  "elephant","monkey","bear","fox","wolf","deer","kangaroo","giraffe","zebra","panda"
];


function generateText() {
  let textArray = [];
  for(let i = 0; i < 45; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    textArray.push(words[randomIndex]);
  }
  return textArray.join(' ');
}

let currentText = generateText();
textToType.innerText = currentText;

let startTime;
let finished = false;

inputBox.addEventListener('input', () => {
  const typed = inputBox.value;

 
  if (!startTime) startTime = new Date();

  
  let formattedText = '';
  for(let i = 0; i < currentText.length; i++) {
    if (i < typed.length) {
      formattedText += `<span class="${typed[i] === currentText[i] ? 'correct' : 'incorrect'}">${currentText[i]}</span>`;
    } else {
      formattedText += currentText[i];
    }
  }
  textToType.innerHTML = formattedText;

  
  if (typed.length === currentText.length && !finished) {
    finished = true;
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000 / 60;
    const wpm = Math.round(45 / timeTaken);
    let correctChars = 0;
    for (let i = 0; i < currentText.length; i++) {
    if (typed[i] === currentText[i]) correctChars++;
    }
    const accuracy = ((correctChars / currentText.length) * 100).toFixed(2);
    alert(`You finished!\nWPM: ${wpm}\nAccuracy: ${accuracy}%`);  }
});