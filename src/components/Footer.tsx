export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 text-center text-gray-600 sm:px-6 lg:px-8 dark:text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Diogo Santos. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
