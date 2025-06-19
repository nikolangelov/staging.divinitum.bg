import { createResource } from 'solid-js';
import { For } from 'solid-js/web';

const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  return data.docs;
};

export default function Page() {
  const [products] = createResource(fetchProducts);

  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: 'flex', gap: '2rem', 'flex-wrap': 'wrap' }}>
        <For each={products()}>
          {product => (
            <div style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
              <img
                src={`http://localhost:3000${product.image?.url}`}
                alt={product.image?.alt}
                style={{ width: '100%', height: 'auto' }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
