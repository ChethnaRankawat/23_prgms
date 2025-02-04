/*Question 5: Create a Class EventManagement that emits start, in-progress and
completed events. Create a separate module and access it to listen to the
events.*/
// EventManagement.js
const EventEmitter = require('events');
const os = require('os');

class EventManagement extends EventEmitter {
  constructor() {
    super();
    this.eventStartTime = null;  // Store the time when the event started
  }

  // Get current time in milliseconds
  getCurrentTime() {
    return Date.now();
  }

  // Get system uptime in seconds
  getUptime() {
    return os.uptime();
  }

  // Get the platform (e.g., Linux, Windows, etc.)
  getPlatform() {
    return os.platform();
  }

  // Get the system's hostname
  getHostname() {
    return os.hostname();
  }

  // Get total memory and free memory
  getMemory() {
    const totalMemory = os.totalmem() / (1024 * 1024 * 1024); // GB
    const freeMemory = os.freemem() / (1024 * 1024 * 1024);  // GB
    return { totalMemory, freeMemory };
  }

  // Calculate how long ago the event happened in minutes
  timeAgo(startTime) {
    const now = Date.now();
    const diffInMilliseconds = now - startTime;
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60)); // Difference in minutes

    if (diffInMinutes > 0) {
      return `${diffInMinutes} minute(s) ago`;
    } else {
      return 'just now';
    }
  }

  // Emit the start event
  startEvent() {
    this.eventStartTime = this.getCurrentTime(); // Store the event start time
    const uptime = this.getUptime();
    const platform = this.getPlatform();
    const hostname = this.getHostname();
    const { totalMemory, freeMemory } = this.getMemory();

    // Emit the 'start' event with system information and the event start time
    this.emit('start', this.eventStartTime, uptime, platform, hostname, totalMemory, freeMemory);
  }

  // Emit the in-progress event
  inProgressEvent() {
    const uptime = this.getUptime();
    const platform = this.getPlatform();
    const hostname = this.getHostname();
    const { totalMemory, freeMemory } = this.getMemory();

    // Emit the 'in-progress' event with system information and the event start time
    this.emit('in-progress', this.eventStartTime, uptime, platform, hostname, totalMemory, freeMemory);
  }

  // Emit the completed event
  completeEvent() {
    const uptime = this.getUptime();
    const platform = this.getPlatform();
    const hostname = this.getHostname();
    const { totalMemory, freeMemory } = this.getMemory();

    // Emit the 'completed' event with system information and the event start time
    this.emit('completed', this.eventStartTime, uptime, platform, hostname, totalMemory, freeMemory);
  }
}

module.exports = EventManagement;
