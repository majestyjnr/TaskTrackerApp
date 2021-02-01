import React from 'react'

const Tasks = () => {
    const tasks =  [
        {
            id : 1,
            theTask : 'Go to Wesley Grammar School',
            day: "1st February at 7:00 am",
            reminder: true
        },
        {
            id : 2,
            theTask : 'Start learning ReactJs',
            day: "1st February at 8:00 am",
            reminder: true
        },
        {
            id : 3,
            theTask : 'Go to youth fellowship meeting',
            day: "1st February at 7:30 pm",
            reminder: true
        },
        {
            id : 4,
            theTask : 'Go to Early Foundation Publications',
            day: "6th February at 7:00 am",
            reminder: true
        },
        {
            id : 5,
            theTask : 'Celebrate birthday',
            day: "22nd February at 7:00 am",
            reminder: true
        },
    ]
    return (
        <>
            {tasks.map((task)=>(
                <h4 key={task.id}>{task.theTask}</h4>
            ))}
        </>
    )
}

export default Tasks
