function maxVowelConsonantSum(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = new Map();

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }
console.log(freq)
    let maxVowel = 0;
    let maxCons = 0;

    for (let [ch, count] of freq) {
        console.log(ch,count)
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, count);
        } else {
            maxCons = Math.max(maxCons, count);
        }
    }

    return maxVowel + maxCons;
}

const count = maxVowelConsonantSum('asdfklswiwwla')
console.log(count)