import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Table } from "reactstrap";
import Profile_Modal from "./User/profileModal";
import { Eye } from "lucide-react";

const users = [
    { name: "Krishna", age: 23, city: "surat" },
    { name: "Govind", age: 22, city: "surat" },
    { name: "Om", age: 20, city: "surat" },
];

export default function Contact() {
    const [modal, setModal] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const toggle = () => setModal(!modal);

    const showData = (e) => {
        toggle();
        setSearchParams(e);
    };

    return (
        <>
            <Profile_Modal toggle={toggle} modal={modal} />
            <Table className="me-5 ms-5 w-50 text-center" striped>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map?.((e, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{e?.name}</td>
                                <td>{e?.age}</td>
                                <td>{e?.city}</td>
                                <td><Eye onClick={() => showData(e)} role="button" color="#9ba0a8" /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}