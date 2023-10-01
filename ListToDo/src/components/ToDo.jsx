import PropTypes from 'prop-types';

const Todo = ({ toDo, deleteToDo }) => {
    return (
        <div className='toDo'>
            <div className='toDo-text'>
                <p>{toDo.text}</p>
                <p className='category'>{toDo.category}</p>
            </div>
            <div>
                <button className='complete'>Completar</button>
                <button className='remove' onClick={() => deleteToDo(toDo.id)}>X</button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    toDo: PropTypes.object.isRequired,
    deleteToDo: PropTypes.func.isRequired
};

export default Todo;
