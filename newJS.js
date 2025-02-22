const todos = [
    {
        id:123,
        task:'Meeting',
        isCompleted:true
    },

    {
        id:456,
        task:'Cleaning',
        isCompleted:false
    },

    {
        id:789,
        task:'No task',
        isCompleted:true
    }
];

console.log(todos);

//For

for(let i=0;i<todos.length;i++){

    console.log(`The task for the id ${todos[i].id} is ${todos[i].task}`)

}

//ForEach

todos.forEach(function(todo){
    console.log(`The id's are ${todo.id}`);

});

//Map

const todo= todos.map(function(i){
    return (`The Tasks are ${i.task}`);

});
console.log(todo);

//Filter

const completed= todos.filter(function(i){
    return i.isCompleted===true;

}).map(function(i){
    return i.task;
});

console.log(completed); 

//Additional
todos.forEach((todo) => console.log(todo));

