
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section 
      className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop)',
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Откройте красоту Байкала
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Уникальные туры на озеро Байкал от 7 до 30 дней. 
          Создайте незабываемое путешествие по КругоБайкалке с TURION.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/constructor">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex items-center">
              Собрать свой тур
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏔️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">КругоБайкалка</h3>
            <p className="text-gray-200">7-30 дней приключений</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">4.9/5 рейтинг</h3>
            <p className="text-gray-200">От наших клиентов</p>
          </div>
          
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">100% гарантия</h3>
            <p className="text-gray-200">Возврат средств</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
