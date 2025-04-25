
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
import { CalendarIcon, ChevronLeft, Clock } from "lucide-react";
import { mockPets } from "../mock/mockData";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const VetAppointment = () => {
  const navigate = useNavigate();
  const [selectedPetId, setSelectedPetId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState<Date>();
  const [appointmentTime, setAppointmentTime] = useState("09:00");
  const [clinicName, setClinicName] = useState("");
  const [reason, setReason] = useState("");
  const [reminderDays, setReminderDays] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPetId || !appointmentDate || !clinicName || !reason) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Add vet appointment (in a real app, this would be an API call)
    toast.success("Vet appointment scheduled successfully!");
    
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
        <h1 className="text-2xl font-bold">Schedule Vet Appointment</h1>
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
                <Label htmlFor="date">Appointment Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !appointmentDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {appointmentDate ? format(appointmentDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={appointmentDate}
                      onSelect={setAppointmentDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Appointment Time</Label>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="time" 
                    type="time" 
                    value={appointmentTime} 
                    onChange={(e) => setAppointmentTime(e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="clinic">Veterinary Clinic</Label>
                <Input 
                  id="clinic" 
                  placeholder="Clinic name"
                  value={clinicName} 
                  onChange={(e) => setClinicName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea
                  id="reason"
                  placeholder="Describe the reason for this appointment"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reminder">Send reminder</Label>
                <Select value={reminderDays} onValueChange={setReminderDays}>
                  <SelectTrigger id="reminder">
                    <SelectValue placeholder="Choose when to be reminded" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">On the day</SelectItem>
                    <SelectItem value="1">1 day before</SelectItem>
                    <SelectItem value="3">3 days before</SelectItem>
                    <SelectItem value="7">1 week before</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">Schedule Appointment</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default VetAppointment;
