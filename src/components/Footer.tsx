
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelConstructor</h3>
            <p className="text-gray-300">
              Создаем незабываемые путешествия по всему миру
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Конструктор туров</li>
              <li>Готовые туры</li>
              <li>Визовая поддержка</li>
              <li>Страхование</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Направления</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Европа</li>
              <li>Азия</li>
              <li>Америка</li>
              <li>Африка</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+7 (999) 123-45-67</li>
              <li>info@travelconstructor.ru</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 TravelConstructor. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
