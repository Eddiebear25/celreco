import Link from 'next/link';

const ProductPage = () => {
  const products = [
    { id: 1, name: 'Sigma R2625', description: 'L-glutamine 100ml', price: '$120' },
    { id: 2, name: 'Thermo A1234', description: 'FBS 500ml', price: '$250' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📦 Product List</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: '1rem' }}>
            <strong>{p.name}</strong> — {p.description} — {p.price}
          </li>
        ))}
      </ul>
      <Link href="/">⬅ Back to Home</Link>
    </div>
  );
};

export default ProductPage;
