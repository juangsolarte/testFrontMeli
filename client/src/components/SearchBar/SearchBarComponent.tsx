import React, { useEffect, useState } from 'react';
import LogoComponent from '../Logo/LogoComponent';
import './SearchBar.scss';
import imgSearch from './ic_Search.png';
import { useHistory } from 'react-router-dom';

const SearchBarComponent: React.FC = () => {

    const [search, setSearch] = useState('');
    const history = useHistory();

    useEffect(() => {
    }, [search]);

    function handleInput(event) {
        const target = event.target;
        setSearch(target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        if (search) {
            history.push(`/items?search=${search}`);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="topbar">
            <LogoComponent />
                <input className="searchBar"
                    value={search}
                    id="txtSearch"
                    type="text"
                    autoComplete="off"
                    placeholder='Nunca dejes de buscar'
                    onChange={handleInput}
                />
                <button className="inputSearchBar" type='submit' >
                    <img src={imgSearch} alt='imgSearch'/>
                </button>
            </div>
        </form>
    );
};

export default SearchBarComponent;