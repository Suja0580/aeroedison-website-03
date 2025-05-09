
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

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
    health: "bg-green-100 text-green-800 hover:bg-green-200",
    vet: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    feeding: "bg-blue-100 text-blue-800 hover:bg-blue-200"
  };

  const iconColors = {
    health: "text-green-600",
    vet: "text-purple-600",
    feeding: "text-blue-600"
  };

  const typeName = {
    health: "Health Check",
    vet: "Vet Appointment",
    feeding: "Feeding Schedule"
  };

  const isPast = date < new Date();

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:shadow-md border-l-4",
        cardColors[type],
        isPast && !completed ? "opacity-70" : "",
        completed ? "opacity-60 bg-opacity-50" : "",
        "border-l-green-500 border-l-purple-500 border-l-blue-500"[type === "health" ? 0 : type === "vet" ? 1 : 2]
      )}
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
          <CalendarCheck className={cn("h-4 w-4", iconColors[type])} />
          <span>{format(date, 'EEEE, MMMM do, yyyy')}</span>
        </div>
        {date.getHours() > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className={cn("h-4 w-4", iconColors[type])} />
            <span>{format(date, 'h:mm a')}</span>
          </div>
        )}
        {description && (
          <p className="mt-2 text-sm">{description}</p>
        )}
        
        {completed && (
          <div className="mt-2 flex items-center gap-1 text-sm text-green-600">
            <CheckCircle2 className="h-4 w-4" />
            <span>Completed</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
