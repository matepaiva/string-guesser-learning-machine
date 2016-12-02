import { nOfGenerations } from './config';
import Generation from './generation.class';


export default class Lineage {
    constructor(refStr) {
        this.id = 0;
        this.nOfGenerations = nOfGenerations;
        this.refStr = refStr;
        this.parents = undefined;
    }
    runGeneration() {
        let gen = new Generation(this.id, this.refStr, this.parents);
        this.parents = gen.getTheTwoBestChildren();
        console.log(`[${this.id}]: ${this.parents[0].sample[0]} | ${this.parents[0].grade}`);
        this.id++;
    }
    iterateOverGenerations() {
        while (this.id < this.nOfGenerations) {
            this.runGeneration();
        }
        return this.parents;
    }
}
