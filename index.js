const {inquirerMenu, inquirerInput} = require('./helpers/inquirer');
const TaskRepository = require('./repositories/TaskRepository');

const main = async()=>{

    const taskRepository = new TaskRepository();
    let option= '';
    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
                //TODO hacer q el usuario ingrese el titulo  de la tarea
                console.log('El usuario selecciono la opción crear tarea');
    
                const title = await inquirerInput('Task title');
    
                taskRepository.createTask(title);
    
                console.log(title);
            break;
            
            case 2:
                const allTasks = taskRepository.getAllTask();
                console.log(allTasks);
            break;
        }

    }while(option !== 0);

    
    

    
    
}

main();