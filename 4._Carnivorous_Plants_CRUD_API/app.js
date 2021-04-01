const express = require("express");
const app = express();

app.use(express.json());

let id = 3;

class Plant {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

//let plants = [new Plant(1, "plant1"), new Plant(2, "plant2")];

let plants = [
    {id: 1,
    name: "plant1"
    },
    {id: 2,
        name: "plant2"
    }
]

//get all
app.get("/plants", (req, res) => {
    res.send({plants: plants});
});

//get by id
app.get("/plants/:id", (req, res) => {
    let id = req.params.id;
    let plant = plants.find(plant => plant.id === parseInt(id));
    res.send({found: plant});
});

//post
app.post("/plants", (req, res) => {
    //const plant = req.body;
    //plant.id = id++;
    let plant = new Plant(id++, req.body.name);
    plants.push(plant);
    console.log(plants);
    res.send({messsage: "Plant has been added", plant: plant});
});

//patch
app.patch("/plants/:id", (req, res) => {
    console.log(plants);
    let plantUpdated = false;
    plants = plants.map(plant => {
        if(plant.id === Number(req.params.id)){
            plantUpdated = true;
            return {...plant, ...req.body, id: plant.id};
        }
        return plant;
    })
    console.log(plants);
    res.send({data: plantUpdated});
})

//delete by id
app.delete("/plants/:id", (req, res) => {
    let id = Number(req.params.id);
    let plant = plants.filter(plant => plant.id !== id);
    console.log(members);
    res.send({});
})



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});