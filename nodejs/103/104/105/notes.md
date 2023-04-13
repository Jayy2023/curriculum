# NodeJs 105

## **package.json** manages third-party modules found at [npm's repository](https://www.npmjs.com/)

### What is npm? 
[docs]()
- it is an online repository for the publishing of open source NodeJs projects.

- it is a command line utility for said repositories.

### Open-source software
- free to use as per a specific license.
- developers are not compensated 
- not guaranteed to work at all times.

### synonyms 
- Library 

- Module 

- Package

- Dependencies

### npm commands
- `npm -v` (version)
- `npm install -g <someModule>` (global install, not recommended)
- `npm install <someModule>` (local install, prefered)
- `npm init -y` (creates **package.json** with default values)

### package.json
- 'dependencies' list production libraries
- "devDependices" list the libraries used to write the code itself.
- is created by `npm init -y` 
- determines the contents pf **node_modules**

### node_modules
- contains all third-party modules installed with `npm`
- each module has its own **package.json** so this directory can be quite large.

### Executing commands (if applicable)
using `cowsay` as an example 
- node_modules/.bin/cowsay JavaScript FTW!
- npx cowsay Jvascript FTW! 
```
 _______
( hello )
 -------
        o   ^__^
         o  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


