document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.getElementById("app");

  const header = document.createElement("header");
  header.className = "page-header";
  const h1 = document.createElement("h1");
  h1.textContent = "To Do List";
  header.appendChild(h1);

  const mainContainer = document.createElement("main");
  mainContainer.className = "content-container";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Введите задачу...";
  input.className = "task-input";

  const list = document.createElement("ul");
  list.className = "item-list";

  const addButton = document.createElement("button");
  addButton.textContent = "Добавить";
  addButton.className = "add-btn";

  addButton.addEventListener("click", () => {
    const taskText = input.value;
    if (taskText.trim() === "") {
      return;
    }
    createTaskItem(list, taskText);
    input.value = "";
    input.focus();
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  list.addEventListener("click", (event) => {
    const li = event.target.closest("li");

    if (!li) {
      return;
    }

    const btn = event.target.closest("button.delete-btn");

    if (btn) {
      li.remove();
    } else {
      li.classList.toggle("done");
    }
  });

  function createTaskItem(parentList, text) {
    const newLi = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    textSpan.className = "task-text";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";

    newLi.appendChild(textSpan);
    newLi.appendChild(deleteBtn);

    parentList.appendChild(newLi);
  }

  appContainer.appendChild(header);
  appContainer.appendChild(mainContainer);
  mainContainer.appendChild(input);
  mainContainer.appendChild(addButton);
  mainContainer.appendChild(list);
});
