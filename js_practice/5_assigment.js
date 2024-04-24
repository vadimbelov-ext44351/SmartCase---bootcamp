// Calculate BMI
const mark = {
    name : 'Mark',
    surname : 'Miller',
    sex: 'Male',
    city: 'Prague'
};
const john = {
    name: 'John',
    surname: 'Smith',
    sex: 'Male',
    city: 'Berlin'
};
const bob = {
    name: 'Bob',
    surname: 'Black',
    sex: 'Male',
    city: 'Berlin'
};
const kate = {
    name: 'Kate',
    surname: 'Miller',
    sex: 'Female',
    city: 'Berlin'
}

const people = [ mark, john, bob, kate ];


function getByCity(people, city){
    return people.filter(p => p.city === city);
};

function getBySex(people, sex){
    return people.filter(p => p.sex === sex);
};


console.log('All people:',people);
console.log('Sorting by city:',getByCity(people,'Prague'));
console.log('Sorting by sex:',getBySex(people,'Female'));