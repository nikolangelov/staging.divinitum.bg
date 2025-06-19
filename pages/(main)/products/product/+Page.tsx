import { createSignal, onMount } from "solid-js";

// pages/products.page.tsx
type Product = {
  name: string;
  price: number;
  // add other fields as needed
};

export default function Page() {
  const [products, setProducts] = createSignal<Product[]>([]);

  onMount(async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const data = await res.json();
    setProducts(data.docs); // Payload returns { docs: [...] }
  });

    function addToCart(product: any): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products().map(product => (
          <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
