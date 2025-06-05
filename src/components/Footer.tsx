
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TURION</h3>
            <p className="text-gray-300">
              Создаем незабываемые путешествия по Байкалу
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Туры на Байкал</li>
              <li>КругоБайкалка</li>
              <li>Индивидуальные маршруты</li>
              <li>Групповые поездки</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Длительность</h4>
            <ul className="space-y-2 text-gray-300">
              <li>7 дней - минимальный</li>
              <li>14 дней - комфортный</li>
              <li>20 дней - расширенный</li>
              <li>30 дней - максимальный</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+7 (999) 123-45-67</li>
              <li>info@turion-baikal.ru</li>
              <li>Иркутск, ул. Байкальская, 15</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 TURION. Все права защищены.</p>
        </div>
      </div>
      
      {/* Кнопка связи с менеджером в правом нижнем углу */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
          <span>💬</span>
          <span>Связаться с менеджером</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
