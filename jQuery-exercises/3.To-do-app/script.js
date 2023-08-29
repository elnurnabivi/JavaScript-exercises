$(document).ready(() => {
  // Adding new task
  $("#addTask").click(() => {
    const taskText = $("#taskInput").val();
    if (taskText) {
      const newTask = $("<li>");
      const checkBox = $("<input type='checkbox'>");
      const deleteBtn = $("<button>Delete</button>");

      newTask.append(checkBox);
      newTask.append(taskText);
      newTask.append(deleteBtn);
      $("#listOfTasks").append(newTask);
      $("#taskInput").val("");
      // Deleting the task
      $(deleteBtn).click(() => {
        newTask.remove();
      });
      checkBox.click(() => {
        if (checkBox.is(":checked")) {
          newTask.css("text-decoration", "line-through");
        } else {
          newTask.css("text-decoration", "none");
        }
      });
    }
  });
});
