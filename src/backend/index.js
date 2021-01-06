module.exports = (client) => {
    const express = require('express');
    const app = express();

    // Requirew path to serve HTML with server
    const path = require('path');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));

    app.use(express.static(path.join(__dirname, "public")));

    app.post("/send-message", async (req, res) => {
        const { body } = req;
        const { channel, message } = body;
        
        const channelToSend = await client.channels.fetch(channel);
        channelToSend.send(message);
    });

    app.listen(3000, () => console.log("Server Listing on port 3000!"))
}