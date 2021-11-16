const _STATUS_TODO = "TODO";
const _STATUS_IN_PROGRESS = "In Progress";
const _STATUS_DONE = "Done";

const list = [
  {
    id: 1,
    name: "create a post",
    status: "TODO",
    priority: "low",
  },
  {
    id: 2,
    name: "test",
    status: "Done",
    priority: "high",
  },
  {
    id: 3,
    name: "walk at shop",
    status: "In Progress",
    priority: "middle",
  },
];

function addTask(task) {
  return list.push({
    id: +`${list.length + 1}`,
    name: `${task}`,
    status: null,
    priority: null,
  });
}

addTask("buy products");

function changeStatus(task, stat) {
  let isFilterNames = list.map((item) =>
    item.name === task ? (item.status = stat) : item
  );
  return isFilterNames;
}
changeStatus("buy products", "TODO");

function deleteTask(task) {
  let index = list.findIndex((item) => item.name === task);
  let isValidIndex = index > -1 ? list.splice(index, 1) : list;
  return isValidIndex;
}

deleteTask("test");

function showBy(arr) {
  let sortTodo, sortInProgress, sortDone;

  console.log(`${_STATUS_TODO} : `);

  arr.filter(function (item) {
    if (item.status === _STATUS_TODO) {
      sortTodo = `${item.name},`;
      return console.log(sortTodo);
    }
  });

  console.log(`${_STATUS_IN_PROGRESS} : `);
  arr.filter(function (item) {
    if (item.status === _STATUS_IN_PROGRESS) {
      sortInProgress = `${item.name},`;
      return console.log(sortInProgress);
    }
  });

  console.log(`${_STATUS_DONE} : `);
  arr.filter(function (item) {
    if (item.status === _STATUS_DONE) {
      sortDone = `${item.name},`;
      return console.log(sortDone);
    }
  });

  if (!sortTodo) {console.log("-")}
  if (!sortInProgress) {console.log("-")}
  if (!sortDone) {console.log("-")}
}

showBy(list);
