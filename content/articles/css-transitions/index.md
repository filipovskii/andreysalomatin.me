title: Разбираемся с CSS Анимацией: transitions
---

С приходом HTML5 и CSS3 у нас появилась возможность управлять анимацией
декларативно. До этого приходилось возиться с `javascript`, `flash` или
даже `silverlight`. Конечно, CSS **не закрывает** все возможные сценарии,
но он отлично подходит для простых анимаций элементов документа.

За это в CSS отвечают свойства `transition` и `animate`. Сегодня я
расскажу о `transition` и покажу на примерах, как он работает.

![Spoon][spoon-img]

Без лишних церемоний, перейдём к коду:

HTML:

    <div class="transition">Расти!</div>

JS:

    setTimeout(function () {
      var el = document.querySelector('.transition');
      el.style.fontSize = '4em';
    }, 1000);

CSS:

    .transition {
      font-size: 1em;
      transition: font-size 4s;
    }

<p data-height="200" data-theme-id="4356" data-slug-hash="lkAdB" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/lkAdB'>Transition Simple</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

В этом примере `transition` позволяет изменять `font-size` плавно в
течение 4 секунд. Так как `transition` работает при **изменении свойства с
одного значения на другое**, мы используем `setTimeout`. Без задержки, мы
увеличим шрифт в момент загрузки страницы, и анимации не произойдёт.

### Параметры transition

    .animatable {
      transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
    }

  * `transition-property` &mdash; анимируемое CSS-свойство;

  * `transition-duration` &mdash; длительность анимации;

  * `transition-timing-function` &mdash; функция, которая описывает, как
    скорость трансформаций будет меняться в процессе анимации;

  * `transition-delay` &mdash; время задержки начала анимации.

Если есть дублирование в CSS, укажите параметры по-отдельности.

    .animatable {
      transition-property: width;
      transition-duration: 1s;
      transition-timing-function: ease-in;
      transition-delay: 1s;
    }

### transition-property

Как правило, если значение свойства &mdash; число, например `width`,
`font-size`, `color`, его можно анимировать. Полный список таких свойств
вы найдёте [здесь][animatable-props].

Свойства вроде `display` или `box-style` анимировать нельзя.

Некоторые браузеры **не анимируют элемент**, если значения
`transition-property` указаны в разных единицах. К примеру изменение
свойства `width` со `100px` на `20%`.

Также избегайте величин вроде `auto`, `inherit` и подобных.

### transition-duration

<p data-height="334" data-theme-id="4356" data-slug-hash="gdjzp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/gdjzp'>Transition duration</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### transition-delay

<p data-height="355" data-theme-id="4356" data-slug-hash="fdKEp" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/fdKEp'>Transition delay</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### transition-timing-function

Чтобы анимация замедлялась ближе к концу, или была не плавной, а
ступенчатой, в CSS предусмотрен параметр `transition-timing-function`.

##### Функции для плавной анимации

  * `ease` (значение по-умолчанию) &mdash; анимация с замедлением вначале
    и в конце и с ускорением посередине;
  * `ease-in` &mdash; замедление в начале;
  * `ease-out` &mdash; замедление в конце;
  * `ease-in-out` &mdash; замедление в начале и в конце;
  * `linear` &mdash; равномерная скорость на протяжении всей анимации;
  * `cubic-bezier(a,b,c,d)` &mdash; кривая Безье, где `a`,`b`,`c`,`d`
    &mdash; параметры кривой. Подберите подходящую кривую с помощью [этого
    ресурса][cubic-bezier].

<p data-height="388" data-theme-id="4356" data-slug-hash="Ayfdc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/Ayfdc'>Transition easing</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

##### Функции для пошаговой анимации

  * `step-start` &mdash; изменение в один шаг в начале анимации. Аналогично
    отсутствию анимации. Аналогична `steps(1, start)`;
  * `step-end` &mdash; изменение в один шаг в конце анимации, по
    прошествию времени, указанного в `transition-duration`. Аналогична
    `steps(1, end)`;
  * `steps(n, [start | end])` &mdash; производит изменение в `n` шагов. В
    зависимости от значения второго параметра, браузер будет отсчитывать
    шаги от начала или от конца времени анимации.

<p data-height="431" data-theme-id="4356" data-slug-hash="oKkFl" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/oKkFl'>Transition cubic-bezier, steps</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Один селектор, много анимации

Перечислите анимации через запятую, если хотите применить несколько к
одному элементу. Используйте ключевое слово `all` в `transition-property`,
если хотите анимировать все свойства и использовать одинаковые параметры
анимации.

    .transition {
      transition: width 3s ease-in, background-color 2s linear 1s;
    }

Аналогично:

    .transition {
      transition-property: width, background-color;
      transition-duration: 3s, 2s;
      transition-timing-function: ease-in, linear;
      transition-delay: 0, 1s;
    }

<p data-height="350" data-theme-id="4356" data-slug-hash="mEKvh" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/filipovsky/pen/mEKvh'>Transition several</a> by Andrey Salomatin (<a href='http://codepen.io/filipovsky'>@filipovsky</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


### Поддержка браузеров

На настоящий момент большинство браузеров поддерживает свойство
`transition`, хотя некоторые только с префиксом. Используйте все формы
для большего охвата:


    .animatable {
        -webkit-transition: width 1s ease-out 1s;
        -moz-transition: width 1s ease-out 1s;
        -o-transition: width 1s ease-out 1s;
        transition: width 1s ease-out 1s;
    }

### Зачем-то

Я использую `transition` для изменения цвета кнопок и ссылок (обратите
внимание на ссылки в блоге). Анимировать размер и положение элементов
навигации второй по частоте использования приём.

Это простой и удобный инструмент. Надеюсь и вы найдёте ему место в ваших
проектах!

До скорого!

[animatable-props]: http://www.w3.org/TR/css3-transitions/#animatable-properties
[cubic-bezier]: http://cubic-bezier.com/

[spoon-img]: resources/images/spoon-transition.gif
