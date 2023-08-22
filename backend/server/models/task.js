const mongoose = require('mongoose');

// Défini le modèle de la tâche
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Le titre est requis
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false, // Par défaut, la tâche n'est pas complétée
  },
});

// Je créer et j'exporte le modèle de la tâche
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
