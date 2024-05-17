// npm install express

const express = require('express');
const path = require('path');

const app=express();

app.use(express.static(path.join(__dirname, '')))

// about
app.get('/about', (req, res) => {
    // TODO: when click the 'about' button
    res.sendFile(path.join(__dirname, 'about.html'));
})

// contact
app.get('/contact-me', (req, res) => {
    // TODO: when click the 'about' button
    res.sendFile(path.join(__dirname, 'contact-me.html'));
})

// 404 error
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
})
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});