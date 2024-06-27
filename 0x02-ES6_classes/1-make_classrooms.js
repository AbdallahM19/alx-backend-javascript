import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const value1 = new ClassRoom(19);
  const value2 = new ClassRoom(20);
  const value3 = new ClassRoom(34);
  return ([value1, value2, value3]);
}
