import { Router } from "express";
import { createTask, deleteTask, editTask, renderTaskEdit, renderTasks, taskToggleDone } from "../controllers/task.controllers";

const indexRoutes = Router()

indexRoutes.get('/', renderTasks)
indexRoutes.post('/tasks/add', createTask)
indexRoutes.get('/tasks/:id/toggleDone', taskToggleDone)
indexRoutes.get('/tasks/:id/edit', renderTaskEdit)
indexRoutes.post('/tasks/:id/edit', editTask)
indexRoutes.get('/tasks/:id/delete', deleteTask)

export default indexRoutes