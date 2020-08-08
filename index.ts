// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const var1 = { user: { id: 1 } }

const var2 = var1?.user.id;

appDiv.innerHTML = `<h1>TypeScript Starter: ${var2}</h1>`;
