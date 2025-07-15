import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function ItemListConteiner() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data.products); 
                setLoading(false);
            })
            .catch(error => {
                console.log('Error al obtener productos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div>
            <h2>Nuestros Productos</h2>
            {productos.map(producto => (
                <div key={producto.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <p>Precio: ${producto.price}</p>
                    <img src={producto.thumbnail} alt={producto.title} width="100" />
                    <br />
                    <Link to={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
            ))}
        </div>
    );
}