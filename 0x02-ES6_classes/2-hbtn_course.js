class HolbertonCourse {
  constructor(name, length, students) {
    const errors = [];

    if (typeof name !== 'string') {
      errors.push('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      errors.push('Length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      errors.push('Students must be an array of strings');
    } else {
      this._students = students;
    }

    if (errors.length > 0) {
      throw new TypeError(errors.join(', '));
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}

export default HolbertonCourse;
