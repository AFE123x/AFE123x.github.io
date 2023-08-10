class employee{
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
    }
    addbonus(sal){
        this.income += sal;
    }
};
export default employee;