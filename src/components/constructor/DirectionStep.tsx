
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const DirectionStep = ({ tourData, setTourData }: Props) => {
  const directions = [
    {
      id: "europe",
      name: "Европа",
      description: "Классические города и культура",
      countries: ["Франция", "Италия", "Испания", "Германия"],
      emoji: "🏰"
    },
    {
      id: "asia",
      name: "Азия", 
      description: "Экзотика и древние традиции",
      countries: ["Япония", "Таиланд", "Вьетнам", "Индия"],
      emoji: "🏯"
    },
    {
      id: "tropical",
      name: "Тропики",
      description: "Пляжи и райские острова",
      countries: ["Мальдивы", "Сейшелы", "Бали", "Карибы"],
      emoji: "🏝️"
    },
    {
      id: "america",
      name: "Америка",
      description: "Современные мегаполисы и природа",
      countries: ["США", "Канада", "Бразилия", "Аргентина"],
      emoji: "🗽"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Выберите направление</h2>
      <p className="text-gray-600 mb-8">Куда хотели бы отправиться в путешествие?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {directions.map((direction) => (
          <Card 
            key={direction.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              tourData.direction === direction.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setTourData({ ...tourData, direction: direction.id })}
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{direction.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{direction.name}</h3>
                <p className="text-gray-600 mb-4">{direction.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {direction.countries.map((country, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DirectionStep;
