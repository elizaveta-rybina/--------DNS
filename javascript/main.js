$('.info__add').click(function () {
  $(this).parent().append($('<div class="form-body">', {
          'html': '<a href="#">university2.ru</a>' + 
          '<div class="buttons">' + 
          '<button class="adding"><img src="image/add.png" /></button>' + 
          '<div class="setting">' + 
          '<button class="btn-color btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
              '<img src="image/setting.png"/>' + 
              '</button>' + 
              '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' + 
                '<a class="dropdown-item" href="#">Общие настройки</a>' + 
                '<a class="dropdown-item" href="setting.html">Настройка DNS</a>' + 
                '<a class="dropdown-item" href="#">Передача домена</a>' + 
              '</div>' + 
            '</div>' + 
            '<button class="delete" data-toggle="modal" data-target="#exampleModal"><img src="image/delete.png" /></button>' +
          '</div>'
  }));
});

$('.sure').click(function (){
  $(this).closest('.form-body', $(this)).remove(); 
});

/*
$('.delete').click(function (){
   $(this).closest('.form-body', $(this)).remove(); 
});


Сделать ready (DOM)
*/