import React from 'react'
import Person from './Person'

export default function NameList() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 20,
            skill: 'Vue'
        }
    ]

    // const personList = persons.map(person => (
    //     <Person key = {person.id} person = {person }></Person>
    // ))

    // here we are displaying index as key value
    const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)

  return (
    // <div>{personList}</div>
    <div>{nameList}</div>
  )
}

// 1. KEY PROPERTY AS USED UN LINE 27 IS A SPECIAL ATTRIBUTE WHICH IS USED WHEN
// CREATING A LIST OF ELEMENTS
// 2. WE USE INDEX AS A KEY WHEN:
// a. the items in the list do not have a unique id
// b. the list is a static list and will not change
// c. the list will never be reordered or filtered