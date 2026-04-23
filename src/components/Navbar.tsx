import Link from 'next/link';
import { FileText, GitCompare, MessageSquare, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        TestVocacional
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <Link href="/test" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <FileText size={18} />
          <span>Test Vocacional</span>
        </Link>

        <Link href="/comparador" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <GitCompare size={18} />
          <span>Comparador</span>
        </Link>

        <Link href="/resenas" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <MessageSquare size={18} />
          <span>Reseñas</span>
        </Link>

        {/* Botón Resaltado */}
        <Link 
          href="/opinion" 
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          <Star size={18} fill="currentColor" />
          <span className="font-semibold">Deja tu opinión</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;