import Task from "../models/Task"

export const renderTasks = async (_, res) => {
    const tasks = await Task.find().lean()

    res.render("index", { tasks })
}

export const createTask = async (req, res) => {
    try {
        const task = Task(req.body)
        await task.save()
        res.redirect('/')
    } catch (error) {
        console.log("🚀 ~ file: index.routes.js ~ line 18 ~ indexRoutes.post ~ error", error)
    }
}

export const renderTaskEdit = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()

        res.render("edit", {task})
    } catch (error) {
        console.log("🚀 ~ file: index.routes.js ~ line 28 ~ indexRoutes.get ~ error", error) 
    }
}

export const editTask = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)

    res.redirect("/")
}

export const deleteTask = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    
    res.redirect("/")
}

export const taskToggleDone = async (req, res) => {
    const {id} = req.params
    const task = await Task.findById(id)

    task.done = !task.done
    await task.save()
    
    res.redirect("/")
}