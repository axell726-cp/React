import React, { useState, useEffect } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsuarios(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Lista de Usuarios</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark text-center">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Usuarios;