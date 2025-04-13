Feature: User Login
    @login
    Scenario: Successful login
        Given I am on the login page
        When I log in with valid credentials
        Then I should see the dashboard

    @login
    Scenario: Successful login1
        Given I am on the login page
        When I log in with valid credentials
        Then I should see the dashboard

    @sanity
    Scenario: Check get started link
        Given I am on home page
        When I click link "Get started"
        Then I see in title "Installation"