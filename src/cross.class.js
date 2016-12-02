import Lineage from './lineage.class';

export default class Cross {
    constructor(config) {
        this.id = 0;
        this.config = config;
        this.parents = [this.getNewParent(), this.getNewParent()];
        this.nOfCross = config.nOfCross;

        this.startCrossingUntil();
    }
    getNewParent(parents) {
        this.id++;
        return new Lineage(this.config, parents).getBestParents()[0];
    }
    startCrossingUntil() {
        while (this.id < this.nOfCross) {
            let p1 = this.getNewParent(this.parents);
            let p2 = this.getNewParent();
            this.parents = [p1, p2];
            console.log(p1.sample[0], p1.grade);
        }
        return this.parents;

    }
}
