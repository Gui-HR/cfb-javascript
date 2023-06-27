class Animal {
    constructor(animalNickname, animalKind, animalFamily) {
        this.name = animalNickname
        this.kind = animalKind
        this.family = animalFamily
    }

    animalInfo(){
        console.log(this.name)
        console.log(this.kind)
        console.log(this.family)
    }
}

const Frog = new Animal('Fling', 'Frog', 'Anphibious')
Frog.animalInfo()