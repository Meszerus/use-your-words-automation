# Use Your Words Automation

This is a gameplay automation tool for the multi-platform party game, _Use Your Words_ (released in 2017). The tool does **not** directly interact with your console, the game, or any Xbox-related services, and is thus not a "hack" or "mod", but rather an input-automation tool to assist the input peripheral.

The main reason for using the tool is for the efficient pursual of unlocking the game's Xbox achievements, for "achievement hunter" players.

## Contributing

Feel free to contribute to the repo. There are two expected types of contributions expected:
* Corrections in case the game's input UI is changed in the future.
* The fixing of bugs.

## Usage

Whilst there are multiple game types (Sub The Title, Extra! Extra!, Blank-O-Matic, Survey Says), they all have the same two phases: Input mode, and Vote mode.

The tool automates the input and voting modes, thus progressing whole game sessions as quickly as possible, which is ideal for obtaining the grind achievements. There are only two instances of neccessary manual input ever required from you the user: first is to set up the initial game session on the Xbox, and then create multiple browser profiles (super easy in Chrome) which then join the room code as players, and secondly, on the conclusion of a game session, to hit the "Play Again" option on the Xbox to begin a new session (which the existing profiles will automatically join).

### Initial Achievements

Set up a room in the Xbox game, making sure to set "Family Mode" on in the pause menu, and then create five Chrome profiles. Since you'll already have a default Chrome profile, this gives you a total of six "players". In the browser window for each profile, have them join the room code as a player. For each profile, open the "DevTools" (this can be done by right-clicking the page and choose Inspect, OR pressing F12 on the keyboard). In the "Console" tab of DevTools, copy-and-paste [the included Javascript code](/run-in-browser-console.js) and then hit Enter on your keyboard. The console will reply with "undefined", but the code you've just executed will now be part of the webpage.

Once you've done this for all profiles, hit the "Start Game" option on the Xbox game. The Chrome profile windows will then automatically fill out all the Input and Vote modes, meaning no manual intervention is needed until the end of the game session.

By the conclusion of the game session, the following achievements will have popped:

- For finishing a Family Mode game session:
    - **Party On!**: Completed your first Party Match!
    - **All In The Family**: Completed a Party Match with "Family Mode" enabled.

- For the emoji's that are inputted ("💀💀💀💀💀💀" on the first instance; "💩💩💩💩💩" every time after):
    - **Emoji-noji**: Used an emoji in an answer!
    - **Call of Doody**: Used five 💩 emoji in an answer!
    - **Code Monkey**: Entered a secret code as an answer! _(the skulls is the secret code)_
    - **Egg Hunter**: Cracked the code and heard Kristina Baker's cameo! _(the skulls activate this)_

- Since all profiles will vote for the answers of a singular profile:
    - **Sweep Stakes**: Had a single answer get five votes in a six-player game!
    - **The Bronze Clown**: Scored 30,000 points or more in a single session!
    - **The Silver Jester**: Scored 45,000 points or more in a single session!
    - **The Bronze Clown**: Scored a perfect game with 6 players! _(score of 60,000)_

- Since the profiles are all inputting the exact same thing:
    - **Synchronicity**: Two players wrote the same answer.
    - **Super Synchronicity**: Three players wrote the same answer!
    - **Mega Synchronicity**: Mega players wrote the same answer!
    - **Ultra Synchronicity**: Five players wrote the same answer!
    - **Now You're Doing It On Purpose...**: Six players wrote the same answer!

### The Grind

After you've done your first game session as per the section "Initial Achievements", set up a new room. Repeat the same set-up steps (though whether or not you keep Family Mode on is up to your own preference), except this time just for three total profiles, for the sake of expediency. Because at this point, you want to grind out the long-term achievements:

- **Party All Night!**: Completed 10 Party Matches!
- **The Party Don't Stop**: Completed 50 Party Matches!
- **Party Like It's 1999!**: Played 1999 mini-games!

Using the tool, a typical 3-player game session will take 10 minutes.