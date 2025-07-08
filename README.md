
**🔹 What is require() in Node.js?**
require() is a built-in function in Node.js used to import code from other files or modules.

**🔹 How It Works:**
Loads a module (built-in, custom file, or npm package)

1. Executes the file once
2. Returns the module.exports value
3. Caches the result for faster future use

**Why use require()?**

Encapsulation: keeps variables and functions private to their file.
Reusability: share functionality across files without duplication.
Maintainability: small, focused modules are easier to test and debug.
Dependency management: clear, explicit list of what a file needs (const fs = require('fs');).

**ES Modules note**
Newer Node versions also support import / export (ECMAScript Modules). require() remains fully supported and is still the standard in many projects.



