const CHARS = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
export default class CharDna {
    constructor(parentsDna) {
        this.dna = this.generateDna(parentsDna);
    }
    generateDna(parentsDna) {
        let dna = {};
        CHARS.forEach((char) => {
            if (parentsDna) {
                // console.log(char);
                // console.log(parentsDna[0]);
                // console.log(parentsDna[0][char]);
            }
            if (parentsDna && (parentsDna[0][char] === parentsDna[1][char]) ) {
                dna[char] = parentsDna[0][char];
            } else {
                dna[char] = Math.round(Math.random());
            }
        });
        // console.log(dna);
        return dna;
    }
    generateChar() {
        let allowedChars = this.getAllowedChars();
        let char = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        return char;
    }
    getAllowedChars(){
        let allowedChars = [];
        for (let key in this.dna) {
            if (!!this.dna[key]) {
                allowedChars.push(key);
            }
        }
        return allowedChars;
    }
}
