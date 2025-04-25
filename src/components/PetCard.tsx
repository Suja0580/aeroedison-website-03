
import { Pet } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Dog, Cat, Fish } from 'lucide-react';

interface PetCardProps {
  pet: Pet;
  active?: boolean;
  onClick?: () => void;
}

const PetIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'dog':
      return <Dog className="h-5 w-5" />;
    case 'cat':
      return <Cat className="h-5 w-5" />;
    case 'fish':
      return <Fish className="h-5 w-5" />;
    default:
      return <Dog className="h-5 w-5" />;
  }
};

const PetCard = ({ pet, active = false, onClick }: PetCardProps) => {
  return (
    <Card 
      className={cn(
        "pet-card cursor-pointer",
        active ? "border-pet-blue" : ""
      )}
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 p-1 bg-white rounded-full">
        <PetIcon type={pet.type} />
      </div>
      {pet.imageUrl ? (
        <div className="h-32 overflow-hidden">
          <img 
            src={pet.imageUrl} 
            alt={pet.name} 
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="h-32 bg-pet-soft-blue flex items-center justify-center">
          <PetIcon type={pet.type} />
        </div>
      )}
      <CardHeader className="pb-2 pt-3">
        <CardTitle className="text-lg">{pet.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="text-sm text-muted-foreground">
          {pet.breed && <p>{pet.breed}</p>}
          {pet.age && <p>{pet.age} years old</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
