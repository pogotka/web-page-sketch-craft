
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TURION
          </Link>
          <div className="flex-1 flex justify-end">
            <Link to="/constructor">
              <Button variant="outline" size="sm">
                Конструктор тура
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
