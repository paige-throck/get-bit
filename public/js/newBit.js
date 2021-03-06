(function() {


  console.log("Lets create a new Bit");

  let jokeTitle;
  let jokeBody;
  let tag = [];
  let label = [];


  $('#saveButton').click(() => { // Click listener for the submit button.
    event.preventDefault();
    console.log('Button Pressed.');


    jokeTitle = $('#joke_title').val();
    jokeBody = $('#body').val();
    tag = $('#tag').val();
    label = $('#labelSelect').val();



    if (!jokeTitle || !jokeBody) {
      $('#joke_title').addClass('error')
      $('#joke_titleReq').text('Title Required')
      $('#body').addClass('error')
      $('#bodyReq').text('Body Required')

    } else {
      window.location.assign($('#saveButton').val());
      let newJokeObj = {}

      newJokeObj = {
        joke_title: jokeTitle,
        body: jokeBody,
        tag: tag,
        label_id: label
      };

      $.post(``, newJokeObj, (result) => {})
    }
  })
  $('#ditchButton').click(() => {
    event.preventDefault();
    console.log($('#ditchButton').val());
    window.location.assign($('#ditchButton').val());
  });


})();
