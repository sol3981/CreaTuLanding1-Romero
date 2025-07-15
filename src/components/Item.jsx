import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

export function Item() {
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
        return <div>Cargando producto...</div>;
    }

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img 
                        src={producto.thumbnail} 
                        alt={producto.title}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            border: '1px solid #ddd'
                        }}
                    />
                    
                    
                    {producto.images && producto.images.length > 0 && (
                        <div style={{ 
                            display: 'flex', 
                            gap: '10px', 
                            marginTop: '15px',
                            overflowX: 'auto'
                        }}>
                            {producto.images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`${producto.title} ${index + 1}`}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'cover',
                                        borderRadius: '4px',
                                        border: '1px solid #ddd',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h1 style={{ 
                        fontSize: '28px', 
                        margin: '0 0 10px 0',
                        color: '#333'
                    }}>
                        {producto.title}
                    </h1>
                    
                    <p style={{ 
                        fontSize: '16px', 
                        color: '#666',
                        lineHeight: '1.5',
                        margin: '10px 0'
                    }}>
                        {producto.description}
                    </p>

                    <div style={{ margin: '20px 0' }}>
                        <p style={{ 
                            fontSize: '32px', 
                            fontWeight: 'bold', 
                            color: '#2c5aa0',
                            margin: '10px 0'
                        }}>
                            ${producto.price}
                        </p>
                        
                        <div style={{ 
                            display: 'flex', 
                            gap: '20px',
                            margin: '15px 0'
                        }}>
                            <p style={{ fontSize: '16px', color: '#555' }}>
                                <strong>Marca:</strong> {producto.brand}
                            </p>
                            <p style={{ fontSize: '16px', color: '#555' }}>
                                <strong>Categoría:</strong> {producto.category}
                            </p>
                        </div>

                                              
                    </div>

                     <Link to ="/carrito"><button>Agregar al Carrito</button></Link>
                     <Link to ="/detalles/:id"><button>Ver detalles</button></Link>

                     
                       
                </div>
            </div>
        </div>
    );
}
