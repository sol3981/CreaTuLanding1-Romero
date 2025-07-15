import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailConteiner() {
    const { id } = useParams(); 
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productId = id || 1;
        
        fetch(`https://dummyjson.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                setProducto(data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error al obtener producto:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Cargando detalles del producto...</div>;
    }

    if (!producto) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>Producto no encontrado</div>;
    }

    return (
        <ItemDetail producto={producto} />
    );
}