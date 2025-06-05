
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const TimeOfYearStep = ({ tourData, setTourData }: Props) => {
  const seasons = [
    { id: "spring", name: "Весна", description: "Март - Май", emoji: "🌸", details: "Ледоход, первая зелень" },
    { id: "summer", name: "Лето", description: "Июнь - Август", emoji: "☀️", details: "Теплая погода, купание" },
    { id: "autumn", name: "Осень", description: "Сентябрь - Ноябрь", emoji: "🍂", details: "Золотая тайга, прозрачная вода" },
    { id: "winter", name: "Зима", description: "Декабрь - Февраль", emoji: "❄️", details: "Ледяной Байкал, зимние развлечения" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Выберите время года для поездки на Байкал</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {seasons.map((season) => (
          <Card 
            key={season.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              tourData.timeOfYear === season.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
            }`}
            onClick={() => setTourData({ ...tourData, timeOfYear: season.id })}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">{season.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{season.name}</h3>
              <p className="text-gray-600 mb-2">{season.description}</p>
              <p className="text-sm text-gray-500">{season.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TimeOfYearStep;
