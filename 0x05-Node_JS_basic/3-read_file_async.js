const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, fileData) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    if (fileData) {
      const lines = fileData.trim().split('\n');
      const studentDataGroups = {};
      const headerFields = lines[0].split(',');
      const studentAttributes = headerFields.slice(0, headerFields.length - 1);

      for (const record of lines.slice(1)) {
        const recordValues = record.split(',');
        const attributeValues = recordValues.slice(0, recordValues.length - 1);
        const majorField = recordValues[recordValues.length - 1];

        if (!studentDataGroups[majorField]) {
          studentDataGroups[majorField] = [];
        }

        const studentObject = studentAttributes
          .map((attribute, index) => [attribute, attributeValues[index]]);

        studentDataGroups[majorField].push(Object.fromEntries(studentObject));
      }

      const totalStudentsCount = Object.values(studentDataGroups)
        .reduce((acc, group) => acc + group.length, 0);

      console.log(`Number of students: ${totalStudentsCount}`);

      for (const [major, students] of Object.entries(studentDataGroups)) {
        const studentNamesList = students.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${major}: ${students.length}. List: ${studentNamesList}`);
      }

      resolve(true);
    }
  });
});

module.exports = countStudents;
