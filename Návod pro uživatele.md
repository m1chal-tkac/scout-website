# Návod pro uživatele

1. [Vytvoření nového účtu](#vytvoření-nového-účtu) (Pouze pro administrátory)
2. [Přihlášení do Strapi](#příhlášení-do-strapi)
3. [Editor kontentu](#editor-kontentu)
4. [Knihovna Souborů](#knihovna-souborů)

## Vytvoření nového účtu

Než budou moci uživatelé měnit obsah stránek, musí jim administrátor vytvořit účet.

Settings / Administration panel / Users
![Vytvoření uživatele](https://user-images.githubusercontent.com/57263460/236894561-8da9d236-4c18-4333-ae76-9465ec5923f3.jpg)

Budete vyzváni k zadání Jména, Příjmení, Emailu a Role

### Přehled rolí

**Author** - Může vytvořit nové záznamy, upravit nebo smazat záznamy, které předtím vytvořil<br />
**Editor** - Může spravovat všechny záznamy<br />
**Super Admin** - Přístup ke všem funkcím
<br />
<br />

Po úspěšném zadání informací bude vytvořen nový uživatel.<br />
:warning: **Pozor, novému uživateli se nepošle email! Správce musí novému uživateli poslat vygenerovaný odkaz.**

## Příhlášení do Strapi

Na stránku Strapi se můžete dostat z vaší skautské stránky.

![Přihlášení](https://user-images.githubusercontent.com/57263460/236897576-906061cf-bc73-4740-82a3-e3c66ac9e2f3.jpg)

Pokud zapomenete své heslo, můžete si ho nechat obnovit, v takovém případě by vám měl do několika minut přijít email s instrukcemi.<br />
Jestli se tak nestane, kontaktujte svého správce.

## Editor kontentu

Editor kontentu umožňuje uživatelům upravovat záznamy podle práv, která jim byla přidělena správcem.

Content Manager / Collection Types / Družiny
![Content manager](https://user-images.githubusercontent.com/57263460/236898981-c9085647-4653-44f7-a97c-69f08510139d.jpg)

Záznamy jsou rozděleny do Collection types a Single types.
<br />
<br />

**Collection types**

Umožňují vytvářet několik záznamů se stejným scématem.

- Družiny
- Novinky
- Oddíly
- User (Nepoužívá se, je rozdílná od Settings / Administration panel / Users)
- Vedoucí

**Single types**

Pouze jeden záznam

- Středisko
- Úvodní stránka
  <br />
  <br />

### Vytvoření záznamu

Přečtěte si prosím [Návod pro autory](https://github.com/Michal124/scout-website/blob/master/N%C3%A1vod%20pro%20autory.md#vytvo%C5%99en%C3%AD-novinky)

**Nová data se načtou během přibližně 5 minut**<br />
:warning: **Pokud byl překročen limit 4 úprav denně, načtou se další den!**
<br />
<br />

### Družiny

| Pole               | Typ            | Povinné            | Obvyklá hodnota                   |
| ------------------ | -------------- | ------------------ | --------------------------------- |
| Obrázek            | Obrázek        | :heavy_check_mark: |                                   |
| Název              | Text           | :heavy_check_mark: |                                   |
| Url                | Text           | :heavy_check_mark: | Název malým písmem bez diakritiky |
| Typ                | Text           | :heavy_check_mark: | Chlapci / Dívky / Chlapci a dívky |
| Popis              | Textový editor | :heavy_check_mark: | Název + krátký popis              |
| Kontakty / Funkce  | Text           | :heavy_check_mark: | Rádce                             |
| Kontakty / Vedoucí | Vedoucí        | :heavy_check_mark: |                                   |
| Oddíl              | Oddíl          | :heavy_check_mark: |                                   |

<br />
<br />

### Novinky

| Pole    | Typ            | Povinné            | Obvyklá hodnota                   |
| ------- | -------------- | ------------------ | --------------------------------- |
| Obrázek | Obrázek        | :heavy_check_mark: |                                   |
| Název   | Text           | :heavy_check_mark: |                                   |
| Url     | Text           | :heavy_check_mark: | Název malým písmem bez diakritiky |
| Popis   | Text           | :heavy_check_mark: | Shrnutí novinky                   |
| Text    | Textový editor | :heavy_check_mark: |                                   |
| Oddíl   | Oddíl          |                    |                                   |

<br />
<br />

### Oddíly

| Pole               | Typ            | Povinné            | Obvyklá hodnota                                               |
| ------------------ | -------------- | ------------------ | ------------------------------------------------------------- |
| Obrázek            | Obrázek        | :heavy_check_mark: |                                                               |
| Název              | Text           | :heavy_check_mark: |                                                               |
| Url                | Text           | :heavy_check_mark: | Název malým písmem bez diakritiky                             |
| Typ                | Text           | :heavy_check_mark: | Chlapecký / Dívčí / Koedukovaný oddíl                         |
| Popis              | Textový editor | :heavy_check_mark: | Název + krátký popis                                          |
| Kontakty / Funkce  | Text           | :heavy_check_mark: |                                                               |
| Kontakty / Vedoucí | Vedoucí        | :heavy_check_mark: |                                                               |
| Novinky            | Novinky        |                    |                                                               |
| Družiny            | Družiny        | :heavy_check_mark: |                                                               |
| SocialMediaObrazek | Obrázek        | :heavy_check_mark: | Obrázek který se ukáže při sdílení na Facebooku / Twitteru... |

:warning: **Alespoň jeden z kontaktů by měl mít funkci vedoucí oddílu**

<br />
<br />

### Vedoucí

| Pole    | Typ     | Povinné            | Obvyklá hodnota            |
| ------- | ------- | ------------------ | -------------------------- |
| Fotka   | Obrázek | :heavy_check_mark: |                            |
| Jméno   | Text    | :heavy_check_mark: | Jméno Příjmení (Přezdívka) |
| Email   | Text    | :heavy_check_mark: |                            |
| Telefon | Text    | :heavy_check_mark: |                            |

<br />
<br />

### Středisko

| Pole                  | Typ  | Povinné            | Obvyklá hodnota                            |
| --------------------- | ---- | ------------------ | ------------------------------------------ |
| Název                 | Text | :heavy_check_mark: |                                            |
| Celý Název            | Text | :heavy_check_mark: | Junák - český skaut, středisko ... , z. s. |
| Sídlo                 | Text | :heavy_check_mark: | Ulice 11, 111 11 Město                     |
| MapyCzKod             | Text | :heavy_check_mark: | [zde](#mapycz-kód)                         |
| Číslo střediska       | Text | :heavy_check_mark: | 111.01                                     |
| Ičo                   | Text | :heavy_check_mark: | 111 11 111                                 |
| Číslo účtu            | Text | :heavy_check_mark: | 1234567890/1234                            |
| Email                 | Text | :heavy_check_mark: | stredisko@skaut.cz                         |
| Sociální sítě / Typ   | Text |                    |                                            |
| Sociální sítě / Odkaz | Text |                    |                                            |
| Fotky / Název         | Text | :heavy_check_mark: |                                            |
| Fotky / Odkaz         | Text | :heavy_check_mark: |                                            |

<br />
<br />

### Úvodní stránka

| Pole                 | Typ     | Povinné            | Obvyklá hodnota                                               |
| -------------------- | ------- | ------------------ | ------------------------------------------------------------- |
| Obrázek              | Obrázek | :heavy_check_mark: |                                                               |
| Slogan               | Text    | :heavy_check_mark: | Bez práce nejsou koláče                                       |
| Popis                | Text    | :heavy_check_mark: | Název + krátký popis                                          |
| Oddíly               | Oddíly  | :heavy_check_mark: |                                                               |
| Kontakty / Funkce    | Text    | :heavy_check_mark: |                                                               |
| Kontakty / Vedoucí   | Vedoucí | :heavy_check_mark: |                                                               |
| Klubovny / Obrázky   | Obrázky | :heavy_check_mark: |                                                               |
| Klubovny / Název     | Text    | :heavy_check_mark: |                                                               |
| Klubovny / Adresa    | Text    | :heavy_check_mark: |                                                               |
| Klubovny / Správce   | Text    | :heavy_check_mark: |                                                               |
| Klubovny / MapyCzKod | Text    | :heavy_check_mark: | [zde](#mapycz-kód)                                            |
| Sponzoři / Obrázek   | Obrázek | :heavy_check_mark: |                                                               |
| Sponzoři / Název     | Text    | :heavy_check_mark: |                                                               |
| Sponzoři / Odkaz     | Text    | :heavy_check_mark: |                                                               |
| SocialMediaObrazek   |         | :heavy_check_mark: | Obrázek který se ukáže při sdílení na Facebooku / Twitteru... |

<br />
<br />

### Mapy.cz kód

Kód Mapy.cz se dá získat po kliknutí na sdílet / Vložit mapu do vlastních stránek
![Mapy cz](https://user-images.githubusercontent.com/57263460/236908082-88198079-91e1-4b6e-aa7c-95091bd2cd00.jpg)

Vygeneruje se vám text ve formátu

```
<iframe style="border:none" src="https://frame.mapy.cz/s/kód" ...
```

Z tohoto textu musíte vybrat pouze kód:

- https://frame.mapy.cz/s/kód => kód
- https://frame.mapy.cz/s/jablko => jablko

## Knihovna souborů

![Knihovna souborů](https://user-images.githubusercontent.com/57263460/236912336-e3b6ad86-09ac-4ba8-9020-854ca2498904.jpg)
Knihovna souborů umožňuje uživatelům spravovat všechny nahrané soubory a organizování těchto souborů do složek.
