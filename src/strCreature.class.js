const CHARS = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
import Gene from './gene.class';
export default class strCreature {
    constructor(id, config, parentsDna) {
        this.id = id;
        this.nOfChars = config.refStr.length;
        this.refStr = config.refStr;
        this.parentsDna = parentsDna;
        this.dna = this.hasParents() ? this.reprodution(this.parentsDna) : this.inicialization(this.nOfChars);
        this.sample = this.generateSample(config.sizeOfSample, this.dna);
        this.grade = this.calculateGradeFromSample(this.sample, config.refStr);
    }
    hasParents() {
        if (!this.parentsDna) { return false; }
        return true;
    }
    inicialization(nOfChars) {
        let dna = "";
        for (let i = 0; i < nOfChars; i++) {
            let gene = new Gene().gene;
            dna += gene;
        }
        return dna;
    }
    reprodution(parentsDna) {
        let childDna = this.crossover(parentsDna);
        childDna = this.mutate(childDna);
        return childDna;
    }
    crossover(parentsDna) {
        let c = "";
        let length = parentsDna[0].length;
        let cutPoint = Math.floor(Math.random()*(length-2))+1;
        for (var i = 0; i < length; i++) {
            if (i < cutPoint) { c += parentsDna[0][i]; }
            else              { c += parentsDna[1][i]; }
        }
        return c;
    }
    mutate(childDna) {
        let length = childDna.length;
        let i = Math.floor(Math.random() * length);
        let x = Math.round(Math.random());
        childDna = childDna.substr(0, i) + x + childDna.substr(i + 1);
        return childDna;
    }
    getCharDnaFromParentDna(parentsDna, i) {
        if (!parentsDna) { return undefined; }
        return [
            parentsDna[0][i].dna,
            parentsDna[1][i].dna
        ];
    }
    splitIntoGenes(dna) {
        let geneSize = new RegExp(".{1," + CHARS.length + "}", 'g');
        let genes = dna.match(geneSize);
        return genes;
    }
    generateStr(dna) {
        let str = "";
        let genes = this.splitIntoGenes(dna);
        genes.forEach((gene) => str += new Gene(gene).getRandomChar());
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
