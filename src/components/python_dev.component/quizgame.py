print("Welcome to my Disney Quiz!")

playing = input("Do you want to play a game? yes or no. ")

if playing.lower() != "yes":
    quit()

print("Okay! Let's play!")
print("Make sure to capitalize correctly!")
score = 0

answer = input("What year did Steamboat Willy come out? ")
if answer == "1928":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("Who was Mickey's original big rival? ")
if answer.lower() in ["mortimer", "mortimer mouse", "pete", "pete the cat"]:
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("What is the name of the temple on the Indy ride? ")
if answer.lower() in ["temple of the forbidden eye", "the temple of the forbidden eye"]:
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("Should you pet the skulls while in line on the Indy ride? ")
if answer.lower() == "yes":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("How many ghosts live in the Haunted Mansion? ")
if answer == "999":
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("What is the 'Wildest Ride in the Wilderness'? ")
if answer.lower() in ["big thunder mountain", "big thunder mountain railroad"]:
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

answer = input("What creature stole Dad's wallet? ")
if answer.lower() in ["abominable snowman", "yeti"]:
    print("Correct!")
    score += 1
else:
    print("Incorrect!")

print("You got " + str(score) + " questions correct!")
print("You got " + str((score / 7) * 100) + "% correct!")

input("Press ENTER to exit")
