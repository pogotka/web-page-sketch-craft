
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const PaymentStep = ({ tourData, setTourData }: Props) => {
  const calculatePrepayment = () => {
    const travelers = parseInt(tourData.contactData?.travelers || '1');
    return 5000 * travelers;
  };
  
  // Приблизительная стоимость тура
  const calculateEstimatedTotal = () => {
    // Базовая стоимость в зависимости от выбранной длительности
    let basePrice = 0;
    switch(tourData.duration) {
      case '7days': 
        basePrice = 45000;
        break;
      case '14days': 
        basePrice = 75000;
        break;
      case '20days': 
        basePrice = 95000;
        break;
      case '30days': 
        basePrice = 135000;
        break;
      default: 
        basePrice = 75000;
    }
    
    // Дополнительная стоимость для индивидуального тура
    if (tourData.groupType === 'individual') {
      basePrice *= 1.3;
    }
    
    // Умножаем на количество человек
    const travelers = parseInt(tourData.contactData?.travelers || '1');
    return Math.round(basePrice * travelers);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Оплата</h2>
      <p className="text-gray-600 mb-8">Внесите предоплату для бронирования тура</p>
      
      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Способы оплаты</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💳</span>
                  <div>
                    <p className="font-medium">Банковская карта</p>
                    <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
                  </div>
                </div>
                <input type="radio" name="payment" defaultChecked />
              </div>
            </div>
            
            <div className="p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏦</span>
                  <div>
                    <p className="font-medium">Банковский перевод</p>
                    <p className="text-sm text-gray-600">Безналичный расчет</p>
                  </div>
                </div>
                <input type="radio" name="payment" />
              </div>
            </div>
            
            <div className="p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <p className="font-medium">Электронные деньги</p>
                    <p className="text-sm text-gray-600">Qiwi, Яндекс.Деньги</p>
                  </div>
                </div>
                <input type="radio" name="payment" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Итоговая стоимость</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Приблизительная стоимость тура:</span>
                <span className="font-medium">{calculateEstimatedTotal().toLocaleString()} ₽</span>
              </div>
              
              <div className="flex justify-between text-lg">
                <span>К оплате (предоплата):</span>
                <span className="font-bold text-blue-600">{calculatePrepayment().toLocaleString()} ₽</span>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg space-y-2 text-sm">
                <p><strong>Что входит в стоимость:</strong></p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Проживание в отеле</li>
                  <li>Питание согласно выбранному пакету</li>
                  <li>Трансферы и экскурсии</li>
                  <li>Страховка</li>
                  <li>Услуги гида</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg text-sm">
                <p className="text-green-800">
                  <strong>Гарантия возврата:</strong> Возможность бесплатной отмены за 14 дней до поездки.
                </p>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Оплатить предоплату {calculatePrepayment().toLocaleString()} ₽
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с условиями оферты и политикой конфиденциальности
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentStep;
