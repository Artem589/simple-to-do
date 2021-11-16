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

function changeStatus(task, stat) {
  let isFilterNames = list.map((item) =>
    item.name === task ? (item.status = stat) : item
  );
  return isFilterNames;
}

function deleteTask(task) {
  let index = list.findIndex((item) => item.name === task);
  let isValidIndex = index > -1 ? list.splice(index, 1) : list;
  return isValidIndex;
}

function showBy(arr) {
  let sortTodo, sortInProgress, sortDone;

  console.log(`${_STATUS_TODO} : `);

  arr.filter(function (item) {
    if (item.status === _STATUS_TODO) {
      sortTodo = `${item.name},`;
      console.log(sortTodo);
    }
  });
   if (!sortTodo) {console.log("-")}

  console.log(`${_STATUS_IN_PROGRESS} : `);
  arr.filter(function (item) {
    if (item.status === _STATUS_IN_PROGRESS) {
      sortInProgress = `${item.name},`;
      console.log(sortInProgress);
    }
  });

  if (!sortInProgress) {console.log("-")}

  console.log(`${_STATUS_DONE} : `);
  arr.filter(function (item) {
    if (item.status === _STATUS_DONE) {
      sortDone = `${item.name},`;
      console.log(sortDone);
    }
  });

  if (!sortDone) {console.log("-")}
}

// deleteTask("test");
// changeStatus("buy products", "TODO");
// addTask("buy products");
showBy(list);


