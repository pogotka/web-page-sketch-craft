
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const BookingConfirmationStep = ({ tourData, setTourData }: Props) => {
  const getSeasonName = (season: string) => {
    const seasons: any = {
      spring: "Весна",
      summer: "Лето", 
      autumn: "Осень",
      winter: "Зима"
    };
    return seasons[season] || season;
  };

  const getTourTypeName = (type: string) => {
    return type === "individual" ? "Индивидуальный" : "Групповой";
  };

  const getDirectionName = (direction: string) => {
    const directions: any = {
      europe: "Европа",
      asia: "Азия",
      tropical: "Тропики", 
      america: "Америка"
    };
    return directions[direction] || direction;
  };

  const getPackageName = (pkg: string) => {
    const packages: any = {
      standard: "Standard",
      max: "Max",
      ultimate: "Ultimate"
    };
    return packages[pkg] || pkg;
  };

  const additionalServices = [
    { id: "transfer", name: "Трансфер из аэропорта", price: 3000 },
    { id: "insurance", name: "Расширенная страховка", price: 5000 },
    { id: "excursions", name: "Дополнительные экскурсии", price: 15000 },
    { id: "meals", name: "Улучшенное питание", price: 8000 }
  ];

  const getSelectedServices = () => {
    if (!tourData.additionalServices) return [];
    return additionalServices.filter(service => 
      tourData.additionalServices.includes(service.id)
    );
  };

  const calculateTotal = () => {
    const basePrice = 75000; // примерная базовая цена
    const selectedServices = getSelectedServices();
    const servicesTotal = selectedServices.reduce((sum, service) => sum + service.price, 0);
    return basePrice + servicesTotal;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Подтверждение бронирования</h2>
      <p className="text-gray-600 mb-8">Проверьте данные вашего тура перед оплатой</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Детали тура</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Время года:</span>
                <span className="font-medium">{getSeasonName(tourData.timeOfYear)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Тип тура:</span>
                <span className="font-medium">{getTourTypeName(tourData.tourType)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Направление:</span>
                <span className="font-medium">{getDirectionName(tourData.direction)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Пакет:</span>
                <span className="font-medium">{getPackageName(tourData.package)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Путешественников:</span>
                <span className="font-medium">{tourData.personalData?.travelers || 1}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактные данные</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Имя:</span>
                <span className="font-medium">{tourData.personalData?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{tourData.personalData?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Телефон:</span>
                <span className="font-medium">{tourData.personalData?.phone}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Стоимость</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Базовая стоимость:</span>
                <span>75 000 ₽</span>
              </div>
              
              {getSelectedServices().length > 0 && (
                <>
                  <div className="border-t pt-3">
                    <p className="font-medium mb-2">Дополнительные услуги:</p>
                    {getSelectedServices().map(service => (
                      <div key={service.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{service.name}</span>
                        <span>{service.price.toLocaleString()} ₽</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Итого:</span>
                  <span className="text-blue-600">{calculateTotal().toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Внимание:</strong> После оплаты с вами свяжется менеджер для уточнения деталей тура и начала оформления документов.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmationStep;
