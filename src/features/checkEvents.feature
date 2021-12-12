Feature: Check Events
    As a developer
    I want the demo app to trigger the correct events during cart flow

    Background:
        
        
    Scenario: Add to Cart triggers events 8197, 48 and 37 at least
        Given I open the site "/"
        When I click on the element "div[style*=mangocados] > div > a.featured-fruit-name"
        Then I expect that an event is recorded
        And I expect that event "8197" is recorded with args "Product Added"
        And I expect that event "48" is recorded with args "Mangocados embiggen user cart."
        And I expect that event "37" is recorded with args "https://fruitshoppe.firebaseapp.com/#/market"

    Scenario: going to cart triggers events 48 and 37 at least
        When I click on the element "a.cart"
        Then I expect that an event is recorded
        And I expect that event "48" is recorded with args "USER is going to /cart"
        And I expect that event "37" is recorded with args "https://fruitshoppe.firebaseapp.com/#/cart"

    Scenario: going to cart triggers events 48 and 37 at least
        When I click on the element "a.cta-go-checkout"
        Then I expect that an event is recorded
        And I expect that event "48" is recorded with args "USER is going to /checkout"
        And I expect that event "37" is recorded with args "https://fruitshoppe.firebaseapp.com/#/checkout"

    Scenario: Entering first name triggers event 18
        When I set "first" to the inputfield "#billing-firstname"
        Then I expect that an event is recorded
        And I expect that event "18" is recorded with args "first"

    Scenario: Entering last name triggers event 18
        When I set "last" to the inputfield "#billing-lastname"
        Then I expect that an event is recorded
        And I expect that event "18" is recorded with args "last"

    Scenario: Entering street address name triggers event 18 with obfuscation
        When I set "111 main" to the inputfield "#billing-address-1"
        Then I expect that an event is recorded
        And I expect that event "18" is recorded with args "￿1"
        And I expect that event "18" is recorded with args "￿2"
        And I expect that event "18" is recorded with args "￿3"
        And I expect that event "18" is recorded with args "￿3 0 1"
        And I expect that event "18" is recorded with args "￿5"
        And I expect that event "18" is recorded with args "￿6"
        And I expect that event "18" is recorded with args "￿7"
        And I expect that event "18" is recorded with args "￿8"