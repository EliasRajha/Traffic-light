"use strict";

/**
 * The state property says what the traffic light's state (i.e. colour) is at that moment.
 */
const trafficlight = {
    state: "green",
};

let rotations = 0;
while (rotations < 2) {
    const currentState = trafficlight.state;
    console.log("The traffic light is on", currentState);

    // TODO
    // if the color is green, turn it orange
    // if the color is orange, turn it red
    // if the color is red, add 1 to rotations and turn it green
    if (currentState === "green") {
        trafficlight.state = "orange";
    } else if (currentState === "orange") {
        trafficlight.state = "red";
    } else if (currentState === "red") {
    //    rotations += 1;
          rotations++;
        trafficlight.state = "green";
    }
}

/**
 * The output should be:
 * 
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 */