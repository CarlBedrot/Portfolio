const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');


router.get('/journals', journalController.getJournals);
router.post('/journal/new', journalController.createJournal);
router.delete('/journal/delete/:id', journalController.deleteJournal);
router.put('/journal/update/:id', journalController.updateJournal); 

module.exports = router;