import { _compareObj } from './helpers';

import strCreature from './strCreature.class';

export default class Generation {
    constructor(id, config, parents) {
        this.id = id;
        this.config = config;
        this.childId = 0;
        this.parentsDna = this.getParentsDna(parents);
        this.children = this.generateChildren(this.childId, config.generationSize, config.refStr, this.parentsDna);
    }
    getParentsDna(parents) {
        return parents ? [parents[0].dna, parents[1].dna] : undefined;
    }
    generateChildren(id, generationSize, refStr, parentsDna) {
        var children = [];
        for (var i = 0; i < generationSize; i++) {
            var child = new strCreature(id, this.config, parentsDna);
            children.push(child);
            this.incrementChildId();
        }
        return children;
    }
    incrementChildId() {
        this.childId++;
    }
    sortChildrenByBestGrades() {
        return this.children.sort(_compareObj('grade')).reverse();
    }
    getTheTwoBestChildren() {
        return this.sortChildrenByBestGrades().slice(0, 2);
    }
}
