'use client';

interface Props {
  images: string[];
}

export default function ProductImages({ images }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <img key={i} src={img} alt={`product-${i}`} className="w-full h-48 object-cover rounded" />
      ))}
    </div>
  );
}
