var express = require("express")

var app = express()

var users = [
    {name:"Petya", age: 22},
    {name:"Vaysa", age: 25},
    {name:"Artyom", age: 27}
]

app.get("/", function(req, res){
    var query = req.query
    res.send(query)
})


app.get("/users", function(req, res){
    res.send(users)
})

app.get("/users/:name", function(req, res){
    var nameParam = req.params.name;
    var user = users.find(function(user){
        return user.name == nameParam
    })
    res.send(user)
})

app.listen(3000)