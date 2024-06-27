import ClassRoom from './0-classroom';

/**
 * Initializes and returns an array of ClassRoom objects.
 * @returns {Array} An array of ClassRoom objects.
 */
export default function initializeRooms() {
  const args = [19, 20, 34];
  return args.map((size) => new ClassRoom(size));
}
