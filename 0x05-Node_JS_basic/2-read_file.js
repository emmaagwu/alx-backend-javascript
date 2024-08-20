const fs = require('fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(filePath, 'utf8')
  .toString('utf-8')
  .trim()
  .split('\n');

  studentGroups = {}

  dbFieldNames = fileLines[0].split(',');
  for (const line of studentfileLines.slice(1)) {
    const studentData = line.split(',');
    studentFullName = studentData.slice(0, studentData.length - 1);
    const field = studentData.slice(studentData.length - 1)
    if (!Object.keys(studentsGroups).includes(field)) {
      studentsGroups[field] = [];
    }
  }

}; 
