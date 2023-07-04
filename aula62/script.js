class SerVivo{
    constructor(especie, nomeCientifico, alimentacao){
        this.especie = especie
        this.nomeCientifico = nomeCientifico
        this.alimentacao = alimentacao
    }
}

class Animal extends SerVivo{
    constructor(especie, nomeCientifico, alimentacao, patas, habitat){
        super(especie, nomeCientifico, alimentacao)
        this.reino = 'Animalia'
        this.anda = patas
        this.habitat = habitat
    }
}

const animal1 = new Animal("Toupeira", "Talpidae", "Carnivoro", "Quadrupede", "Subsolo")

console.log(animal1);
