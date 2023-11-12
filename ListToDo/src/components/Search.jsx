import PropTypes from 'prop-types';

const Search = ({search, setSeacrh}) => {
    return (
        <div className="search">
            <h2>Pesquisar</h2>
            <input
                type="text"
                placeholder="Digite para pesquisar"
                value={search}
                onChange={(e) => setSeacrh(e.target.value)}
            />
        </div>
    );
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSeacrh: PropTypes.func.isRequired
}

export default Search