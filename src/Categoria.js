import React, { useState, useEffect } from "react";

function Categoria() {
    const [Categoria, setCategoria] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/categorias')
            .then(response => response.json())
            .then(data => setCategoria(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Lista de Categorías</h2>
            <table className="table table-striped table-bordered table-hover center mx-auto w-auto">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ backgroundColor: '#0d6efd', color: 'white', padding: '8px' }}>Id</th>
                        <th style={{ backgroundColor: '#0d6efd', color: 'white', padding: '8px' }}>Nombre</th>
                        <th style={{ backgroundColor: '#0d6efd', color: 'white', padding: '8px' }}>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {Categoria.map((categoria) => (
                        <tr key={categoria.id} style={{ textAlign: 'center' }}>
                            <td style={{ padding: '8px' }}>{categoria.id}</td>
                            <td style={{ padding: '8px' }}>{categoria.nombre}</td>
                            <td style={{ padding: '8px' }}>{categoria.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Categoria;