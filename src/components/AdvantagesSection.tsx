
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🎯",
      title: "Индивидуальный подход",
      description: "Каждый тур создается с учетом ваших предпочтений и бюджета"
    },
    {
      icon: "💰",
      title: "Лучшие цены",
      description: "Работаем напрямую с поставщиками, без лишних наценок"
    },
    {
      icon: "🕐", 
      title: "Экономия времени",
      description: "Не нужно искать отели, билеты и экскурсии - мы все организуем"
    },
    {
      icon: "🌟",
      title: "Качество сервиса",
      description: "Более 10 лет опыта в туристической сфере"
    },
    {
      icon: "🛡️",
      title: "Полная безопасность",
      description: "Страховка и поддержка 24/7 во время путешествия"
    },
    {
      icon: "🎁",
      title: "Бонусы и подарки",
      description: "Приятные сюрпризы для наших постоянных клиентов"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши преимущества</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Почему тысячи путешественников выбирают именно нас
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
