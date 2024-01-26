const TaskModel = require('../Models/TasksModel');

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log('Saved successfully');
      res.status(201).send(data);
    })
    .catch((err) => {
      res.send({ error: err, msg: 'something went wrong while creating task' });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send('Updated successfully'))
    .catch((err) => {
      res.send({ error: err, msg: 'something went wrong for updating data' });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send('Delete successful'))
    .catch((err) => {
      res.send({ error: err, msg: 'Something went wrong while deleting data' });
    });
};
