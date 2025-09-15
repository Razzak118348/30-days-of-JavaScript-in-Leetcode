var canBeTypedWords = function (text, brokenLetters) {
    let words = text.split(" ");
    let count = 0;

    for (let word of words) {
        let broken = false;

        for (let ch of brokenLetters) {
            if (word.includes(ch)) {
                broken = true;
                break;
            }
        }

        if (!broken) {
            count++;
        }
    }

    return count;
};

const result = canBeTypedWords("hello world", "ad");
console.log(result);


//  const splitArr = text.split(" ");
//     let count = 0
//     for (let i = 0; i < splitArr.length; i++) {
//         let broken = false;
//         for (let j = 0; j < brokenLetters.length; j++) {
//             if (splitArr[i].includes(brokenLetters[j])) {
//                 broken = true;
//                 break;
//             }
//         }
//         if (!broken) {
//             count++;
//         }
//     }
//     return count;