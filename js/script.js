$(() => {
  $('#weeklyList ul').sortable({
    items: "li:not('.listTitle, .addItem')",
    connectWith: 'ul',
    dropOnEmpty: true,
    placeholder: 'emptySpace',
  });

  $('input').keydown(function (e) {
    if (e.keyCode === 13) {
      const item = $(this).val();

      $(this).parent().parent().append(`<li>${item}</li>`);
      $(this).val('');
    }
  });

  $('#trash').droppable({
    drop(event, ui) {
      ui.draggable.remove();
    },
  });
});
