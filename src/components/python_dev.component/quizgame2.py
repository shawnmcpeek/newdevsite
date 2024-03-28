# Import the necessary module for the interaction
import sys

# Welcome message
print("Welcome to my Disney Quiz!")

# Ask if the user wants to play
playing = input("Do you want to play a game? yes or no. ")

# Check if the user wants to play
if playing.lower() != "yes":
    quit()

# Start the game
print("Okay! Let's play!")
print("Make sure to capitalize correctly!")
score = 0

# Questions and answers
questions = [
    ("What year did Steamboat Willy come out? ", "1928"),
    ("Who was Mickey's original big rival? ", "Mortimer Mouse"),
    (
        "What is the name of the temple on the Indy ride? ",
        "Temple of the Forbidden Eye",
    ),
    ("Should you pet the skulls while in line on the Indy ride? ", "No"),
    ("How many ghosts live in the Haunted Mansion? ", "999"),
    ("What is the 'Wildest Ride in the Wilderness'? ", "Big Thunder Mountain Railroad"),
    ("What creature stole Dad's wallet? ", "Abominable Snowman"),
]

# Ask questions and check answers
for question, answer in questions:
    user_answer = input(question)
    if user_answer.strip().lower() == answer.lower():
        print("Correct!")
        score += 1
    else:
        print("Incorrect!")

# Display score
print("You got", score, "out of", len(questions), "questions correct!")
print("You got", (score / len(questions)) * 100, "% correct!")

# Flush stdout to ensure output is displayed in the console immediately
sys.stdout.flush()
