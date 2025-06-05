
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  tourData: any;
  setTourData: (data: any) => void;
}

const ContactsStep = ({ tourData, setTourData }: Props) => {
  const updateContactData = (field: string, value: string) => {
    setTourData({
      ...tourData,
      contactData: {
        ...tourData.contactData,
        [field]: value
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Контакты</h2>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Имя и фамилия</Label>
              <Input 
                id="name"
                placeholder="Введите ваше имя"
                value={tourData.contactData?.name || ''}
                onChange={(e) => updateContactData('name', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="example@email.com"
                value={tourData.contactData?.email || ''}
                onChange={(e) => updateContactData('email', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone"
                placeholder="+7 (999) 123-45-67"
                value={tourData.contactData?.phone || ''}
                onChange={(e) => updateContactData('phone', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="travelers">Количество путешественников</Label>
              <Input 
                id="travelers"
                type="number"
                min="1"
                placeholder="1"
                value={tourData.contactData?.travelers || ''}
                onChange={(e) => updateContactData('travelers', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactsStep;
