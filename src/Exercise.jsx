import { useState } from "react";
import Set from "./Set";

function Exercise({name, id, sets, addSet, updateSet, deleteSet, deleteExercise}){


    return(
        <li>
            {name}
            <button onClick={() => deleteExercise(id)}>
                Delete
            </button>
            <button onClick={() => addSet(id,0,0)}>Add Set</button>
            <ul>
                {sets.length === 0 && "No Sets"}
                {sets.map(set => {
                  
                    return (
                        <Set 
                            {...set}
                            id = {set.id}
                            exerId={id}
                            repNum={set.reps}
                            weightNum={set.weight}
                            key = {set.id}
                            updateSet={updateSet}
                            deleteSet={deleteSet}
                        />
                        

                    )
                })}
            </ul>
        </li>
    )
}

export default Exercise

