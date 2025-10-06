'use client';

interface Props {
  productId: number;
}

const reviewsMock = [
  { id: 1, user: 'Alice', comment: 'Great product!', rating: 5 },
  { id: 2, user: 'Bob', comment: 'Good value for money.', rating: 4 },
];

export default function ProductReviews({ productId }: Props) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviewsMock.map(r => (
        <div key={r.id} className="border p-2 rounded">
          <p className="font-semibold">{r.user}</p>
          <p>Rating: {r.rating} ⭐</p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}
