import Ionicons from 'react-native-vector-icons/Ionicons';

const icons = {
  menu: [Ionicons, 'ios-menu-outline', 30, '#FFFFFF'],
  search: [Ionicons, 'ios-search-outline', 30, '#FFFFFF'],
  email: [Ionicons, 'ios-mail-outline', 30, '#FFFFFF'],
  back: [Ionicons, 'ios-arrow-back', 30, '#FFFFFF'],
  forward: [Ionicons, 'ios-arrow-forward', 30, '#FFFFFF'],
  checkmark: [Ionicons, 'ios-checkmark-outline', 50, '#FFFFFF'],
  close: [Ionicons, 'ios-close-outline', 40, '#FFFFFF'],
};

export const IconsMap = {};
export const IconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName =>
      icons[iconName][0].getImageSource(
        icons[iconName][1],
        icons[iconName][2],
        icons[iconName][3]
      ))
  ).then((sources) => {
    Object.keys(icons)
      .forEach((iconName, idx) => IconsMap[iconName] = sources[idx]);
    resolve(true);
  });
});
