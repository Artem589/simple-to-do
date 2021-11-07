// Простой TODO лист без графического интерфейса.

const list = {
  "create a task": "To Do",
  "make a bed": "To Do",
  "write a post": "In Progress",
}

// Функция changeStatus - будет менять статус задачи
function changeStatus(task, status) {
  return list[task] = status
}

changeStatus("have a walk", "Done")

// Функция addTask - добавляет новую задачу
function addTask(task) {
  return list[task] = "To Do"
}
addTask("have a walk")

// Функция deleteTask - удаляет задачу
function deleteTask(task) {
  return delete list[task]
}

deleteTask("have a walk")

// Функция showList будет выводить весь список дел в виде

function showList() {
  const listToDo = "To Do: " + "\n"
  const listInProgress = "In Progress: " + "\n"
  const listDone = "Done: " + "\n"

  let toDo = listToDo
  let inProgress = listInProgress
  let done = listDone

  for (keys in list) {
    switch (list[keys]) {
      case "To Do":
        toDo += '"' + keys + '"' + "," + "\n"
        break
      case "In Progress":
        inProgress += '"' + keys + '"' + "," + "\n"
        break
      case "Done":
        done += '"' + keys + '"' + "," + "\n"
        break
    }
  }

  if (toDo === listToDo) {
    toDo = listToDo + "-" + "\n"
  } else if (inProgress === listInProgress) {
    inProgress = listInProgress + "-" + "\n"
  } else if (done === listDone) {
    done = listDone + "-"
  }
  console.log(toDo + inProgress + done)
}

showList(list)
