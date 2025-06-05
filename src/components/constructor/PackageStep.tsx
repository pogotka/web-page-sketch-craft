
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const PackageStep = ({ tourData, setTourData }: Props) => {
  const packages = [
    {
      id: "standard",
      name: "Standard",
      price: "от 50 000 ₽",
      description: "Базовый комфорт",
      features: [
        "Отель 3-4 звезды",
        "Завтраки включены", 
        "Групповые экскурсии",
        "Трансферы",
        "Страховка"
      ],
      color: "green"
    },
    {
      id: "max",
      name: "Max",
      price: "от 100 000 ₽", 
      description: "Повышенный комфорт",
      features: [
        "Отель 4-5 звезд",
        "Полупансион",
        "Индивидуальные экскурсии",
        "VIP трансферы",
        "Расширенная страховка",
        "Персональный менеджер"
      ],
      color: "blue"
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "от 200 000 ₽",
      description: "Максимальная роскошь",
      features: [
        "Отель 5 звезд deluxe",
        "Полный пансион",
        "Приватные экскурсии с гидом",
        "Личный водитель",
        "VIP страховка",
        "Консьерж сервис 24/7",
        "Эксклюзивные места"
      ],
      color: "purple"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Выберите пакет услуг</h2>
      <p className="text-gray-600 mb-8">Выберите уровень комфорта для вашего путешествия</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card 
            key={pkg.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              tourData.package === pkg.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            } ${pkg.id === 'max' ? 'border-blue-500 border-2' : ''}`}
            onClick={() => setTourData({ ...tourData, package: pkg.id })}
          >
            <CardContent className="p-6">
              {pkg.id === 'max' && (
                <div className="text-center mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-3">{pkg.description}</p>
                <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
              </div>
              
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PackageStep;
