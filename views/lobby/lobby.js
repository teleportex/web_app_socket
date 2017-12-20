var socket = io();

socket.emit("join_room", sessionStorage.getItem("nick"))

socket.on("update", function(room) {
  console.log("updating")
  socket.emit("get_data_table", room)
  sessionStorage.setItem("room",room)
})

socket.on("data_ready", function(info) {
  $('#list').empty();
  var html = '<tr>';
  console.log(info)
  for (var i = 0; i < info.length; ++i) {
    console.log(i + " " + info[i].name)
    html += '<td>' + info[i].name + '</td>' + '</tr>' + '<tr>';
  };
  $('#list').append(html);
})

function begin_custom(){
  socket.emit("custom", sessionStorage.getItem("room"));
}

socket.on("redir add question", function(){
  window.location.href = "/addretos/addretos.html";
})
function begin_default(){

}
