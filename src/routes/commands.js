const tools = require('../../public/js/tools.js');
const express = require('express');
const commandRouter = express.Router();

commandRouter.get('', async(req, res) => {
    const commandlist = await tools.query(`SELECT * FROM Commands`);
    res.render('commands', { commands : commandlist })
})

module.exports = commandRouter;