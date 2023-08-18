const checkNotificationPermission = async () => {
  if (!window.Notification) {
    console.log("Browser does not support notifications");
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission !== "denied") {
    return Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        return true;
      }
    });
  }

  return false;
};

export const sendNotification = async (title: string, body: string) => {
  const permission = await checkNotificationPermission();

  if (!permission) {
    return;
  }

  new Notification(title, { body });
};
