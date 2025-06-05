
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Елена Петрова",
      rating: 5,
      text: "Потрясающий сервис! Организовали идеальный медовый месяц на Мальдивах. Каждая деталь была продумана до мелочей.",
      tour: "Тропический рай - 10 дней"
    },
    {
      id: 2, 
      name: "Михаил Сидоров",
      rating: 5,
      text: "Конструктор туров - это что-то невероятное! За 20 минут создал тур мечты по Европе. Все прошло без сбоев.",
      tour: "Индивидуальный тур по Европе"
    },
    {
      id: 3,
      name: "Анна Козлова",
      rating: 5, 
      text: "Отличная поддержка на протяжении всего путешествия. Менеджер всегда был на связи и помогал решать любые вопросы.",
      tour: "Горные приключения - 14 дней"
    }
  ];

  return (
    <section id="reviews" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже путешествовал с нами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.tour}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-blue-600 hover:text-blue-800 font-semibold">
            Связаться с менеджером для консультации
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
