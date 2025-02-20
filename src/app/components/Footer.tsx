export default function Footer() {
  return (
    <footer className="font-oxanium p-4 text-center" role="contentinfo">
      {/* Divider */}

      <div className="my-2 border-t border-yellow-200/50" />
      <div>Julien Augugliaro &copy; {new Date().getFullYear()}</div>
      <div className="text-sm text-yellow-200/50">All rights reserved</div>
    </footer>
  );
}
