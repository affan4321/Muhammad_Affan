const express = require('express');
const app = express();

// Assume the JSON data is stored in a file called 'kills.json' on the server
const jsonData = require('./data.json');

// Convert the JSON data to the data.js format
const data = jsonData.SKILLS.map((skill) => {
  return {
    title: skill.title,
    iconURL: skill.icons,
    skills: skill.skills.map((subskill) => {
      return { skill: subskill.skill, percentage: subskill.percentage };
    })
  };
});

// Write the converted data to a new file called 'data.js'
const fs = require('fs');
fs.writeFileSync('./utils/data.js', `export const SKILLS = ${JSON.stringify(data, null, 2)};`);

console.log('Data converted and written to data.js');