```mermaid
graph TD;
    Start[Are you a visually oriented person?] --> |Yes| Visual[Are you a gamer?]
        Visual --> |Yes| Gamer[Are you a hard core gamer?]
            Gamer --> |Yes| Hard-core-gamer[C++]
            Gamer --> |No| Soft-core-gamer[Are you independentally minded?]
                Soft-core-gamer --> |Yes| gd-script[GDScript]
                Soft-core-gamer --> |No| c-sharp[C#]
        Visual --> |No| Non-gamer[Are you ready to struggle?]
            Non-gamer --> |Yes| Struggle[Are you ready to suffer?]
                Struggle --> |Yes| JS[JavaScript]
                Struggle --> |No| TS[TypeScript]
            Non-gamer --> |No| No-struggle[Do you care a little too much about your looks?]
                    No-struggle ---> |Yes| Figma[Figma]
                    No-struggle ---> |No| Mobile[Do you like overpriced stuff?]
                        Mobile ---> |Yes| Swift[Swift]
                        Mobile ---> |No| Kotlin[Kotlin]
    Start --> |No| Non-visual[Are you a data nerd?]
        Non-visual --> |Yes| Data-nerd[Python, Julia, R, MATLAB]
        Non-visual --> |No| Non-data-nerd[Go, Ruby, Rust, Java, PHP, Bash]
```

For [Python, Julia, R, MATLAB]

First question: Do you think you're the shit?

Yes -> Python or Julia

    For Python or Julia: Do you think you're extremely cool? Yes -> Julia. No -> Python.

No -> R or MATLAB

    For R or MATLAB: Do you think imagine yourself being in the movie Moneyball? Yes -> R. No -> MATLAB.


Non-visual --> |No| Non-data-nerd[Go, Ruby, Rust, Java, PHP, Bash]

First question: Do you want to make money? Yes -> [Java, PHP] No -> [Go, Ruby, Bash, Rust]
