export default function Paragraph({ highlight, children }) {
  return (
    <p>
      <strong>{highlight}: </strong>
      {children}
    </p>
  );
}
