Feature: Squerist Home Page tests

  Scenario: Check title
    Given I am on Squerist home page
    When I click on the menu link "Werken bij"
    Then I see browser title "Werken bij"
    And heading title "Wij brengen je verder"
