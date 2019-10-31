import React from "react";

const FizzBuzzTable = props => {

    let resultList = props.results;

    if (resultList) {

        // map out the number array/objects into a Table Row and pass to the table.
        let results = resultList.map(res => (<tr className={res.class} key={res.number}><td>{res.number}</td><td>{res.result}</td></tr>));

        return (
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Result</th>
                </tr>
                </thead>

                <tbody>
                    {results}
                </tbody>
            </table>
        );
    }
}

export default FizzBuzzTable;