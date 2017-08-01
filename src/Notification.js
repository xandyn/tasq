import PushNotification from 'react-native-push-notification';
import moment from 'moment';


class Notifications {
  createNotificationsForTasks = (tasksMap) => {
    PushNotification.cancelAllLocalNotifications();
    if (!tasksMap || Object.keys(tasksMap).length === 0) return;
    const now = moment();
    for (const [id, task] of Object.entries(tasksMap)) {
      if (moment(task.date).isAfter(now, 'minute')) {
        PushNotification.localNotificationSchedule({
          message: task.description,
          date: new Date(task.date),
          id: task.id,
          userInfo: { id: task.id },
          number: 0
        });
      }
    }
  };
  cancelAllNotifications = () => PushNotification.cancelAllLocalNotifications();
}


export default new Notifications();
