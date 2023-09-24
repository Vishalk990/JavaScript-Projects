const input = document.getElementById("numOfwords");

const container = document.querySelector(".container");

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; ++i) {

        const random = (Math.random() * (letters.length - 1)).toFixed(0);

        text += letters[random];
    };

    return text;
};



let numOfWords = 0;

const generatePara = () => {

    numOfWords = Number(input.value);

    const para = document.createElement("p");

    let data = "";
    for (let i = 0; i < numOfWords; ++i) {
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }

    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
};

