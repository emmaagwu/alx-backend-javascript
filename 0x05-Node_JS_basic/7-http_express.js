const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      if (line.trim() !== '') {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((total, group) => total + group.length, 0);
    reportParts.push(`Number of students: ${totalStudents}`);
    Object.entries(studentGroups).forEach(([field, group]) => {
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    });
    resolve(reportParts.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DATABASE_FILE)
    .then((report) => {
      responseParts.push(report);
      res.setHeader('Content-Type', 'text/plain');
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.status(200).send(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
