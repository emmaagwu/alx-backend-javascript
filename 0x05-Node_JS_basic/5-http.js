const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
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

    const fileLines = data.trim().split('\n');
    const headers = fileLines[0].split(',');
    const studentProperties = headers.slice(0, headers.length - 1);
    const studentGroups = {};

    fileLines.slice(1).forEach((line) => {
      if (line.trim() !== '') {
        const studentDetails = line.split(',');
        const field = studentDetails[studentDetails.length - 1];
        const studentData = studentProperties.map((prop, index) => [prop, studentDetails[index]]);

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        studentGroups[field].push(Object.fromEntries(studentData));
      }
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((sum, group) => sum + group.length, 0);
    const output = [`Number of students: ${totalStudents}`];

    Object.entries(studentGroups).forEach(([field, students]) => {
      output.push(`Number of students in ${field}: ${students.length}. List: ${students.map((student) => student.firstname).join(', ')}`);
    });

    resolve(output.join('\n'));
  });
});

const ROUTES = {
  '/': (req, res) => {
    const message = 'Hello Holberton School!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', message.length);
    res.statusCode = 200;
    res.end(message);
  },
  '/students': (req, res) => {
    const initialMessage = 'This is the list of our students';

    countStudents(DATABASE_FILE)
      .then((report) => {
        const responseMessage = `${initialMessage}\n${report}`;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseMessage.length);
        res.statusCode = 200;
        res.end(responseMessage);
      })
      .catch((error) => {
        const errorMessage = `${initialMessage}\n${error.message}`;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', errorMessage.length);
        res.statusCode = 200;
        res.end(errorMessage);
      });
  },
};

app.on('request', (req, res) => {
  const routeHandler = ROUTES[req.url];
  if (routeHandler) {
    routeHandler(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
