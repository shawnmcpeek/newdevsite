print("Welcome to my Disney Quiz!")

playing=input("Do you want to play a game? yes or no. ")

if playing != "yes":
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
if answer == "Mortimer" or "Mortimer Mouse" or "Pete" or "Pete the Cat":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

answer = input("What is the name of the temple on the Indy ride? ")
if answer == "Temple of the Forbidden Eye" or "The Temple of the Forbidden Eye":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

answer = input("Should you pet the skulls while in line on the Indy ride? ")
if answer == "Yes" or "yes":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

answer = input("How many ghosts live in the Haunted Mansion? ")
if answer == "999":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

answer = input("What is the 'Wildest Ride in the Wilderness'? ")
if answer == "Big Thunder Mountain" or "Big Thunder Mountain Railroad":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

answer = input("What creature stole Dad's wallet? ")
if answer == "Abominable Snowman" or "Yeti":
    print('Correct!')
    score += 1
else:
    print("Incorrect!")

print("You got " +str(score) + " questions correct!")
print("You got " +str((score/7)*100) + "% correct!")

input('Press ENTER to exit')
