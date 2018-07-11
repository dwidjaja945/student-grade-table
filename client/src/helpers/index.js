import React from 'react';

export function checkIfGradeIsNumber(grade) {

    debugger;
    if ( grade <= 100 && grade >= 0 && !isNaN(grade) && grade[0] != '-' && !(grade.length > 6) || grade == "" ) {
        return true;
    };

    return false;

    // if( grade > 100 || grade < 0 || isNaN(grade) || grade[0] == '-' ) {
    //     return false;
    // };
    // return true;
}

export function checkValidName(studentName) {
    let regex = studentName.match(/^[a-zA-Z]+[ ]{0,1}[a-zA-Z]*$/);

    if (regex === null && studentName !== "") {
        return false;
        // return (
        //     <div className="invalidMessage" >Please enter a valid name</div>
        // )
    };

    return true;
}