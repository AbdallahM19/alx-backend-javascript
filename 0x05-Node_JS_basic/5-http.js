const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv[2] || '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = async (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length === headers.length);
    const fieldCounts = {};

    students.forEach((student) => {
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

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const report = await countStudents(DB_FILE);
      res.end(report);
    } catch (error) {
      res.statusCode = 500;
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});

module.exports = app;
