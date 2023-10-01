import PropTypes from 'prop-types';

Todo.propTypes = {
    toDo: PropTypes.shape({
        text: PropTypes.string,
        category: PropTypes.string,
    }).isRequired,
};
const Todo = ({ toDo }) => {
    return (
        <div className='toDo'>
            <div className='toDo-text'>
                <p>{toDo.text}</p>
                <p className='category'>{(toDo.category)}</p>
            </div>
        <div>
            <button className='complete'>Completar</button>
            <button className='remove'>X</button>
        </div>
      </div>
    )
}

export default Todo;