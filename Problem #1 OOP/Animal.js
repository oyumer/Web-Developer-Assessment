class Animal {
    constructor(age) {
        this.age = age;
    }
    sleep() {
        console.log('Zzzzzzz');
    }
    eat() {
        console.log('Num num num');
    }
}

class Dolphin extends Animal {
    swim() {
        console.log('Splah');
    }
}

class Lion extends Animal {
    roar() {
        console.log('Rahhhh');
    }

    attack() {
        console.log('POW');
    }
}

class Eagle extends Animal {
    fly() {
        console.log('whoo Hooo!');
    }

    attack() {
        console.log('POW');
    }
}

class Bee extends Animal {
    fly() {
        console.log('whoo Hooo!');
    }
}
