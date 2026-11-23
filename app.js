const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    const currentTime = new Date().toLocaleString();

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Docker Demo App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    background-color: #f4f4f4;
                }
                .card {
                    background: white;
                    padding: 20px;
                    width: 500px;
                    margin: auto;
                    border-radius: 10px;
                    box-shadow: 0px 2px 10px rgba(0,0,0,0.2);
                }
                h1 {
                    color: #0078D4;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1> Docker Container Running Successfully</h1>

                <p><strong>Project:</strong> Build and Run Docker App Locally</p>

                <p><strong>Current Time:</strong> ${currentTime}</p>

                <p><strong>Hostname:</strong> ${os.hostname()}</p>

                <p><strong>Platform:</strong> ${os.platform()}</p>

                <p><strong>Architecture:</strong> ${os.arch()}</p>

                <p><strong>Status:</strong> Application is running inside Docker Container</p>
            </div>
        </body>
        </html>
    `);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
