import React, { useState, useEffect } from 'react';
import './Book.css';

function Book({recipe}){
    return (
        <div className='book'>
            <div className="pages">
                <div className="page left">
                    <div className="border"></div>
                </div>
                <div className="page right">
                    <div className="border"></div>
                </div>
            </div>
        </div>

    )
}

export default Book;
 