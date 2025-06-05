
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Создайте тур своей мечты
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Уникальный конструктор туров поможет вам спланировать идеальное путешествие. 
          Выберите направление, время и создайте незабываемые впечатления.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/constructor">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex items-center">
              Собрать свой тур
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Просмотреть готовые туры
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">200+ направлений</h3>
            <p className="text-gray-600">По всему миру</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">4.9/5 рейтинг</h3>
            <p className="text-gray-600">От наших клиентов</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">100% гарантия</h3>
            <p className="text-gray-600">Возврат средств</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
