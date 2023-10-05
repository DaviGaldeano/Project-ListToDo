const Filter = () => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select>
                        <option value="All">Todos</option>
                        <option value="Completed">Concluídos</option>
                        <option value="Incomplete">Não Concluídos</option>
                    </select>
                </div>
                <div>
                    <button>Ascendente</button>
                    <button>Descendente</button>
                </div>
            </div>
        </div>
    );
}

export default Filter