
const EventManagement = require('./p5_3events_EventManagement');

// Create an instance of the EventManagement class
const eventManager = new EventManagement();

// Set up listeners for the events
eventManager.on('start', () => {
  console.log("Listener: Event has started!");
});

eventManager.on('in-progress', () => {
  console.log("Listener: Event is in progress!");
});

eventManager.on('completed', () => {
  console.log("Listener: Event has been completed!");
});

// Trigger the events
eventManager.startEvent();         // Trigger 'start' event
eventManager.inProgressEvent();    // Trigger 'in-progress' event
eventManager.completeEvent();      // Trigger 'completed' event
