Feature: Squerist Home Page test with POM

  Scenario: Navigate with banner
    Given I am on the home page
    When I click on sofware testen banner
    Then I see browser title "Software testen"
    And heading title "Software testen"
