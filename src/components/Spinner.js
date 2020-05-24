import React from 'react';

function Spinner() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h4 className="mb-4">Loading todos...</h4>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading todos...</span>
            </div>
        </div>
    );
}

export default Spinner;
