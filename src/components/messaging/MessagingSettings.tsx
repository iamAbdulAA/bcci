
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const MessagingSettings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive messages and alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Cluster messages</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Cell group messages</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Prayer requests</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Event reminders</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Direct messages</span>
            <input type="checkbox" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Control your messaging privacy and security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Who can message you directly:</label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Anyone in my cluster</option>
              <option>Only cell group members</option>
              <option>Only leadership</option>
              <option>No one</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Read receipts</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Online status</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Message encryption</span>
            <input type="checkbox" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
