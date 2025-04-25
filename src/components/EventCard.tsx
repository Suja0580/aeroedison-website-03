
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock } from "lucide-react";
import { format } from "date-fns";

interface EventCardProps {
  title: string;
  date: Date;
  type: "health" | "vet" | "feeding";
  description?: string;
  completed?: boolean;
  onClick?: () => void;
}

const EventCard = ({ title, date, type, description, completed = false, onClick }: EventCardProps) => {
  const cardColors = {
    health: "bg-pet-soft-green border-green-200",
    vet: "bg-pet-soft-purple border-purple-200",
    feeding: "bg-pet-soft-blue border-blue-200"
  };
  
  const badgeColors = {
    health: "bg-green-100 text-green-800",
    vet: "bg-purple-100 text-purple-800",
    feeding: "bg-blue-100 text-blue-800"
  };

  const typeName = {
    health: "Health Check",
    vet: "Vet Appointment",
    feeding: "Feeding Schedule"
  };

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${cardColors[type]} ${completed ? 'opacity-60' : ''}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2 pt-3 flex flex-row items-center justify-between">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <Badge variant="outline" className={badgeColors[type]}>
          {typeName[type]}
        </Badge>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <CalendarCheck className="h-4 w-4" />
          <span>{format(date, 'EEEE, MMMM do, yyyy')}</span>
        </div>
        {date.getHours() > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{format(date, 'h:mm a')}</span>
          </div>
        )}
        {description && (
          <p className="mt-2 text-sm">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
