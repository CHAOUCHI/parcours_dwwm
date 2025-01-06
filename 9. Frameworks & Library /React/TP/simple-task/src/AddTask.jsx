export function AddTask({onAddTask}){
    
    function onSubmit(event){
        event.preventDefault();
        const newTask = (new FormData(event.target)).get("task");
        // J'ai une tache à ajouter dans le state... mais comment faire ?

        // J'appel la fonction donnée par App en lui fournissent newTask 
        // pour qu'il puisse l'enregistrer !
        onAddTask(newTask);
        
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="task" />
            <button>Ajouter</button>
        </form>
    );
}