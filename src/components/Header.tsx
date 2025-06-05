
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TURION
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tours" className="text-gray-600 hover:text-blue-600 transition-colors">
              Готовые туры
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Отзывы
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/constructor">
              <Button>Конструктор тура</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
