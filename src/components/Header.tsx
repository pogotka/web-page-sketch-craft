
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TravelConstructor
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link to="/constructor" className="text-gray-600 hover:text-blue-600 transition-colors">
              Конструктор туров
            </Link>
            <a href="#tours" className="text-gray-600 hover:text-blue-600 transition-colors">
              Готовые туры
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Отзывы
            </a>
            <a href="#info" className="text-gray-600 hover:text-blue-600 transition-colors">
              Информация
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline">Связаться с менеджером</Button>
            <Button>Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
