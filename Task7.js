let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
people.pop();
people.unshift("Matt");
people.push("Thejes");
people.slice(3);
for(let i=0;i<people.lenght;i++){
if(people[i]=='Mary'){
break;
}
console.log(people[i]);
}
people=people.slice(2,people.lenght);
let peopl=people.indexOf("Mary");
let peo=people.indexOf("foo");
people.splice(2,1);
people.splice(2,1,"Elizabeth","Artie");
let bob=" ";
bob=people;
bob=people.concat("bob");
console.log(people);
