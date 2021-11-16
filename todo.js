const list = {
  "create a task": "To Do",
  "make a bed": "To Do",
  "write a post": "In Progress",
}

function changeStatus(task, status) {
  return list[task] = status
}

function addTask(task) {
  return list[task] = "To Do"
}

function deleteTask(task) {
  return delete list[task]
}

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
  }
  if (inProgress === listInProgress) {
    inProgress = listInProgress + "-" + "\n"
  }
  if (done === listDone) {
    done = listDone + "-"
  }
  console.log(toDo + inProgress + done)
}

changeStatus("have a walk", "Done");
addTask("have a walk");
deleteTask("have a walk");
deleteTask("write a post");
deleteTask("make a bed");
deleteTask("create a task");
showList(list)






