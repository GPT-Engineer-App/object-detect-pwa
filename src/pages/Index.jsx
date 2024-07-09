import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        new Notification('Notifications enabled!', {
          body: 'You will now receive updates from Object Detection & Counting app.',
          icon: '/icon-192x192.png'
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Object Detection & Counting PWA</h1>
      <p className="mb-4">Welcome to our Progressive Web App for object detection and counting.</p>
      <div className="mb-4">
        <p>Network status: {isOnline ? 'Online' : 'Offline'}</p>
      </div>
      <Button onClick={requestNotificationPermission} className="mb-4">
        Enable Notifications
      </Button>
      <p className="text-sm text-gray-600">
        This app works offline and can be installed on your device for quick access.
      </p>
    </div>
  );
};

export default Index;