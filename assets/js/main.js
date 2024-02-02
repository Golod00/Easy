"use strict"
  //burger menu - start 
  const headerMenu = document.querySelector('.menu');
  const headerBtn = document.querySelector('.btn-burger');
  const body = document.body;

  if (headerMenu && headerBtn) {
    headerBtn.addEventListener('click', () => {
      headerMenu.classList.toggle('active')
      headerBtn.classList.toggle('active')
      body.classList.toggle('lock')
    })
  }

  //dection faq - start
  function toggleCollapse(element) { 
    const item = element.closest('.faq-block__item');
    const isActive = item.classList.contains('active');

    // Закрываем все активные коллапсы
    document.querySelectorAll('.faq-block__item').forEach((item) => {
      item.classList.remove('active');
    });

    // Если текущий коллапс не был активен, открываем его
    if (!isActive) {
      item.classList.add('active');
    }
  }

  //modal window - start
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-window');
    const modalButtons = document.querySelectorAll('.main-btn');
    const modalClose = document.querySelector('.modal-window__btn-close');
    const overlay = document.querySelector('.overlay');
  
    modalButtons.forEach(button => {
      button.onclick = function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие (переход по ссылке)
        modal.style.display = 'block';
      };
    });
  
    modalClose.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(e) {
      if (e.target == overlay) {
        modal.style.display = 'none';
      }
    };
  });


  //forma in modal - start
  document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('input[type="radio"][name="contactMethod"]');
    var inputPlaceholder = document.querySelector('.modal-window__form-input');

    radioButtons.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.value === 'email') {
                inputPlaceholder.placeholder = 'Введите свою почту';
            } else {
                inputPlaceholder.placeholder = 'Введите номер телефона';
            }
        });
    });
  });