function checkChange(str) {
  var multiple = str.length / 3
  var sos = 'SOS'.repeat(multiple)
  var times = 0
  if (str == sos) {
    return true
  }
  else {
    for (i = 0; i < str.length; i++) {
      if (str[i] != sos[i]) {
        times++
      }
    }
    return times;
}
}

document.write(checkChange('SOSSOT'))