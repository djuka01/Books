var tbody = document.getElementsByTagName('tbody')[0];

var xml = new XMLHttpRequest();

xml.open("GET","https://mysafeinfo.com/api/data?list=bestnovels1&format=json&case=default");
xml.addEventListener('readystatechange', function () {
  if(xml.readyState === 4 && xml.status === 200){
    displayTable();
  }
})
xml.send();

function displayTable() {
  var data = JSON.parse(xml.responseText);
  var text = '';
 for (var i = 0; i < data.length; i++) {
   text += `<tr>`;
    text += `<td>${i+1}</td>`;
    text += `<td>${data[i].Title}</td>`;
    text += '<td>'+data[i].Author+'</td>';
    text += '<td>'+data[i].Published+'</td>';
    text += '<td><a href="https://en.wikipedia.org/wiki/'+data[i].Title+'" class="btn btn-sm btn-warning">read more</a></td>';
   text += '</tr>';
  }
  tbody.innerHTML = text;
  console.log(data);
}
