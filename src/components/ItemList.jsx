import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function ItemList() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(data => {
          console.log(data); 
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
      <h2>Smartphones</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {productos.map(producto => (
        <div key={producto.id} className='contProductos'>

         <img src={producto.thumbnail} 
         alt={producto.title} 
       
        />
        <h3 style={{ margin: '10px 0', fontSize: '18px' }}>
          {producto.title}
        </h3>
        <p className='textProductos'>
          {producto.description}
        </p>
        <div style={{ marginTop: '10px' }}>
          <p className='subTextProductos'>
            ${producto.price}
          </p>
        </div>
      <Link to={`/item/${producto.id}`}> Ver Más</Link>
    </div>
    ))}
    </div>
   </div>
    );
}








