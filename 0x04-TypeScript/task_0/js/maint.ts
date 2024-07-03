interface Student {
  firstname: string;
  lastName: string;
  age: number;
  location: string;  
}

let student1: Student = {
  firstname: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
}

let student2: Student = {
  firstname: 'Emma',
  lastName: 'Agwu',
  age: 30,
  location: 'Washington'
}


// Create array of students
const studentsList: Array<Student> = [
  student1,
  student2,
];

// CSS styles
const styleSheet = `
html {
  margin: 0;
  height: 100%;
}
body {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  margin: 10%;
}
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 10px;
  border: 1px solid gray;
  cursor: pointer;
}
td:hover {
  background: gainsboro;
}

td:nth-child(1) {
  text-align: center;
}
`;


/**
 * Displays a table of students' information on the web page.
 * 
 * @param students - An array of student objects containing their information.
 */

// Function to display students in a table

const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  // Creating table header
  const headers = ['FirstName', 'Location'];
  headers.forEach(headerText => {
      const headerCell = document.createElement('td');
      headerCell.textContent = headerText;
      headRow.appendChild(headerCell);
  });
  tableHead.appendChild(headRow);
  table.appendChild(tableHead);

  // Populating table body with student data
  students.forEach(student => {
      const bodyRow = document.createElement('tr');
      Object.values(student).forEach(value => {
          const bodyCell = document.createElement('td');
          bodyCell.textContent = String(value);
          bodyRow.appendChild(bodyCell);
      });
      tableBody.appendChild(bodyRow);
  });
  table.appendChild(tableBody);

  // Appending table to document body
  document.body.appendChild(table);
};

// Call displayStudents function with the studentsList array
displayStudents(studentsList);

// Adding styles to the document
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);

// Setting document title
document.title = 'Task 0';
