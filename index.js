// SyntaxError: Unexpected token 'export' in JavaScript

import {Person, site} from './another-file.js';

const p1 = new Person('James');
console.log(p1); // 👉️ Person { first: 'James' }

console.log(site); // 👉️ bobbyhadz.com
