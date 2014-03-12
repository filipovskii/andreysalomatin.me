# Тренинг "Основы Python"


Подпишитесь на рассылку, чтобы получать материалы тренинга, домашние задания и объявления: [http://eepurl.com/O90qX](http://eepurl.com/O90qX).

<span id="session-1"></span>
<h2>1 занятие</h2>

### Слайды:

* [Введение][intro]
* [Среда разработки][env]


### Практика:

* [Среда Разработки: Практика][practice-1]

### Домашнее задание:

* [Среда Разработки: Задание на дом][hw-1]


### Дистрибутивы:

* [Python](http://python.org/download/releases/2.7.6)
* [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Eclipse](http://www.eclipse.org/downloads/packages/eclipse-standard-431/keplersr1)
* [Git](http://git-scm.com/download/win)
* [GitHub](http://windows.github.com/)


### Ссылки:

* [The History of Python: Introduction and Overview][history]
* [The History of Python: Python's Design Philosophy][design]
* [Keynote: Guido Van Rossum][keynote]
* [Python Development with PyDev and Eclipse - Tutorial][vogella] (Part
  1-3)
* [Git Basics Episode 1: What is Version Control?][git-1]
* [Git Basics Episode 2: What is Git?][git-2]
* [GitHub Help: Fork a Repo][fork]
* [GitHub Help: Using Pull Requests][pull]


### Ссылки для углублённого изучения:

* [Git Internals - Plumbing and Porcelain][git-int-1]
* [Git Internals - Git Objects][git-int-2]


<span id="session-2"></span>
<h2>2 занятие</h2>

### Слайды:

* [Git][pro-git]

### Практика:

* [Базовый синтаксис Python: Практика][practice-2]

### Домашнее задание:

* [Базовый синтаксис Python: Задание на дом][hw-2]

### Ссылки:

* [A Visual Git Reference][visual-git]
* [A successful Git branching model][git-branching-model]
* [GitHub Help: Syncing a fork][sync-fork]
* [Python Built-in Types][built-in-types]
* [Python: List Comprehensions][list-compr]
* [More Control Flow Tools][flow-control]
* [PEP 8 -- Style Guide for Python Code][style-guide]
* [PEP 257 -- Docstring Conventions][docstring-conventions]

### Ссылки для углублённого изучения:

* [Git Stash][git-stashing]
* [Git Internals - Git References][git-int-ref]
* [Git Internals - The Refspec][git-int-refspec]
* [Unicode HOWTO][unicode]

<span id="session-3"></span>
<h2>3 занятие</h2>


### Практика:

Выполняйте каждую задачу в отдельном бранче. Затем сливайте изменения в
`develop` (not fast-forward). Имя бранча должно быть вида
`practice\[task-name]`.

После выполнения всех заданий, синхронизируйте все бранчи локального
репозитория с вашим удалённым репозиторием на GitHub и создайте
pull-request из вашего бранча `develop` в бранч `develop` оригинального
репозитория.

Создавайте новые файлы в директории `practice_3/[ваше_имя]/`.

* [Необязательный параметр message в assertions][issue-30]
* [unique с помощью dict][issue-29]
* [Test Runner][issue-34]
* [my\_range][issue-32] (по желанию)

### Домашнее задание:

Выполняйте каждую задачу в отдельном бранче. Затем сливайте изменения в
`develop` (not fast-forward). Имя бранча должно быть вида
`homework\[task-name]`.

После выполнения всех заданий, синхронизируйте все бранчи локального
репозитория с вашим удалённым репозиторием на GitHub и создайте
pull-request из вашего бранча `develop` в бранч `develop` оригинального
репозитория.

Создавайте новые файлы в директории `hw_3/[ваше_имя]/`.

* [Доработать Test Runner][issue-36]
* [add\_to\_dict][issue-33]
* [sum\_args][issue-31]
* [Частота слов][issue-35] (по желанию)

### Ссылки:

* [Defining Functions][def-func]
* [Collections][collections]
* [First-class function][first-class-function]
* [map function][python-map]
* [filter function][python-filter]

[intro]: http://andreysalomatin.me/slides/python-intro
[env]: http://andreysalomatin.me/slides/python-dev-env
[git]: http://andreysalomatin.me/slides/git-basics
[practice-1]: http://andreysalomatin.me/trainings/python-basics/practice-1
[hw-1]: http://andreysalomatin.me/trainings/python-basics/hw-1
[history]: http://python-history.blogspot.ru/2009/01/introduction-and-overview.html
[design]: http://python-history.blogspot.ru/2009/01/pythons-design-philosophy.html
[keynote]: http://www.youtube.com/watch?v=EBRMq2Ioxsc&list=PLtXTZDIx0i2vyge-bcV_0siHGI2QKu5_-

[vogella]: http://www.vogella.com/tutorials/Python/article.html

[git-1]: http://git-scm.com/video/what-is-version-control
[git-2]: http://git-scm.com/video/what-is-git

[git-int-1]: http://git-scm.com/book/en/Git-Internals-Plumbing-and-Porcelain
[git-int-2]: http://git-scm.com/book/en/Git-Internals-Git-Objects

[fork]: https://help.github.com/articles/fork-a-repo
[pull]: https://help.github.com/articles/using-pull-requests


<!-- Session 2 -->
[practice-2]: http://andreysalomatin.me/trainings/python-basics/practice-2
[hw-2]: http://andreysalomatin.me/trainings/python-basics/hw-2
[git-stashing]: http://git-scm.com/book/en/Git-Tools-Stashing
[pro-git]:http://andreysalomatin.me/slides/git-pro
[visual-git]: http://marklodato.github.io/visual-git-guide/index-en.html
[git-branching-model]: http://nvie.com/posts/a-successful-git-branching-model/
[sync-fork]: https://help.github.com/articles/syncing-a-fork
[built-in-types]: http://docs.python.org/2.7/library/stdtypes.html
[list-compr]: http://www.secnetix.de/olli/Python/list_comprehensions.hawk
[flow-control]: http://docs.python.org/2/tutorial/controlflow.html
[unicode]: http://docs.python.org/2/howto/unicode
[style-guide]: http://legacy.python.org/dev/peps/pep-0008/
[docstring-conventions]: http://legacy.python.org/dev/peps/pep-0257/
[git-int-ref]: http://git-scm.com/book/en/Git-Internals-Git-References
[git-int-refspec]: http://git-scm.com/book/en/Git-Internals-The-Refspec



[issue-29]: https://github.com/filipovskii/python-basics/issues/29
[issue-30]: https://github.com/filipovskii/python-basics/issues/30
[issue-31]: https://github.com/filipovskii/python-basics/issues/31
[issue-32]: https://github.com/filipovskii/python-basics/issues/32
[issue-33]: https://github.com/filipovskii/python-basics/issues/33
[issue-34]: https://github.com/filipovskii/python-basics/issues/34
[issue-35]: https://github.com/filipovskii/python-basics/issues/35
[issue-36]: https://github.com/filipovskii/python-basics/issues/36



[def-func]: http://docs.python.org/2/tutorial/controlflow.html#defining-functions
[collections]: http://docs.python.org/2/library/collections.html
[first-class-function]: http://en.wikipedia.org/wiki/First-class_function
[python-map]: http://docs.python.org/2.7/library/functions.html#map
[python-filter]: http://docs.python.org/2.7/library/functions.html#filter

