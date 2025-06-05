Feature: Demo QA

  Scenario: Fill in form on demo QA website
    Given I navigate to url "https://demoqa.com/text-box"
    When I fill in the form fields with
      | username | email        | current address | permanent address |
      | testuser | test@test.nl | testweg 2       | testweg 4         |
    And I submit the form
    Then the result window shows the submited values
      | Name:testuser                 |
      | Email:test@test.nl            |
      | Current Address :testweg 2    |
      | Permananet Address :testweg 4 |
