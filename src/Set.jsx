import { useState } from "react";

function Set({id, exerId, repNum, weightNum, updateSet, deleteSet}){
    const [reps, setReps] = useState(repNum)
    const [weight, setWeight] = useState(weightNum)

    
    return(
        <li>
            <form onSubmit={() => updateSet(exerId, id, weight, reps)}>
                <label htmlFor="reps">Reps</label>
                <input
                    value={reps}
                    onChange={e => setReps(e.target.value)}
                    type="text"
                    id="reps"
                />
                <label htmlFor="weight">Weight</label>
                <input 
                    value = {weight}
                    onChange={e => setWeight(e.target.value)}
                    type="text"
                    id="weight"
                />
                <button>Save</button>
            </form>
            <button onClick={() => deleteSet(exerId, id)}>
                Delete Set
            </button>
        </li>
    )
}

export default Set