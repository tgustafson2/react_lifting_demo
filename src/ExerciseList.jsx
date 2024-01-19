import { useState } from "react";
import Exercise from "./Exercise";

function ExerciseList({exerciseList, deleteExercise, addSet, updateSet, deleteSet}){


    return(
        <ul>
            {exerciseList.length === 0 && "No Exercises"}
            {exerciseList.map(exercise => {
                return(
                    <Exercise
                        {...exercise}
                        key={exercise.id}
                        addSet={addSet}
                        updateSet={updateSet}
                        deleteSet={deleteSet}
                        deleteExercise={deleteExercise}
                    />
                )
            })}
        </ul>
    )
}

export default ExerciseList