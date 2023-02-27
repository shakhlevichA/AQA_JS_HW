
Feature: E2E tests for https://www.kinopoisk.ru/

    Scenario: As a user I can open site https://www.kinopoisk.ru/
        Given I open  https://www.kinopoisk.ru/
        Then I can see a header text message Кинопоиск. Все фильмы планеты.

    Scenario Outline: As a user I can find film by search input field
        Given I open https://www.kinopoisk.ru/
        When I type <title>
        And Press search button
        Then I can see a name result <resultText>

        Examples:
            | title     | resultText |
            | Один дома | Один дома  |
            | йц        | йц         |
            | 1         | 1          |


    Scenario: As a user I type valid text in search field
        Given I open https://www.kinopoisk.ru/
        When I type Avatar
        And Press search button
        Then I can see relevant link including text Avatar

    Scenario: As a user I type invalid text in search field
        Given I open https://www.kinopoisk.ru/
        When I type ьб
        And Press search button
        Then I can see alarm message К сожалению, по вашему запросу ничего не найдено...

    Scenario: As a user I can login on the website
        Given I open https://www.kinopoisk.ru/
        When I click Войти button
        And Type login shaklevich-and2023
        And Type password shaklevich
        Then I can see my photo and loginName at account


    Scenario: As a register user I can add movie to 'Буду смотреть' section
        Given I open https://www.kinopoisk.ru/
        When I type Avatar
        And Press search button
        And Click on the first relevant link
        And Click on the button Буду смотреть
        And Click on the bookmark label at the header
        Then I can find movie Аватар at the Буду смотреть section