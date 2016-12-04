import Generation from './generation.class';


export default class Lineage {
    constructor(config, parents) {
        this.id = 0;
        this.config = config;
        this.refStr = config.refStr;
        this.parents = parents;
    }
    runNewGeneration() {
        let gen = new Generation(this.id, this.config, this.parents);
        this.parents = gen.getTheTwoBestChildren();
        console.log(`[${this.id}]: ${this.parents[0].sample[0]} | ${this.parents[0].grade}`);
        this.id++;
    }
    getBestParents() {
        // while (!this.areParentsDnaEqual(this.parents)) {
        let i = 0;
        while (i < 60000) {
            this.runNewGeneration();
            i++;
        }
        return this.parents;
    }
    areParentsDnaEqual(parents) {
        if (!parents) { return false; }
        let p1StrDna = this.DnaToString(parents[0].dna);
        let p2StrDna = this.DnaToString(parents[1].dna);
        if (p1StrDna === p2StrDna) { console.log("FODEEEEU"); }
        return p1StrDna === p2StrDna;
    }
    DnaToString(dna) {
        let str = "";
        for (var i = 0; i < dna.length; i++) {
            let charDna = dna[i].dna;
            for (var key in charDna) {
                str += charDna[key];
            }
        }
        // console.log(str);
        return str;
    }
}
