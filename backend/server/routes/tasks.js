const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Route pour créer une nouvelle tâche
router.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la création de la tâche' });
  }
});

// Route qui permet d'obtenir la liste de toutes les tâches
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
  }
});

// Route qui permet d'obtenir une tâche spécifique par son ID
router.get('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la tâche' });
  }
});

// Route qui permet de mettre à jour une tâche existante
router.put('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, completed }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la mise à jour de la tâche' });
  }
});

// Route qui permet de supprimer une tâche
router.delete('/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndRemove(taskId);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    res.json(deletedTask);
  } catch (error) {
    res.status(400).json({ error: 'Erreur lors de la suppression de la tâche' });
  }
});

module.exports = router;