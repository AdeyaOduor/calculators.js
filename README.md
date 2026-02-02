# JavaScript-calculators

Calculators with basic arithmetic operations built using HTML5, CSS3 and Vanilla JS.

## Architecture and Features:

calculators/
├── index.html
├── style.css
├── script.js
└── assets/

* All basic mathematical operations are supported (divide, multiple, remainder, add, subtract).
* Operations performed using __BODMAS__ rule and follows order of precendence from MDN Library.
* Keyboard inputs are supported for numbers, opertaors and other options.

# To Run:
### Navigate to your project folder
cd /path/to/your-project

### Start the server
python3 -m http.server 8080

### Or specify port 3000 (default is 8000)
python3 -m http.server 3000

### Keep server running in background
python3 -m http.server 8000 > server.log 2>&1 &

# Option B: Using Node.js/npm

** If you have package.json with dependencies
npm install
npm start

** Or create a simple server with Express
** Create server.js:
cat > server.js << 'EOF'
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
EOF

** Then run:
node server.js

## License

* [MIT License](https://opensource.org/licenses/MIT)
* Copyright &copy; 2021 Adeya David
