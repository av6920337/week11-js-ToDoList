//Получаем необходимые элементы DOM
let taskInput = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let taskList = document.getElementById('taskList');

// //Обработчик события клика на кнопку "Добавить"
    addButton.addEventListener('click', function () {
  //Получаем значение, введенное в поле ввода
    const taskText = taskInput.value;
  //Создаём новый элемент списка
    const newTask = document.createElement('li');
  //Устанавливаем текст задачи внутри созданного элемента списка
    newTask.textContent = taskText;
  //Добавляем созданный элемент списка в нужное место на странице
    taskList.append(newTask);
  //Очищаем поле ввода после добавления задачи
    taskInput.value = '';
});

// - Проверяем, что кликнули на элемент списка (**`event.target`**)
// - Если условие выполняется, то переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка (**`element.classList.toggle`**)
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
    event.target.classList.toggle('li');
    }
});