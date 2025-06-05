
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const DurationStep = ({ tourData, setTourData }: Props) => {
  const durations = [
    {
      id: "7days",
      name: "Минимальный тур",
      duration: "7 дней",
      description: "Знакомство с основными достопримечательностями",
      price: "от 35 000 ₽",
      emoji: "🏔️"
    },
    {
      id: "14days",
      name: "Комфортный тур", 
      description: "Полноценное путешествие с комфортным размещением",
      duration: "14 дней",
      price: "от 65 000 ₽",
      emoji: "🌊"
    },
    {
      id: "20days",
      name: "Расширенный тур",
      description: "Глубокое погружение в природу Байкала",
      duration: "20 дней", 
      price: "от 95 000 ₽",
      emoji: "🏞️"
    },
    {
      id: "30days",
      name: "Максимальный тур",
      description: "Полное исследование КругоБайкалки",
      duration: "30 дней",
      price: "от 140 000 ₽", 
      emoji: "⛰️"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Длительность</h2>
      <p className="text-gray-600 mb-8">Выберите продолжительность вашего путешествия по Байкалу</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {durations.map((duration) => (
          <Card 
            key={duration.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              tourData.duration === duration.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setTourData({ ...tourData, duration: duration.id })}
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{duration.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{duration.name}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{duration.duration}</p>
                <p className="text-gray-600 mb-3">{duration.description}</p>
                <div className="text-2xl font-bold text-green-600">{duration.price}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DurationStep;
