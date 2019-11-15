var queryParameters = {};

$(document).ready(() => {
  queryParameters = {};
  var queryString = location.search.substring(1),
  re = /([^&=]+)=([^&]*)/g, m;

  while (m = re.exec(queryString)) {
      queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }

  $("#filter-input").on('input', (e) => {
    queryParameters["filter"] = e.target.value;
  });
  
  $(".dropdown-item").click((e)=>{
    $(".dropdown-item").toArray().forEach(element => {
      $(element).removeClass("active");
    });
    $(e.target).addClass("active");
    queryParameters["type"] = e.target.name;
  })
  
  $("#filter-submit").on("click", (e) => {
    location.search = $.param(queryParameters);
  });
});


