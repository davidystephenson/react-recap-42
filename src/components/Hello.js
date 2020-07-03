import React from 'react'
import { useParams } from 'react-router-dom'
import teachers from '../teachers'

function Hello () {
  // const params = useParams()
  // const { teacher } = params
  const { teacherName } = useParams()

  const teacherData = teachers
    .find(teacher => teacher.name === teacherName)

  return <p>
    Hello {teacherData.name}!
    Will you tell me the answer's about {teacherData.good}?
  </p>
}

export default Hello