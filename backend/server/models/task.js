const mongoose = require('mongoose');

// Définir le schéma de la tâche
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

// Créer et exporter le modèle Task
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
