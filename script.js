async function getResponse() {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    render(data);
  } catch (error) {
    console.error(error);
  }
}

function render(users) {
  const listElement = document.querySelector("ul");
  users.forEach((user) => {
    const itemListElement = document.createElement("li");
    itemListElement.appendChild(document.createTextNode(user.name));
    listElement.appendChild(itemListElement);
  });
}

getResponse();
