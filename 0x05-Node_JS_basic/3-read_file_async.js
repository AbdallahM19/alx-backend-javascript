const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    try {
      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length === header.length);
      const fieldCounts = {};

      students.forEach((student) => {
        const field = student[header.indexOf('field')];
        const firstname = student[header.indexOf('firstname')];
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(firstname);
      });

      console.log(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    } catch (error) {
      reject(new Error('Cannot process the database'));
    }
  });
});

module.exports = countStudents;
