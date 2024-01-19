import { useState, useEffect } from "react";
import  NewExerciseForm  from "./NewExerciseForm";
import ExerciseList from "./ExerciseList";

export default function Workout() {
    
    const [exercises, setExercises] = useState(() => {
        const localValue = localStorage.getItem("EXERCISES")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("EXERCISES", JSON.stringify(exercises))
    }, [exercises])

    function addExercise(name){
        setExercises(currentExer => {
            return [
                ...currentExer,
                { id: crypto.randomUUID(), name, sets: []},
            ]
        })
    }

    function deleteExercise(id){
        setExercises(currentExer => {
            return currentExer.filter( exer => exer.id !== id)
        })
    }

    function addSet(exerID, weight, reps){
        setExercises( currentExer => {
            return currentExer.map((exer) =>{
    
                if(exer.id === exerID){
                    return {id: exerID, name: exer.name, sets: [...exer.sets, {id: crypto.randomUUID(), weight, reps}]}
                }

                return exer
            })
        })
    }

    function updateSet(exerID, id, weight, reps){
        setExercises( currentExer => {
            return currentExer.map((exer) =>{
                if(exer.id === exerID){
                    return {id: exerID, name: exer.name, sets: exer.sets.map(set => {
                        if(set.id === id){
                            return {id: set.id, weight: weight, reps: reps}
                        }
                        return set;
                    })}
                }

                return exer
            })
        })
    }

    function deleteSet(exerID, setID){
        setExercises(currentExer => {
            return currentExer.map((exer) =>{
                if(exer.id === exerID){
                    return {id: exerID, name: exer.name, sets: exer.sets.filter(set => set.id !== setID)}
                }

                return exer
            })
        })
    }

    return(
        <>
            <h2>Workout</h2>
            <NewExerciseForm onSubmit={addExercise}/>
            <ExerciseList exerciseList={exercises} deleteExercise={deleteExercise}
             addSet={addSet} updateSet={updateSet} deleteSet={deleteSet}/>
        </>
    )
}