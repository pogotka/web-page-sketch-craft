
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const PersonalDataStep = ({ tourData, setTourData }: Props) => {
  const additionalServices = [
    { id: "transfer", name: "Трансфер из аэропорта", price: "3 000 ₽" },
    { id: "insurance", name: "Расширенная страховка", price: "5 000 ₽" },
    { id: "excursions", name: "Дополнительные экскурсии", price: "15 000 ₽" },
    { id: "meals", name: "Улучшенное питание", price: "8 000 ₽" }
  ];

  const updatePersonalData = (field: string, value: string) => {
    setTourData({
      ...tourData,
      personalData: {
        ...tourData.personalData,
        [field]: value
      }
    });
  };

  const toggleService = (serviceId: string) => {
    const currentServices = tourData.additionalServices || [];
    const newServices = currentServices.includes(serviceId)
      ? currentServices.filter((id: string) => id !== serviceId)
      : [...currentServices, serviceId];
    
    setTourData({
      ...tourData,
      additionalServices: newServices
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Персональные данные</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input 
                  id="name"
                  placeholder="Введите ваше имя"
                  value={tourData.personalData?.name || ''}
                  onChange={(e) => updatePersonalData('name', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={tourData.personalData?.email || ''}
                  onChange={(e) => updatePersonalData('email', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone"
                  placeholder="+7 (999) 123-45-67"
                  value={tourData.personalData?.phone || ''}
                  onChange={(e) => updatePersonalData('phone', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="travelers">Количество путешественников</Label>
                <Input 
                  id="travelers"
                  type="number"
                  min="1"
                  placeholder="1"
                  value={tourData.personalData?.travelers || ''}
                  onChange={(e) => updatePersonalData('travelers', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Дополнительные услуги</h3>
            
            <div className="space-y-3">
              {additionalServices.map((service) => (
                <div 
                  key={service.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all duration-300 ${
                    tourData.additionalServices?.includes(service.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-gray-600">{service.price}</p>
                    </div>
                    <div className={`w-5 h-5 border-2 rounded ${
                      tourData.additionalServices?.includes(service.id)
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {tourData.additionalServices?.includes(service.id) && (
                        <span className="text-white text-xs block text-center">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalDataStep;
