import React from 'react';

function Filter({ todosPerPage, setTodosPerPage }) {
    return (
        <form className="text-right pt-3 pb-2">
            <label>
                Items per page:
                <select 
                    className="ml-2" 
                    value={todosPerPage} 
                    onChange={e => setTodosPerPage(e.target.value)}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </label>
        </form>
    );
}

export default Filter;
