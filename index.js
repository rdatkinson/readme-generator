// Import inquirer and fs with ESM syntax
import inquirer from 'inquirer';
import fs from 'fs';
import { promisify } from 'util';

// Promisify writeFile for use with async/await
const writeFileAsync = promisify(fs.writeFile);