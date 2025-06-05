
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const GroupStep = ({ tourData, setTourData }: Props) => {
  const groupOptions = [
    {
      id: "individual",
      name: "Индивидуальный тур",
      description: "Только для вас или вашей компании",
      features: ["Персональный гид", "Гибкий график", "Эксклюзивные места"],
      emoji: "👤"
    },
    {
      id: "group",
      name: "Групповой тур", 
      description: "В компании других путешественников",
      features: ["Экономия бюджета", "Новые знакомства", "Готовая программа"],
      emoji: "👥"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Группа</h2>
      <p className="text-gray-600 mb-8">Выберите формат путешествия, который вам больше подходит</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groupOptions.map((option) => (
          <Card 
            key={option.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              tourData.groupType === option.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setTourData({ ...tourData, groupType: option.id })}
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{option.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
              </div>
              
              <ul className="space-y-2">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
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

export default GroupStep;
