const {v4: uuidv4} = require ('uuid');
uuidv4();


class Task {

    id = '';
    title = '';
    done= false;
    created = null;//fecha de cración de la tarea
    finished = null;//fecha de finalización de la tarea

    constructor(title){
        this.id = uuidv4();//ToDo: asiganar id
        this.title = title;
        this.done = false;
        this.created= new Date();
    }
}

module.exports = Task;