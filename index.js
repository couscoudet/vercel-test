const express = require("express"); 
const app = express(); 
app.get("/", (req, res) => { 
    res.send("Express on Vercel"); 
}); 
app.get("/test", (req, res) => { 
    res.send("ceci est un test"); 
}); 
const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
module.exports = app;