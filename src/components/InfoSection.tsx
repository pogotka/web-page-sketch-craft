
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section id="info" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Полезная информация</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все, что нужно знать о путешествиях и планировании туров
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">📋</span>
                План действий после брони тура
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Подтверждение бронирования (в течение 24 часов)</li>
                <li>• Подготовка документов и виз</li>
                <li>• Получение туристической страховки</li>
                <li>• Инструктаж и рекомендации</li>
                <li>• Поддержка во время путешествия</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">ℹ️</span>
                Информация о турах
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800">Что включено:</h4>
                  <p>Проживание, питание, трансферы, экскурсии, страховка</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Дополнительно:</h4>
                  <p>Авиабилеты, виза, личные расходы, доп. экскурсии</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Отмена:</h4>
                  <p>Бесплатная отмена за 14 дней до поездки</p>
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
