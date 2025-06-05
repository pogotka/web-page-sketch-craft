
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Елена Смирнова",
      rating: 5,
      text: "Невероятные 14 дней на Байкале! КругоБайкалка превзошла все ожидания. Организация на высшем уровне, гид рассказывал много интересного.",
      tour: "Комфортный тур - 14 дней"
    },
    {
      id: 2, 
      name: "Дмитрий Волков",
      rating: 5,
      text: "Максимальный тур на 30 дней - это было что-то невероятное! Увидел Байкал со всех сторон, побывал в местах, о которых даже не мечтал.",
      tour: "Максимальный тур - 30 дней"
    },
    {
      id: 3,
      name: "Анна Петрова",
      rating: 5, 
      text: "Первый раз на Байкале, выбрала минимальный тур на 7 дней. Идеально для знакомства! Теперь планирую расширенный тур.",
      tour: "Минимальный тур - 7 дней"
    }
  ];

  return (
    <section id="reviews" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Отзывы о турах на Байкал</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Что говорят наши клиенты о путешествиях по КругоБайкалке
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
      </div>
    </section>
  );
};

export default ReviewsSection;
