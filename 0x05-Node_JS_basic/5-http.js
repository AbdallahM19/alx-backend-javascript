const http = require('http');
const fs = require('fs');

const port = 1245;
const host = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves with the formatted student count report.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    if (!dataPath) {
      return reject(new Error('Cannot load the database'));
    }

    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data.trim().split('\n');
      if (lines.length < 2) {
        return resolve('No students found.');
      }

      const headers = lines[0].split(',');
      const students = lines.slice(1)
        .map(line => line.split(','))
        .filter(fields => fields.length === headers.length);

      const fieldCounts = {};

      students.forEach(student => {
        const field = student[headers.indexOf('field')];
        const firstname = student[headers.indexOf('firstname')];
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
      });

      let result = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fieldCounts)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;

    case '/students':
      res.statusCode = 200;
      res.write('This is the list of our students\n');
      countStudents(DB_FILE)
        .then(report => {
          res.end(report);
        })
        .catch(error => {
          res.statusCode = 500;
          res.end(`Error: ${error.message}`);
        });
      break;

    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
});

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});

module.exports = app;
