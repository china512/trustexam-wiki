# Возможные проблемы при установке desktop-приложения

**Ниже представлена инструкция по устранению ошибок, если у Вас не получается установить или открыть приложение.**

### Инструкция Windows

При установке на Windows, если появляются предупреждения или ошибки, необходимо выбрать: «Всё равно установить» и «Всё равно сохранить», если система отмечает приложение как недоверенное.

![windows-trouble1.jpg](/troubleshooting/windows-trouble1.jpg)
![windows-trouble2.jpg](/troubleshooting/windows-trouble2.jpg)
![windows-trouble3.jpg](/troubleshooting/windows-trouble3.jpg)
![windows-trouble4.jpg](/troubleshooting/windows-trouble4.jpg)
![windows-trouble5.jpg](/troubleshooting/windows-trouble5.jpg)
![windows-trouble6.jpg](/troubleshooting/windows-trouble6.jpg)

---

### Инструкция Mac

На Mac установка выполняется методом перетаскивания приложения в папку Applications. Если при запуске приложения появляется ошибка, необходимо выполнить:

![mac-trouble1](/troubleshooting/mac-trouble1.png)

![mac-trouble2](/troubleshooting/mac-trouble2.png)

![mac-trouble3](/troubleshooting/mac-trouble3.png)

![mac-trouble4](/troubleshooting/mac-trouble4.png)

![mac-trouble5](/troubleshooting/mac-trouble5.png)

> Перейти в: Настройки → Конфиденциальность и безопасность (Privacy and Security) → Под сообщением об OqylyqProctoring нажать «Открыть в любом случае» (Open Anyway). Также проверьте разрешения на запись экрана / фронт-камера / микрофон

---

![error-app](/troubleshooting/error-app.jpg)

![terminal-command](/troubleshooting/terminal-command.jpg)

Если не получилось исправить данную ошибку с установкой в настройкках, вам нужно через Terminal установить и запустить данный код для ручной установки:

```zsh
xattr -cr /Applications/OqylyqProctoring.app
```