
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "🏔️",
      title: "Экспертность по Байкалу",
      description: "Более 10 лет организуем туры именно по КругоБайкалке"
    },
    {
      icon: "💰",
      title: "Честные цены",
      description: "Работаем напрямую с местными поставщиками услуг"
    },
    {
      icon: "🚂", 
      title: "КругоБайкалка",
      description: "Уникальные маршруты по железной дороге вокруг Байкала"
    },
    {
      icon: "🌟",
      title: "Индивидуальный подход",
      description: "Каждый тур адаптируем под ваши предпочтения"
    },
    {
      icon: "🛡️",
      title: "Безопасность",
      description: "Полная страховка и сопровождение гида"
    },
    {
      icon: "🎁",
      title: "Местные впечатления",
      description: "Знакомство с бурятской культурой и традициями"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Почему выбирают TURION</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы специализируемся именно на турах по Байкалу
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
