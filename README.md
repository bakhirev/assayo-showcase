# Reports showcase UI

Отображение списка отчётов по git репозиториям ([демо](https://assayo.online/showcase/?ref=github)).

<a href="https://assayo.online/showcase/?ref=github" target="_blank"><img src="https://assayo.online/seo/github/showcase.png" width="100%" /></a>

Это вспомогательное приложение. Оно имеет двойное предназначение:
- является витриной для отображения текущих отчётов, доступных пользователю;
- выполняет функции панели администрирования, через которую можно заводить новые отчёты и настраивать текущие;

Отображение отчёта осуществляется средствами приложения [Log visualization UI](https://github.com/bakhirev/assayo). Оно является независимым приложением, которое может существовать вне рамок текущего и встраивается в него через iframe.

#### 📐 Общая архитектура
<img src="https://raw.githubusercontent.com/bakhirev/assayo-crawler/12af4410fc93384cafb108a4429e43f9a874dbaa/schema.svg" width="70%" />

1. [Reports showcase UI](https://github.com/bakhirev/assayo-showcase) **(вы тут)** отображение списка отчётов. Каждый отчёт имеет название, описание и список репозиториев.
2. [Crawler service](https://github.com/bakhirev/assayo-crawler) сборка, склейка, обработка логов из репозиториев для отчётов.
3. [Log visualization UI](https://github.com/bakhirev/assayo) отображение отчётов. Для работы ему нужен log файл с данными.

#### 📧 Пожелания, предложения, замечания
- telegramm [@bakhirev](https://t.me/bakhirev) (приоритетный способ связи)
- [alexey-bakhirev@yandex.ru](mailto:alexey-bakhirev@yandex.ru)
