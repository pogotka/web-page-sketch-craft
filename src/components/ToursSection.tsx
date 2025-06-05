
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "Европейская классика",
      description: "7 дней в Париже, Риме и Барселоне",
      price: "от 89 000 ₽",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      type: "Standard"
    },
    {
      id: 2,
      title: "Тропический рай",
      description: "10 дней на Мальдивах с перелетом",
      price: "от 150 000 ₽",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      type: "Max"
    },
    {
      id: 3,
      title: "Горные приключения",
      description: "Треккинг в Гималаях на 14 дней",
      price: "от 120 000 ₽",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      type: "Ultimate"
    }
  ];

  return (
    <section id="tours" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Готовые туры</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите из наших популярных направлений или создайте собственный маршрут
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                    tour.type === 'Standard' ? 'bg-green-100 text-green-800' :
                    tour.type === 'Max' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {tour.type}
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
          <Button size="lg" variant="outline" className="mr-4">
            Посмотреть все туры
          </Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Создать свой тур
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
