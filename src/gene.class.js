const CHARS = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
export default class Gene {
    constructor(gene = this.generateGene()) {
        this.gene = gene;
    }
    generateGene() {
        let gene = "";
        CHARS.forEach(() => gene += Math.round(Math.random()));
        // console.log(gene);
        return gene;
    }
    getRandomChar(){
        let allowedChars = this.getAllowedChars();
        let char = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        return char;
    }
    getAllowedChars(){
        let allowedChars = "";
        for (var i = 0; i < this.gene.length; i++) {
            if(+this.gene[i] === 1) {
                allowedChars += CHARS[i];
            }
        }
        return allowedChars;
    }
}
