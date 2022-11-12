const $ = require('jquery')

$(function() {
  $.ajax({
    type: "GET",
    url: "/api/recentlyadded",
    success: function(data) {
      // $('#recentlyAddedDisplay').html('<p>hello world</p><p>hi</p>')

      let syllabi = []
      data.forEach(function(ele) {
        let single = [
          '<p>course_name: ' + ele['course_name'] + '</p>'
        ]
        syllabi.push(single.join(""))
      })
      $('#recentlyAddedDisplay').html(syllabi.join(""))
    }
  })
})
