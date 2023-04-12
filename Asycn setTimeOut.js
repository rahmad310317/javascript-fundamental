function addElement() {
  const header = document.createElement('h1');
  header.innerHTML = 'Hello World';
  document.body.appendChild(header);
};

setTimeout(addElement, 2000);
