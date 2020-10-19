$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: `https://www.feriadosapp.com/api/holidays.json`,

    success: function (data) {
      console.log(data);
      data.data.forEach((date) => {
        $("#feriados").append(
          ` <tr>
                <th scope="row">${date.id}</th>
                <td>${date.date}</td>
                <td>${date.title}</td>
                <td>${date.extra}</td>
                <td>${date.law}</td>
            </tr>
`
        );
      });
    },
    dataType: "json",
  });
});
