// Eloquent JavaScript
// Exercise 7B
// Robot Efficiency
// NB: Some parts of this code were already in the Eloquent JavaScript sandbox and not included here

let memory = [];

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

// Your code here
function yourRobot({place, parcels}, route) {
  if (route.length == 0) {
    let initialRoute = findRoute(roadGraph, place, parcels[0].place);
    let parcel = parcels.reduce((acc, p) => {
      let route = findRoute(roadGraph, place, p.place);
      if (route.length < initialRoute.length) {
        acc = p;
        initialRoute = route;
      }
      return acc;
    }, parcels[0]);

    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}



compareRobots(yourRobot, [], goalOrientedRobot, []);
runRobotAnimation(VillageState.random(), yourRobot, memory);
