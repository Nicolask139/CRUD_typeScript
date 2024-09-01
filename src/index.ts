import {createTask, getTasks, updateTask, deleteTask } from "./crud";

createTask("Tarefa 1", (err, results) => {
    if(err){
        console.error("Erro ao criar tarefa: ", err);
    }else{
        console.log("Tarefa criado com sucesso: ", results);
    }
});

getTasks((err, results) =>{
    if(err){
        console.error("Erro ao obter tarefas: ", err);
    }else{
        console.log("Tarefas: ", results);
    }
});

updateTask(1,"Tarefa Atualizada", true, (err, results) =>{
    if(err) {
        console.error("Erro ao atualizar tarefa: ", err);
    }else{
        console.log("Tarefa atualizada com sucesso: ", results);
    }
});

deleteTask(1, (err, results) => {
    if(err){
        console.error("Erro ao excluir tarefa: ", err);
    }else{
        console.log("Tarefa excluida com sucesso: ", results);
    }
});
