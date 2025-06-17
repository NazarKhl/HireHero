import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AccountSettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <p className="text-muted-foreground mb-8">Manage your account settings and preferences</p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Profile Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-muted-foreground">First name</p>
              <p className="font-medium">John</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last name</p>
              <p className="font-medium">Doe</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">john@example.com</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Password</p>
              <p className="font-medium">********</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="mb-8">Save Changes</Button>

      <Card>
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-muted-foreground">Connected</p>
            </div>
            <Button variant="outline" size="sm">Disconnect</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}