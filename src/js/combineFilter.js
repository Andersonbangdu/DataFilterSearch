function combineFilter(config) {
  return function(data) {
    for (var prop in config) {
      data = config[prop](data, store.getState(prop));
    }
    return data;
  };
}

var finalFilterArr = combineFilter({
  text: filterArrByText,
  sex: filterArrBySex
});
