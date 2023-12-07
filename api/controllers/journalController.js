const Journal = require('../models/journal');

/**
 * Get all journals.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the JSON array of journals.
 */
exports.getJournals = async (req, res) => {
    const journals = await Journal.find();
    res.json(journals);
}

/**
 * Create a new journal entry.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the created journal entry.
 */
exports.createJournal = async (req, res) => {
    const { title, body, timestamp } = req.body; // Extract the properties from the request body

    // Create a new Journal instance with the extracted properties
    const journal = new Journal({
        title: title,
        body: body,
        timestamp: timestamp || Date.now(), // Use the provided timestamp or the current date if not provided
    });
    try {
        // Save the journal entry to the database
        await journal.save();
        res.status(201).json(journal); // Return the created journal with a 201 status code (Created)
    } catch (error) {
        console.error('Error creating journal:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/**
 * Delete a journal entry by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the result of the deletion.
 */
exports.deleteJournal = async (req, res) => {
    const result = await Journal.findByIdAndDelete(req.params.id);
    res.json(result);
}

/**
 * Update a journal entry by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the updated journal entry.
 */
exports.updateJournal = async (req, res) => {
    const { title, body } = req.body;
    const updateJournal = await Journal.findByIdAndUpdate(req.params.id, { title, body }, { new: true });
    res.json(updateJournal);
};



    