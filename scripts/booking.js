function bookAuto() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var pickup = document.getElementById("pickup").value;
  var drop = document.getElementById("drop").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  const bookAuto = {
    name: name,
    phone: phone,
    pickup: pickup,
    drop: drop,
    date: date,
    time: time,
  };
  alert("Your Auto is booked successfully!");
}
