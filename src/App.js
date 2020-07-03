import React, { useState } from 'react';
import Hello from './components/Hello'
import { Route, Link } from 'react-router-dom'
import teachers from './teachers'
import Dog from './components/Dog'
import Dogs from './components/Dogs'

export default function App() {
  const [asked, setAsked] = useState(0)
  // const askedArray = useState(0)
  // const asked = askedArray[0]
  // const setAsked = askedArray[1]

  const title = <h1>Teachers</h1>
  
  const links = teachers.map(teacher => (
    <p key={teacher.name}>
      <Link to={`/teacher/${teacher.name}`}>{teacher.name}</Link>
    </p>
  ))

  return (
    <>
      <div>
        {title}
        {links}
      </div>

      <Route path='/dog/:breed' component={Dog} />
      <Route path='/dogs' component={Dogs} />
      <Route path='/teacher/:teacherName' component={Hello} />

      <button onClick={() => setAsked(asked + 1)}>Ask</button>
      {asked}
    </>
  );
}