const mongoose = require('mongoose');
const moment = require('moment-timezone');

const taskSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  endDate: Date,
  timeZone: String,
});

taskSchema.methods.convertToTimeZone = function () {
  return {
    title: this.title,
    startDate: moment(this.startDate).tz(this.timeZone).format(),
    endDate: moment(this.endDate).tz(this.timeZone).format(),
  };
};

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);
