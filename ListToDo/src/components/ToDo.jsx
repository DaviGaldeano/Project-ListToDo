import PropTypes from 'prop-types';

const Todo = ({ toDo, deleteToDo, completeToDo }) => {
    return (
        <div className='toDo' style={{textDecoration: toDo.isCompleted ? 'line-through' : ''}}>
            <div className='toDo-text'>
                <p>{toDo.text}</p>
                <p className='category'>{toDo.category}</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeToDo(toDo.id)}>Completar</button>
                <button className='remove' onClick={() => deleteToDo(toDo.id)}>X</button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    toDo: PropTypes.object.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    completeToDo: PropTypes.func.isRequired
};

export default Todo;
