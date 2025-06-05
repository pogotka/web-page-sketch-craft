
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TURION</h3>
            <p className="text-gray-300">
              Создаем незабываемые путешествия по Байкалу
            </p>
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
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">&copy; 2024 TURION. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Публичная оферта
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Реквизиты
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Кнопка связи с менеджером в правом нижнем углу */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
