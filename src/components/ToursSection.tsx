
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "Минимальный тур",
      description: "7 дней КругоБайкалки с основными достопримечательностями",
      price: "от 35 000 ₽",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      type: "Минимальный",
      duration: "7 дней"
    },
    {
      id: 2,
      title: "Комфортный тур",
      description: "14 дней на Байкале с комфортным размещением",
      price: "от 65 000 ₽",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      type: "Комфортный",
      duration: "14 дней"
    },
    {
      id: 3,
      title: "Расширенный тур",
      description: "20 дней полного погружения в природу Байкала",
      price: "от 95 000 ₽",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      type: "Расширенный",
      duration: "20 дней"
    },
    {
      id: 4,
      title: "Максимальный тур",
      description: "30 дней полного исследования КругоБайкалки",
      price: "от 140 000 ₽",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      type: "Максимальный",
      duration: "30 дней"
    }
  ];

  return (
    <section id="tours" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Туры на Байкал</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите длительность вашего путешествия по КругоБайкалке
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tour.type === 'Минимальный' ? 'bg-green-100 text-green-800' :
                    tour.type === 'Комфортный' ? 'bg-blue-100 text-blue-800' :
                    tour.type === 'Расширенный' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {tour.duration}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <p className="text-gray-600">{tour.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                  <Button variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/constructor">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Создать свой тур на Байкал
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
