const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    const fileLines = fileContent.split('\n').filter((line) => line !== '');

    if (fileLines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      const field = studentRecord.slice(-1)[0];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const student = studentPropNames.reduce((acc, propName, idx) => {
        const newAcc = { ...acc };
        newAcc[propName] = studentRecord[idx];
        return newAcc;
      }, {});

      studentGroups[field].push(student);
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((acc, group) => acc + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    Object.entries(studentGroups).forEach(([field, students]) => {
      const studentNames = students.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
