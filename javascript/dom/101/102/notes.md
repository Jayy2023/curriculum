# DOM 102

## Modifying the DOM comes down to learning a few methods and properties.

### Creating elements
```javascript
const div = document.createElement('div');
div.innerText = "Hello, world!";
div.innerHTML = `<h1>Hello, world!</h1>`; // allows you to use html attributes.
root.append(div);

```

### Selecting elements
```javascript
// returns a list of nodes
document.getElementsByTagName('p');
document.getElementsByClassName('items');
document.querySelectorAll('.items');

//returns a single node
document.getElementById('root');
document.querySelector('article #root');
```

### Modifying elements
```javascript
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'red';
root.innerText = 'some text';
root.removeAttribute('data-id');

```
