function grades(points) {
  if (points >= 90 && points <= 100) {
    return 'perfect';
  } else if (points >= 70 && points <= 89) {
    return 'excelent';
  } else if (points >= 50 && points <= 69) {
    return 'good';
  } else if (points < 50) {
    return 'You can do better';
  }
}
