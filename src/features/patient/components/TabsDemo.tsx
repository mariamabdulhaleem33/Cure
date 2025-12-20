import { AppointmentCard } from "@/features/patient/components/AppointmentCard";
import { Calendar28 } from "@/features/patient/components/Calender28";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <div className="flex  flex-col gap-6">
      <Tabs defaultValue="account">
        <div className="flex justify-between flex-row-reverse">
          <Calendar28 />
          <TabsList className="bg-none">
            <TabsTrigger
              value="account"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              all
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
   
  "
            >
              up coming
            </TabsTrigger>
            <TabsTrigger
              value="upComing"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              canceled
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="
    data-[state=active]:bg-sky-700
    data-[state=active]:text-white
    text-muted-foreground
    
  "
            >
              completed
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="account">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="upcoming" />
            <AppointmentCard status="completed" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input
                  id="tabs-demo-current"
                  type="password"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input
                  id="tabs-demo-new"
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="upComing">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="upcoming" />
            <AppointmentCard status="completed" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="flex gap-6 flex-wrap justify-start">
            <AppointmentCard status="upcoming" />
            <AppointmentCard status="completed" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
            <AppointmentCard status="canceled" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
