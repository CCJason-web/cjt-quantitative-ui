import { useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchbarDropdown (props){
    const { options, onInputChange } = props;
    const ulRef = useRef();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });
        document.addEventListener('click', (event) => {
            ulRef.current.style.display = 'none';
        });
    }, []);
    return (
        <div className="search-bar-dropdown">
            <input
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search"
                ref={inputRef}
                onChange={onInputChange}
            />
            <ul id="results" className="dropdown-menu list-group popout" ref={ulRef}>
                {options.map((option, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            onClick={(e) => {
                                inputRef.current.value = option;
                            }}
                            className="dropdown-item list-group-item list-group-item-action" 
                        >
                            {option}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchbarDropdown;