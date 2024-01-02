
import readline from 'readline';
import { mostrarMenu, iniciarInterface } from './utils.js';

const interfaceDeUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pessoas = [];

mostrarMenu();
iniciarInterface(interfaceDeUsuario, pessoas);
