const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  components: { type: Array, required: true },
});

module.exports = mongoose.model('Design', DesignSchema);
