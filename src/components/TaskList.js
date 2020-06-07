///List of task is rendered using this component

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask, doneTask } from '../actions';
import TaskForm from './TaskForm';

const TaskList = props => {
    const [showEdit, setShowEdit] = useState(false);

    const onSubmit = (formValues,key,task) => {
        const newState = {...task,...formValues}
        props.editTask(key,newState)
        setShowEdit(false);
    }

    const renderList = () => {
        return props.todoList.map((task, key) => {
            return (
                <tr key={key}>
                    <th>{key+1}</th>
                    <th>{task.title}</th>
                    <th className={task.status === 'done' ? 'done' : 'undone'}>{task.status}</th>
                    <th>
                        <button className={task.status === 'done' ? 'disabled' : 'primary-button'} disabled={task.status === 'done' ? true :false} onClick={() => setShowEdit(true)}>Edit</button>
                        {task.status === 'done' ? null : <button  className="primary-button green" onClick={() => props.doneTask(task)}>Done</button>}
                    </th>
                    {showEdit ? <th><TaskForm onDismiss={() => setShowEdit(false)} onSubmit={onSubmit.bind(key)} id={key} task={task}initialValues={{ title: task.title }} type="Save Changes" /></th> : null}
                </tr>
            )
        });
    }
    if (props.todoList.length) {
        return (

            <div className="list-section">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task name</th>
                            <th>status</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList()}
                    </tbody>
                </table>
            </div>
        );
    }
    return null
}

const mapStateToProps = (state) => {
    return { todoList: state.todoList }
}

export default connect(mapStateToProps, { editTask, doneTask })(TaskList)