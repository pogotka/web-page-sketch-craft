
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const AdditionalServicesStep = ({ tourData, setTourData }: Props) => {
  const additionalServices = [
    { id: "transfer", name: "Трансфер из аэропорта", price: "3 000 ₽" },
    { id: "insurance", name: "Расширенная страховка", price: "5 000 ₽" },
    { id: "excursions", name: "Дополнительные экскурсии", price: "15 000 ₽" },
    { id: "meals", name: "Улучшенное питание", price: "8 000 ₽" }
  ];

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
      <h2 className="text-2xl font-bold mb-6">Дополнительные услуги</h2>
      <p className="text-gray-600 mb-8">Выберите дополнительные услуги для вашего путешествия</p>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-3">
            {additionalServices.map((service) => (
              <div 
                key={service.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
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
                  <div className={`w-6 h-6 border-2 rounded ${
                    tourData.additionalServices?.includes(service.id)
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {tourData.additionalServices?.includes(service.id) && (
                      <span className="text-white text-xs block text-center leading-5">✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdditionalServicesStep;
