import { useState } from "react";

export default function NewExerciseForm({ onSubmit }){
    const [newExer, setNewExer] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newExer === "") return

        onSubmit(newExer)

        setNewExer("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="exercise">New Exercise</label>
                <input 
                    value={newExer}
                    onChange={ e => setNewExer(e.target.value)}
                    type="text"
                    id="exercise"
                />
            </div>
            <button>Add</button>

        </form>
    )


}
