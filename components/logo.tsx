export default function Logo() {
  return (
    <h1
      className={
        "bg-gradient-to-b from-gray-500 via-gray-400 to-gray-600 bg-clip-text text-transparent text-3xl tracking-normal font-semibold pointer-events-none"
      }
    >
      Learn
      <span
        className={
          "bg-gradient-to-r from-green-500 via-green-600 to-green-800 bg-clip-text text-transparent"
        }
      >
        Up
      </span>
    </h1>
  );
}
