
import { Pet } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Dog, Cat, Fish } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface PetCardProps {
  pet: Pet;
  active?: boolean;
  onClick?: () => void;
}

const PetIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case 'dog':
      return <Dog className={cn("h-5 w-5", className)} />;
    case 'cat':
      return <Cat className={cn("h-5 w-5", className)} />;
    case 'fish':
      return <Fish className={cn("h-5 w-5", className)} />;
    default:
      return <Dog className={cn("h-5 w-5", className)} />;
  }
};

const getHealthStatus = (status: string = 'healthy') => {
  switch (status) {
    case 'needs-attention':
      return { label: 'Needs Attention', color: 'bg-amber-100 text-amber-800 border-amber-200' };
    case 'critical':
      return { label: 'Critical', color: 'bg-red-100 text-red-800 border-red-200' };
    case 'healthy':
    default:
      return { label: 'Healthy', color: 'bg-green-100 text-green-800 border-green-200' };
  }
};

const PetCard = ({ pet, active = false, onClick }: PetCardProps) => {
  const healthStatus = getHealthStatus(pet.healthStatus);
  const petTypeColors = {
    dog: 'pet-soft-blue',
    cat: 'pet-soft-purple',
    fish: 'pet-soft-green',
    default: 'pet-soft-gray'
  };
  const bgColor = petTypeColors[pet.type as keyof typeof petTypeColors] || petTypeColors.default;

  return (
    <Card 
      className={cn(
        "pet-card cursor-pointer overflow-hidden",
        active ? "border-pet-blue ring-2 ring-pet-blue/20" : ""
      )}
      onClick={onClick}
    >
      <div className="absolute top-3 right-3 z-10">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Badge className={cn("font-medium", healthStatus.color)}>
              {healthStatus.label}
            </Badge>
          </HoverCardTrigger>
          <HoverCardContent className="w-64 text-sm">
            <div className="space-y-1">
              <p className="font-medium">Health Information</p>
              <p className="text-muted-foreground">
                {pet.healthDescription || "Last check-up was good. No issues reported."}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className={cn(`h-32 bg-${bgColor} flex items-center justify-center relative`, 
        pet.imageUrl ? "overflow-hidden" : "")}>
        {pet.imageUrl ? (
          <img 
            src={pet.imageUrl} 
            alt={pet.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <PetIcon type={pet.type} className="h-20 w-20 text-white/30 pet-type-icon" />
          </div>
        )}
      </div>

      <CardHeader className="pb-2 pt-3">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>{pet.name}</span>
          <PetIcon type={pet.type} className="pet-type-icon" />
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="text-sm text-muted-foreground">
          {pet.breed && <p>{pet.breed}</p>}
          {pet.age && (
            <p className="flex items-center gap-1">
              <span>{pet.age} years old</span>
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
