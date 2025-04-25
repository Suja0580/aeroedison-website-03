
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ChevronLeft } from "lucide-react";
import { mockPets } from "../mock/mockData";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const HealthCheckSchedule = () => {
  const navigate = useNavigate();
  const [selectedPetId, setSelectedPetId] = useState("");
  const [checkupTitle, setCheckupTitle] = useState("Routine Health Check");
  const [checkupDate, setCheckupDate] = useState<Date>();
  const [notes, setNotes] = useState("");
  const [frequency, setFrequency] = useState("90");
  const [reminderDays, setReminderDays] = useState("7");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPetId || !checkupDate) {
      toast.error("Please select a pet and date");
      return;
    }

    // Add health check (in a real app, this would be an API call)
    toast.success("Health check scheduled successfully!");
    
    // Navigate back to dashboard
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="container py-8 max-w-2xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mr-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Schedule Health Check</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="pet">Select Pet</Label>
                <Select value={selectedPetId} onValueChange={setSelectedPetId}>
                  <SelectTrigger id="pet">
                    <SelectValue placeholder="Choose a pet" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPets.map((pet) => (
                      <SelectItem key={pet.id} value={pet.id}>
                        {pet.name} ({pet.type})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Check-up Title</Label>
                <Input 
                  id="title" 
                  value={checkupTitle} 
                  onChange={(e) => setCheckupTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Check-up Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkupDate ? format(checkupDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkupDate}
                      onSelect={setCheckupDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="frequency">Schedule Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Choose frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">Monthly</SelectItem>
                    <SelectItem value="60">Every 2 months</SelectItem>
                    <SelectItem value="90">Every 3 months (Recommended)</SelectItem>
                    <SelectItem value="180">Every 6 months</SelectItem>
                    <SelectItem value="365">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  We'll automatically schedule the next check-up based on this frequency
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminder">Send reminder</Label>
                <Select value={reminderDays} onValueChange={setReminderDays}>
                  <SelectTrigger id="reminder">
                    <SelectValue placeholder="Choose when to be reminded" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 day before</SelectItem>
                    <SelectItem value="3">3 days before</SelectItem>
                    <SelectItem value="7">1 week before</SelectItem>
                    <SelectItem value="14">2 weeks before</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any specific details or instructions"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">Schedule Health Check</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default HealthCheckSchedule;
