class Animal1{
    

    public ageOfAnimal() : number{
        return 5;
    }
}

class Cow1 extends Animal1{

     public soundOfAnimal() : String{
        return "cow";
    }
}
const c2 = new Cow1();
console.log(c2.ageOfAnimal());

