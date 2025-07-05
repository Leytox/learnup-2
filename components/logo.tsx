export default function Logo() {
  return (
    <h1
      className={
        "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 dark:from-gray-200 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent text-3xl tracking-normal font-semibold pointer-events-none"
      }
    >
      Learn
      <span
        className={
          "bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-green-400 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent"
        }
      >
        Up
      </span>
    </h1>
  );
}
