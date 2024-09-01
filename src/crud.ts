import connection from "./db";

//Create

export function createTask(title: string, callback: (err: any, results?: any) => void){
    const sql = "INSERT INTO TASKS (title) VALUE (?)";
    connection.query(sql, [title], (err, results)=>{
        callback(err, results);
    });
}

//READ

export function getTasks (callback: (err: any, results?: any) => void){
    const sql= "SELECT * FROM TASKS";
    connection.query(sql,(err,results)=>{
        callback(err, results);
    });
}

//UPDATE

export function updateTask(id: number, title:string, completed: boolean, callback: (err: any, results?:any) => void){
    const sql = "UPDATE TASKS SET title = ?, completed = ? WHERE id = ?";
    connection.query(sql, [title, completed, id], (err, results) => {
        callback(err,results);
    })
}

//DELETE

export function deleteTask(id:number, callback: (err:any,results?:any) => void){
    const sql = "DELETE FROM TASKS WHERE id =?";
    connection.query(sql,[id],(err, results) =>{
        callback(err,results)
    })
}