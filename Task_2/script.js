document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          taskInput.value = '';
      }
  });

  taskList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          toggleTaskCompletion(event.target);
      } else if (event.target.classList.contains('delete-btn')) {
          deleteTask(event.target.parentElement);
      }
  });

  function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');

      li.appendChild(deleteButton);
      taskList.appendChild(li);
  }

  function toggleTaskCompletion(task) {
      task.classList.toggle('completed');
  }

  function deleteTask(task) {
      task.remove();
  }
});