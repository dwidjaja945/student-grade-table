import React from 'react';

export function checkIfGradeIsNumber(grade) {
    if (isNaN(grade) || grade > 100) {
        return (
            <div className='invalidMessage'>Please enter a valid grade</div>
        )
    }
}

export function checkValidName(studentName) {
    let regex = studentName.match(/^[a-zA-Z]+[ ]{0,1}[a-zA-Z]*$/);

    if (regex === null && studentName !== "") {
        return (
            <div className="invalidMessage" >Please enter a valid name</div>
        )
    };
}