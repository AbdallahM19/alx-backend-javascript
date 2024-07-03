/// <reference path="crud.d.ts" />

import { Subjects } from './subjects/Subject';
import { CRUD } from './crud'; // Assuming CRUD functions are defined in 'crud.js'

// Constants for subjects
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Teacher object with experience in teaching C
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// Log and interact with subjects
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements()); // Outputs: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Outputs: Available Teacher: Guillaume

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements()); // Outputs: Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // Outputs: Available Teacher: Guillaume

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements()); // Outputs: Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // Outputs: Available Teacher: Guillaume

