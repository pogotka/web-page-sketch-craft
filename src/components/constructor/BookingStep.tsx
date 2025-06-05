
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const BookingStep = ({ tourData, setTourData }: Props) => {
  const calculateTotal = () => {
    const travelers = parseInt(tourData.contactData?.travelers || '1');
    const prepayment = 5000 * travelers;
    return prepayment;
  };

  const getTourName = () => {
    switch(tourData.duration) {
      case '7days': return 'Минимальный тур (7 дней)';
      case '14days': return 'Комфортный тур (14 дней)';
      case '20days': return 'Расширенный тур (20 дней)';
      case '30days': return 'Максимальный тур (30 дней)';
      default: return 'Тур не выбран';
    }
  };

  const getGroupType = () => {
    return tourData.groupType === 'individual' ? 'Индивидуальный' : 'Групповой';
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Бронирование</h2>
      <p className="text-gray-600 mb-8">Проверьте детали вашего заказа перед оплатой</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Детали тура</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Тур:</span>
                <span className="font-medium">{getTourName()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Тип:</span>
                <span className="font-medium">{getGroupType()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Путешественников:</span>
                <span className="font-medium">{tourData.contactData?.travelers || 1}</span>
              </div>
              
              {tourData.additionalServices?.length > 0 && (
                <div>
                  <span className="text-gray-600">Дополнительные услуги:</span>
                  <ul className="text-sm text-gray-500 mt-1">
                    {tourData.additionalServices.map((service: string) => (
                      <li key={service}>• {service}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Контактные данные</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Имя:</span>
                <span className="font-medium">{tourData.contactData?.name || 'Не указано'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{tourData.contactData?.email || 'Не указан'}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Телефон:</span>
                <span className="font-medium">{tourData.contactData?.phone || 'Не указан'}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Предоплата</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              {calculateTotal().toLocaleString()} ₽
            </div>
            <p className="text-gray-600 mb-6">
              Предоплата составляет 5000 рублей с человека
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingStep;
