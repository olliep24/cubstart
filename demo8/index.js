const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Cubstart:Cubstart@cluster0.otxkq.mongodb.net/lec8?retryWrites=true&w=majority", () => console.log('MongoDB Connected.'));

const savePerson = () => {
    const PersonSchema = new mongoose.Schema({
        name: {
            type: String
        }
    }, { collection: "People"})

    const Person = mongoose.model("Person", PersonSchema);

    const newPerson = new Person( {name: "Bob"} )
    newPerson.save();
}

setTimeout(savePerson, 5000);