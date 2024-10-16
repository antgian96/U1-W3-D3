const myNodelist = document.querySelectorAll("li");

myNodelist.forEach((item) => {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);
});

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((button) => {
  button.onclick = () => {
    const div = button.parentElement;
    div.style.display = "none";
  };
});

const list = document.querySelector('#myUL'); 

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

  function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    if (inputValue === '') {
      alert("Aggiungi qualcosa");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
  
    document.getElementById("myInput").value = "";
  
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    
    document.querySelectorAll('.close').forEach(button => {
      button.onclick = () => {
        const div = button.parentElement;
        div.style.display = "none";
      };
    });
  }