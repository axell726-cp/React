import React, { useState, useEffect } from "react";

function Libro() {
    const [Libro, setLibro] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/libros')
            .then(response => response.json())
            .then(data => setLibro(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Lista de Libros</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark center">
                    <tr>
                        <th className="bg-primary text-white">Título</th>
                        <th className="bg-primary text-white">Páginas</th>
                        <th className="bg-primary text-white">Edición</th>
                        <th className="bg-primary text-white">Editorial</th>
                        <th className="bg-primary text-white">Sección</th>
                    </tr>
                </thead>
                <tbody>
                    {Libro.map((libro) => (
                        <tr key={libro.id} className="text-center">
                            <td>{libro.titulo}</td>
                            <td>{libro.paginas}</td>
                            <td>{libro.edicion}</td>
                            <td>{libro.editorial.nombre}</td>
                            <td>{libro.seccion.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default Libro;