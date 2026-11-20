const express = require('express');
const cors = require('cors')
const saudeRoutes = require('./routes/healthRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/' , (req, res) =>{
    res.json({mesagem: 'API role sp funcionado!'})
});

app.use('/saude', saudeRoutes);

module.exports = app;