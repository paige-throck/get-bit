(function() {
let userID = $("body").attr('id')
console.log("Updating Bit");

$('#submitButton').click(() => {
  event.preventDefault();
  console.log($('#submitButton').val());
  tag = $('#newTag').val();

  if (!tag) {
    $('#newTag').addClass('error')
    $('#newTagReq').text('Please Enter a New Tag')
  } else {
    window.location.assign($('#submitButton').val());
    let tagObj = {}
    tagObj = {
      tag: tag
    };

    $.post(``, tagObj, (results) => {
      console.log(tagObj)
    })
  }

});


  $('#ditchButton').click(() => {
    event.preventDefault();
    console.log($('#ditchButton').val());
    window.location.assign($('#ditchButton').val());
  });

  $('#deleteButton').click(() => {
    event.preventDefault();
    let deleteVal = [];
  deleteVal.push({deleteId: $('#deleteButton').val()});
  console.log(deleteVal);
    $(`#deleteButton`).replaceWith(`<button class="outline redButtonOutLine" id="finalDeleteButton">Confirm Delete</button>`);
    $('#finalDeleteButton').click(() => {
      $.ajax({
        url: `/bits/${userID}/${deleteVal[0].deleteId}`,
        type: 'DELETE',
        data: deleteVal,
        success: postAjax
      });
    });
  });

  $('#saveButton').click(() => {
    event.preventDefault();
    window.location.assign($('#saveButton').val());

    $.post(``, updateJoke, (result)=>{
    })

  });

  // $.ajax({
  //   url : '/accounts/update',
  //   method : "PUT",
  //   data : updateJoke,
  //   dataType: 'json',
  //   success : function(data) {
  //     console.log(data);
  //     window.location.assign('/');
  //   }

  function postAjax(){
    console.log("postAjax is working");
    window.location.assign(`/bits/${userID}`)

  }

})();
