import React from 'react';
import AddTask from './AddTask';
import '../style.css';
import TaskList from './TaskList';

const App = () => {
    return (
        <div className="app">
            <AddTask/>
            <TaskList/>
        </div>
    );
}

export default App;