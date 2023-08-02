const express = require("express");
const model = require("./model.js");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('../public')) // instructs to pull information from frontend in public folder

dotenv.config();
var petfinder = require("@petfinder/petfinder-js");
.....env

client.animal.search()
    .then(function (response) {
      console.log("success? ...");
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });



app.get("/pets", async (req, res) => {
  model.Pet.find().then(function (pets) {
    res.send(pets);
  });
});

app.get("/pets/:petId", async (req, res) => {
  var petID = req.params.petId;
  try {
    const pets = await model.Pet.findOne({ _id: petID });
    res.send(pets);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get("/applications", async (req, res) => {
  try {
    const applications = await model.AdoptionApp.find({});
    res.send(applications);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get("/applications/:applicationId", async (req, res) => {
  var applicationID = req.params.applicationId;
  try {
    const applications = await model.AdoptionApp.find({ _id: applicationID });
    res.send(applications);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// POST

app.post("/pets", async (req, res) => {
  const newPet = new model.Pet({
    name: req.body.name,
    species: req.body.species,
    breed: req.body.breed,
    age: req.body.age,
    gender: req.body.gender,
  });

  var errors = petValidator(newPet);

  if (errors.length == 0) {
    newPet
      .save()
      .then(function () {
        res.status(201).send(newPet);
      })
      .catch(function (errors) {
        console.log(errors);
        res.status(400).send("Failed to Save Pet");
      });
  } else {
    res.status(422).send(errors);
  }
});

app.post("/applications", async (req, res) => {
  const newApplication = new model.AdoptionApp({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    petId: req.body.petId,
  });

  var errors = ApplicationValidator(newApplication);
  if (errors.length == 0) {
    newApplication
      .save()
      .then(res.status(201).send("Created Applicaton"))
      .catch(function (errors) {
        res.status(400).send("Failed to save application");
      });
  } else {
    res.status(422).send(errors);
  }
});

// DELETE

app.delete("/pets/:petId", function (req, res) {
  var petID = req.params.petId;

  model.Pet.findOne({ _id: petID })
    .then((pet) => {
      if (pet) {
        model.Pet.deleteOne({ _id: petID }).then((result) => {
          console.log(result.deletedCount);
          res.status(204).send("Pet Deleted.");
        });
      } else {
        res.status(404).send("Pet Not Found.");
      }
    })
    .catch((errors) => {
      console.log(errors);
      res.status(400).send("Pet not found.");
    });
});

app.delete("/applications/:applicationId", function (req, res) {
  var applicationID = req.params.applicationId;

  model.AdoptionApp.findOne({ _id: applicationID })
    .then((application) => {
      if (application) {
        model.AdoptionApp.deleteOne({ _id: applicationID }).then((result) => {
          console.log(result.deletedCount);
          res.status(204).send("Applicaton Deleted.");
        });
      } else {
        res.status(404).send("Application Not Found.");
      }
    })
    .catch((errors) => {
      console.log(errors);
      res.status(400).send("Application not found.");
    });
});

app.listen(port, function () {
  console.log("Server is on port " + port);
});
