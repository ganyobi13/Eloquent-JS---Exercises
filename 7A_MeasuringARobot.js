// Eloquent JavaScript
// Exercise 7A
// Measuring A Robot

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.log(`Done in ${turn} turns`);
      //break;
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.log(`Moved to ${action.direction}`);
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let turns1 = [], turns2 = [];
  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();
    turns1.push(runRobot(task, robot1, memory1));
    turns2.push(runRobot(task, robot2, memory2));
  }

  // find average of turns
  function average(array) {
    let sum = array.reduce((acc, val) => acc + val);
    return sum / array.length;
  }

  console.log(`Average steps taken by robot1: ${average(turns1)}!`);
  console.log(`Average steps taken by robot2: ${average(turns2)}!`);

}



compareRobots(routeRobot, [], goalOrientedRobot, []);
