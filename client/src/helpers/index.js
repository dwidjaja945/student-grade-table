import React from 'react';

export function checkIfGradeIsNumber(grade) {
    if (isNaN(grade) || grade > 100) {
        return false;
        // return (
        //     <div className='invalidMessage'>Please enter a valid grade</div>
        // )
    } else {
        return true;
    }
}

export function checkValidName(studentName) {
    let regex = studentName.match(/^[a-zA-Z]+[ ]{0,1}[a-zA-Z]*$/);

    if (regex === null && studentName !== "") {
        return false;
        // return (
        //     <div className="invalidMessage" >Please enter a valid name</div>
        // )
    } else {
        return true;
    }
}