Scorekeeper
===========
Scorekeeper is a simple application for tracking player scores in basic turn-based games. It allows you to enter 
names for a number of players, then submit new point values to add or subtract for those players on their turns.

Demo
====
You can view a demo of this app at 
[http://stuff.jmichaelward.com/scorekeeper](http://stuff.jmichaelward.com/scorekeeper).

Installation
============
Simply clone this repository to a directory on your server, then access the application via that directory's domain 
path.

This project includes a Gruntfile. If you wish to modify the code base, you will first need to run `npm install` after 
cloning the repository to your local machine.

Minimum Requirements
====================
PHP 5.3+

Releases
=======
###### 0.1.1
- Remove unnecessary configuration file
- Remove jQuery dependency
- Update JavaScript model to use prototypical inheritance pattern
- Add placeholder Apple touch icon

###### 0.1.0
- Initial release

Potential Future Enhancements
=============================
- Direct selection of current player without submitting a score
- Controls for restarting a game with the same players, or starting a new game
- Controls for changing player order
- Keyboard shortcuts for entering player scores
- Refined visual presentation
