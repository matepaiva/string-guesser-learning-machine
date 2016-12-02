import CharDna from './charDna.class';
export default class strCreature {
    constructor(id, config, parentsDna) {
        this.id = id;
        this.nOfChars = config.refStr.length;
        this.refStr = config.refStr;
        this.parentsDna = parentsDna;
        this.dna = this.generateDna(this.parentsDna, this.nOfChars);
        this.sample = this.generateSample(config.sizeOfSample, this.dna);
        this.grade = this.calculateGradeFromSample(this.sample, config.refStr);
    }
    generateDna(parentsDna, nOfChars) {
        let arr = [];
        for (let i = 0; i < nOfChars; i++) {
            let char = new CharDna(this.getCharDnaFromParentDna(parentsDna, i));
            arr.push(char);
        }
        return arr;
    }
    getCharDnaFromParentDna(parentsDna, i) {
        if (!parentsDna) { return undefined; }
        return [
            parentsDna[0][i].dna,
            parentsDna[1][i].dna
        ];
    }
    generateStr(dna) {
        let str = "";
        dna.forEach((char) => str += char.generateChar());
        return str;
    }
    generateSample(n, dna) {
        let sample = [];
        while (sample.length < n) {
            let str = this.generateStr(dna);
            sample.push(str);
        }
        return sample;
    }
    calculateGradeFromSample(sample, refStr) {
        let grade = 0;
        for (let i = 0; i < sample.length; i++) {
            let str = sample[i];
            grade += this.calculateGradeFromStr(str, refStr);
        }
        return grade;
    }
    calculateGradeFromStr(str, refStr) {
        let grade = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === refStr[i]) {
                grade = grade + 5;
            // } else if (refStr.indexOf(str[i]) !== -1) {
            //     grade = grade + 1;
            } else {
                grade = grade - 1;
            }
        }
        return grade;
    }
}
