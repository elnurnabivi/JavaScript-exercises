// ● Create a simple to-do list page using jQuery. Allow users to add and remove tasks. Each task
// should have a checkbox to mark it as complete. Change style of row when task is marked as
// complete
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
