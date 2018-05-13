function foo(){
  var bar;
  quux = 5;
  function zip(){
    var quux=4;
    bar = true;
  }
  return zip;
}
