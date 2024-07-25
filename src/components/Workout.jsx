import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const { workout } = props

  return (
    <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone ']}>
      <div>
        {workout.map((exercise, exerciseIndex) => {
          return (
            <div>
              <ExerciseCard exercise={exercise} index={exerciseIndex} key={exerciseIndex} />
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}