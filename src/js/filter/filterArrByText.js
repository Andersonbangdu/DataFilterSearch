function filterArrByText(data, text) {
  if (!text) {
    return data;
  } else {
    
    return data.filter(function(ele, index) {
      return ele.name.toUpperCase().indexOf(text) != -1;
    });
  }
}
