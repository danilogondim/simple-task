export default state => {
  const { taskers, day, range } = state

  const filteredTaskers = taskers.filter(tasker => {

    const validDay = Object.keys(tasker.availability).includes(String(day.getDay()));

    const availableRanges = tasker.availability[day.getDay()];

    const validRange = !availableRanges ? '' : availableRanges.filter(elem => {
      return elem[0] <= range[0] && elem[1] >= range[1];
    }).length > 0;

    return validDay && validRange;
  })

  return filteredTaskers;
};