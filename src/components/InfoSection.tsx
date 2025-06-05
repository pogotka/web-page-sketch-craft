
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Информация о турах</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все, что нужно знать о путешествии на Байкал
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🚂</span>
                КругоБайкалка - что это?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Уникальная железная дорога вокруг озера Байкал</li>
                <li>• Исторический маршрут Транссибирской магистрали</li>
                <li>• Потрясающие виды на озеро и горы</li>
                <li>• Остановки в живописных бухтах</li>
                <li>• Знакомство с местной культурой</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">ℹ️</span>
                Что включено в туры
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800">Включено:</h4>
                  <p>Проживание, питание, трансферы, экскурсии, гид</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Дополнительно:</h4>
                  <p>Билеты до Иркутска, личные расходы, сувениры</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Отмена:</h4>
                  <p>Бесплатная отмена за 10 дней до поездки</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
