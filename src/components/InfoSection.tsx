
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  const steps = [
    {
      number: "01",
      title: "Выбор тура",
      description: "Выберите подходящий тур или создайте свой в конструкторе"
    },
    {
      number: "02", 
      title: "Бронирование",
      description: "Заполните форму и внесите предоплату 5000 рублей"
    },
    {
      number: "03",
      title: "Подтверждение",
      description: "Получите подтверждение и детали вашего путешествия"
    },
    {
      number: "04",
      title: "Подготовка",
      description: "Подготовьте документы и получите список необходимых вещей"
    },
    {
      number: "05",
      title: "Встреча",
      description: "Встреча с гидом и начало незабываемого путешествия"
    },
    {
      number: "06",
      title: "Путешествие",
      description: "Наслаждайтесь красотами Байкала и КругоБайкалки"
    }
  ];

  return (
    <section id="info" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Как проходит бронирование</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговый процесс организации вашего путешествия на Байкал
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
