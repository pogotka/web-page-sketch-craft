
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import TimeOfYearStep from "@/components/constructor/TimeOfYearStep";
import GroupStep from "@/components/constructor/GroupStep";
import DurationStep from "@/components/constructor/DurationStep";
import ContactsStep from "@/components/constructor/ContactsStep";
import AdditionalServicesStep from "@/components/constructor/AdditionalServicesStep";
import BookingStep from "@/components/constructor/BookingStep";
import PaymentStep from "@/components/constructor/PaymentStep";

const TourConstructor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tourData, setTourData] = useState({
    timeOfYear: "",
    groupType: "",
    duration: "",
    contactData: {},
    additionalServices: []
  });

  const steps = [
    "Время года",
    "Группа",
    "Длительность", 
    "Контакты",
    "Доп. услуги",
    "Бронирование",
    "Оплата"
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <TimeOfYearStep tourData={tourData} setTourData={setTourData} />;
      case 2:
        return <GroupStep tourData={tourData} setTourData={setTourData} />;
      case 3:
        return <DurationStep tourData={tourData} setTourData={setTourData} />;
      case 4:
        return <ContactsStep tourData={tourData} setTourData={setTourData} />;
      case 5:
        return <AdditionalServicesStep tourData={tourData} setTourData={setTourData} />;
      case 6:
        return <BookingStep tourData={tourData} setTourData={setTourData} />;
      case 7:
        return <PaymentStep tourData={tourData} setTourData={setTourData} />;
      default:
        return <TimeOfYearStep tourData={tourData} setTourData={setTourData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад к главной
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Конструктор туров</h1>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600 mb-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center ${index + 1 === currentStep ? 'text-blue-600 font-semibold' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                    index + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="hidden md:block">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {renderStep()}
              
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Назад
                </Button>
                
                {currentStep < steps.length ? (
                  <Button onClick={nextStep} className="flex items-center">
                    Далее
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="bg-green-600 hover:bg-green-700">
                    Завершить бронирование
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TourConstructor;
