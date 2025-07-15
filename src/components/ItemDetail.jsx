import { Link } from "react-router-dom";

export function ItemDetail({ producto }) {
    if (!producto) {
        return <div>No hay producto para mostrar</div>;
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '20px' }}>
                <Link to="/" style={{ color: '#2c5aa0', textDecoration: 'none' }}>Inicio</Link>
                <span style={{ margin: '0 10px', color: '#666' }}>{'>'}</span>
                <Link to="/productos" style={{ color: '#2c5aa0', textDecoration: 'none' }}>Productos</Link>
                <span style={{ margin: '0 10px', color: '#666' }}>{'>'}</span>
                <span style={{ color: '#666' }}>{producto.title}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
                {/* Imágenes */}
                <div>
                    <img 
                        src={producto.thumbnail} 
                        alt={producto.title}
                        style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            border: '1px solid #ddd',
                            marginBottom: '20px'
                        }}
                    />
                    
                    {producto.images && producto.images.length > 0 && (
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                            gap: '10px'
                        }}>
                            {producto.images.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image} 
                                    alt={`${producto.title} ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        border: '1px solid #ddd',
                                        cursor: 'pointer'
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Información del producto */}
                <div>
                    <h1 style={{ 
                        fontSize: '32px', 
                        margin: '0 0 15px 0',
                        color: '#333',
                        fontWeight: 'bold'
                    }}>
                        {producto.title}
                    </h1>
                    
                    <p style={{ 
                        fontSize: '18px', 
                        color: '#666',
                        lineHeight: '1.6',
                        margin: '15px 0 25px 0'
                    }}>
                        {producto.description}
                    </p>

                    <div style={{ 
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '25px'
                    }}>
                        <p style={{ 
                            fontSize: '36px', 
                            fontWeight: 'bold', 
                            color: '#2c5aa0',
                            margin: '0 0 10px 0'
                        }}>
                            ${producto.price}
                        </p>
                        
                        {producto.discountPercentage > 0 && (
                            <p style={{ 
                                fontSize: '14px', 
                                color: '#28a745',
                                margin: '0'
                            }}>
                                {producto.discountPercentage}% de descuento
                            </p>
                        )}
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '30px'
                    }}>
                        <div>
                            <p style={{ fontSize: '16px', color: '#555', margin: '5px 0' }}>
                                <strong>Marca:</strong> {producto.brand}
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', margin: '5px 0' }}>
                                <strong>Categoría:</strong> {producto.category}
                            </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '16px', color: '#555', margin: '5px 0' }}>
                                <strong>Stock:</strong> {producto.stock} unidades
                            </p>
                            <p style={{ fontSize: '16px', color: '#555', margin: '5px 0' }}>
                                <strong>SKU:</strong> {producto.sku}
                            </p>
                        </div>
                    </div>

                    {/* Rating */}
                    {producto.rating && (
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px',
                            marginBottom: '30px'
                        }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                gap: '5px'
                            }}>
                                <span style={{ fontSize: '20px', color: '#ffc107' }}>★</span>
                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    {producto.rating}
                                </span>
                            </div>
                            <span style={{ fontSize: '14px', color: '#666' }}>
                                ({producto.reviews?.length || 0} reseñas)
                            </span>
                        </div>
                    )}

                    {/* Botones */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '15px',
                        marginBottom: '30px'
                    }}>
                        <Link to="/carrito">
                            <button style={{
                                backgroundColor: '#2c5aa0',
                                color: 'white',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>
                                Agregar al Carrito
                            </button>
                        </Link>
                        
                        <Link to={`/item/${producto.id}`}>
                            <button style={{
                                backgroundColor: 'transparent',
                                color: '#2c5aa0',
                                padding: '12px 24px',
                                border: '2px solid #2c5aa0',
                                borderRadius: '6px',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}>
                                Ver en tienda
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Información adicional */}
            <div style={{ 
                backgroundColor: '#f8f9fa',
                padding: '30px',
                borderRadius: '12px',
                marginTop: '40px'
            }}>
                <h3 style={{ 
                    fontSize: '24px', 
                    margin: '0 0 20px 0',
                    color: '#333'
                }}>
                    Información adicional
                </h3>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px'
                }}>
                    <div>
                        <h4 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#555' }}>
                            Dimensiones
                        </h4>
                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                            {producto.dimensions?.width} x {producto.dimensions?.height} x {producto.dimensions?.depth} cm
                        </p>
                    </div>
                    
                    <div>
                        <h4 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#555' }}>
                            Peso
                        </h4>
                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                            {producto.weight} g
                        </p>
                    </div>
                    
                    <div>
                        <h4 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#555' }}>
                            Garantía
                        </h4>
                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                            {producto.warrantyInformation}
                        </p>
                    </div>
                    
                    <div>
                        <h4 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#555' }}>
                            Envío
                        </h4>
                        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
                            {producto.shippingInformation}
                        </p>
                    </div>
                </div>
            </div>

            {/* Política de devolución */}
            {producto.returnPolicy && (
                <div style={{ 
                    backgroundColor: '#e7f3ff',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    border: '1px solid #b3d9ff'
                }}>
                    <h4 style={{ 
                        fontSize: '18px', 
                        margin: '0 0 10px 0',
                        color: '#2c5aa0'
                    }}>
                        Política de devolución
                    </h4>
                    <p style={{ 
                        margin: '0', 
                        fontSize: '14px', 
                        color: '#333'
                    }}>
                        {producto.returnPolicy}
                    </p>
                </div>
            )}
        </div>
    );
}