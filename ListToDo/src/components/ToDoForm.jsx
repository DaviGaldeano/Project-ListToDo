import { useState } from "react";
import PropTypes from 'prop-types';

const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value && category) {
            addToDo(value, category);
            setValue("");
            setCategory("");
        }
    }
    return (
        <div className="toDo-form">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Digite o nome da tarefa"
                />
                <select
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    );   
}

ToDoForm.propTypes = {
    addToDo: PropTypes.func.isRequired,
}

export default ToDoForm;