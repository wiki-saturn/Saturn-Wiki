---
title: Подключение к VPN через Linux на Android (VLESS)
description: В данном руководстве описывается процесс загрузки, установки и настройки приложения NekoRay на Linux для удобного использования VPN через протокол VLESS.
head:
  - - meta
    - property: og:image
      content: /pages/linux/nekoray/opengraph.webp
  - - meta
    - name: twitter:image
      content: /pages/linux/nekoray/opengraph.webp
---

# Подключение к VPN через NekoRay на Linux (VLESS)

#### В данном руководстве описывается процесс загрузки, установки и настройки приложения NekoRay на Linux для удобного использования VPN через протокол VLESS.

* [Официальный сайт проекта →](https://en.nekoray.org/)
* [Релизы в GitHub →](https://github.com/MatsuriDayo/nekoray/releases)
* [Репозиторий GitHub →](https://github.com/MatsuriDayo/nekoray)

::: warning  **Обратите внимание** 
В зависимости от вашего дистрибутива Linux этапы установки и настройки могут отличаться. В данном руководстве мы рассмотрим подключение на Ubuntu 24.04 LTS.
:::

## Введение

NekoRay — это клиент для подключения к VPN для систем Android, Linux и Windows, предназначенный для безопасного проксирования интернет‑трафика через протоколы семейства v2Ray, таких как VLESS, VMess, Trojan, Shadowsocks, Hysteria и др.

::: info **Обратите внимание** 
Приложение не предоставляет VPN-сервера само по себе, пользователь должен самостоятельно настроить сервер или приобрести конфигурацию у стороннего VPN-провайдера. Получить конфигурацию можно в Telegram-боте [@SaturnVPN_bot](https://t.me/SaturnVPN_bot?start=docs).
:::

## Шаг 1. Установите приложение

::: details Автоматическая установка с помощью скрипта
Для большинства дистрибутивов вы можете использовать готовый скрипт для автоматической установки NekoRay с ярлыком в меню приложений

1. Для Debian/Ubuntu и производных систем установите зависимости командой:

```bash
sudo apt update && sudo apt install -y build-essential libfontconfig1 libqt5network5 libqt5widgets5 libqt5x11extras5 libqt5gui5
```

2. Запустите команду запуска скрипта в терминале (от имени вашего пользователя):

```bash
wget -qO- https://raw.githubusercontent.com/ohmydevops/nekoray-installer/main/installer.sh | bash
```
После завершения выполнения скрипта ярлык будет добавлен в меню приложений.

![Установка](/pages/linux/nekoray/1.webp)

Скрипт из репозитория [ohmydevops/nekoray-installer](https://github.com/ohmydevops/nekoray-installer) (автор: [ohmydevops](https://github.com/ohmydevops)).
:::

::: details Установка на Debian, Ubuntu и им подобных дистрибутивах
1. Загрузите образ [nekoray-4.0.1-2024-12-12-debian-x64.deb](https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-debian-x64.deb) с приложением Nekoray для Debian/Ubuntu с GitHub
2. Откройте загруженный `.deb` файл в вашем центре приложений и установите приложение
![Установка](/pages/linux/nekoray/2.webp)
:::

::: details Установка на других дистрибутивах 
1. Загрузите архив [nekoray-4.0.1-2024-12-12-linux64.zip](https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-linux64.zip) с бинарным файлом приложения Nekoray с GitHub
2. Распакуйте архив в домашнюю директорию
3. Сделайте файл запуска исполняемым. Для этого выполните команду, находясь в домашней директории:

```bash
chmod +x ~/NekoRay/nekoray/launcher
```

4. Создайте файл ярлыка приложения  - находясь в домашней директории выполните команду в терминале:

```bash
nano ~/.local/share/applications/nekoray.desktop
```

5. Вставьте туда следующее содержимое:

```ini
[Desktop Entry]
Name=NekoRay
Comment=NekoRay
Exec=/bin/bash -c "pkexec env DISPLAY=$DISPLAY XAUTHORITY=$XAUTHORITY $HOME/NekoRay/nekoray/launcher"
Icon=$HOME/NekoRay/nekoray/nekobox.webp
Terminal=false
StartupWMClass=NekoRay,nekoray,Nekoray,nekoRay
Type=Application
Categories=Network
```

6. Сделайте файл ярлыка исполняемым:

```bash
chmod +x ~/.local/share/applications/nekoray.desktop
```

7. Обновите кэш меню приложений:
::: code-group

```bash [GNOME]
sudo update-desktop-database
```

```bash [KDE Plasma]
sudo update-desktop-database
kbuildsycoca5
```

Теперь NekoRay должен появиться в меню приложений вашего окружения. Его можно найти по названию «NekoRay».
:::

## Шаг 2. Установите конфигурацию в приложение

::: info **Подсказка** 
Бесплатную конфигурацию можно получить в Telegram-боте [@SaturnVPN_bot](https://t.me/SaturnVPN_bot?start=docs)
:::

1. Скопируйте вашу конфигурацию (ссылку на подписку)
2. Нажмите «Сервер» → «Добавить из буфера обмена» или зажмите сочетание клавиш Ctrl+V
3. В появившемся окне выберите «Как подписку (создать новую группу)»

![Импорт конфигурации](/pages/linux/nekoray/3.webp)

## Шаг 3. Настройте приложение перед подключением

1. Перейдите в «Настройки» → «Основные настройки» → «Подписка»
2. Поставьте галочку в чекбоксе «Автоматическое обновление»
3. Нажмите «ОК» и закройте окно

![Настройки приложения](/pages/linux/nekoray/4.webp)

## Шаг 4. Подключитесь и пользуйтесь

1. Вернитесь на главную страницу NekoRay
2. Откройте вкладку с подпиской
3. Выберите нужный сервер: кликните правой кнопкой мыши по строке с сервером → «Запустить»
4. Поставьте галочку в чекбоксе «Режим TUN»
5. Пользуйтесь 🙂

::: info **В чем различие режимов работы?**
«**TUN режим**» (он же «Режим туннелирования», «VPN-режим»)
* Работает **для всех программ на компьютере**
* Работает как виртуальный сетевой адаптер на вашем компьютере
* Перехватывает весь интернет-трафик на уровне системы
* Требует режима администратора для запуска
* Может запускаться до 30 секунд после активации

«**Системный прокси**»
* Работает **только для программ, поддерживающими системные настройки прокси**
* Устанавливает настройки прокси в системные параметры Linux
* Не требует особых прав для запуска
:::

![Подключение к VPN](/pages/linux/nekoray/5.webp)

## Как обновить конфигурацию (подписку) в NekoRay?
Обновлять подписку в приложении необходимо при добавлении новых стран или изменении серверных параметров соединения со стороны VPN-провайдера.
1. Перейдите в «Настройки» → «Группы»
2. В открывшемся окне нажмите «Обновить все подписки» или «Обновить» в поле группы определенной подписки

![Подключение к VPN](/pages/linux/nekoray/6.webp)

::: warning **Возникли трудности?** 
При возникновении сложностей с настройкой или проблем с подключением, вы можете обратиться в службу поддержки [@SaturnVPN_Support](https://t.me/SaturnVPN_Support) – обязательно поможем!
:::