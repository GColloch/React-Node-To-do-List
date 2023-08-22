const mongoose = require("mongoose");

// Je crée une fonction asynchrone qui se charge de la connexion à la base de données

module.exports = async () => {
    try {
      // Je configure les paramètres de connexion à la base de données
        const connectionParams = {
            useNewUrlParser: true, // J'utilise un nouvel analyseur d'URL
            useCreateIndex: true,  // Je demande à Mongoose de créer automatiquement des index
            useUnifiedTopology: true, // J'utilise un mode de gestion de connexion unifié
        };
          
        // J'essaie de me connecter à la base de données en utilisant cette URL
        await mongoose.connect(
            "mongodb://localhost/todo-list",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
