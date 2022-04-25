import React from 'react';
import BookTerm from "../bookTerm/bookTerm";
import {Link} from "react-router-dom";

const books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>
                                    Name
                                </th>
                                <th scope={"col"}>
                                    Category
                                </th>
                                <th scope={"col"}>
                                    Author ID
                                </th>
                                <th scope={"col"}>
                                    Author Name
                                </th>
                                <th scope={"col"}>
                                    Author Surname
                                </th>
                                <th scope={"col"}>
                                    Available Copies
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BookTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add New Book</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default books;