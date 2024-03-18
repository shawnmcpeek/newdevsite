import requests
import random  # Add this line to import the random module

API_KEY = "21a5a9949b42b25d67fd1eb6c6878bd8"
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

coldstatements = [
    "Too cold! Minnesota thinks it's warm.",
    "OK, why did I decide to live here?",
    "OK, who left the freezer door open?",
    "Ah, winter - the season that makes me question why I live in a place where the air hurts my face.",
    "Cold weather is nature's way of telling you that staying in bed is always a viable option.",
    "Why do I love winter? Oh, I don't. I just enjoy complaining about it.",
    "The only ice I want to encounter is in my drink, not on the sidewalk trying to trip me.",
    "Winter is the time of year when my laundry basket becomes a permanent pile of sweaters and blankets.",
    "You know it's cold outside when you go outside and it's cold.",
    "Winter is the season of chapped lips and questionable fashion choices in an attempt to stay warm.",
    "I like my friendships how I like my winter weather - icy and distant.",
    "Cold weather: because frostbite is just nature's way of saying you've overstayed your welcome outside.",
    "The only thing getting me through winter is the promise of hot cocoa and the hope that my heating bill won't bankrupt me.",
]
warmstatements = [
    "I guess if mild and sunny is your thing, it's ok.",
    "I saw this once. It was the only nice day of the year in Wisconsin.",
    "I can get used to this. Wait, it'll change.",
    "Ah, the perfect temperature - when my coffee stays warm without turning into a scalding lava potion.",
    "Warm weather: because sweating through three layers of clothing is not a fashion statement I'm going for.",
    "Mild weather is like that reliable friend who never gets too clingy or too distant - just right in the middle.",
    "Warm weather is the only time I can convince myself that I'm an outdoorsy person. Emphasis on 'convince.'",
    "Mild temperatures - when you can't blame the weather for your mood, so you have to find other excuses.",
    "Warm weather: the only time of year when sunscreen becomes my daily armor against the mild threat of sunburn.",
    "This weather is so mild, it's practically the Switzerland of meteorological conditions - neutral and uneventful.",
    "I like my weather how I like my gossip - comfortably warm but not hot enough to cause a meltdown.",
    "Mild weather is just Mother Nature's way of saying, 'I got your back - you won't need that extra layer today.'",
]
hotstatements = [
    "I must have done something wrong because this feels like he--",
    "Since when did I move to Death Valley?",
    "Siri, did I leave the heater on?",
    "Who needs a gym when you can break a sweat just by stepping outside in this 'pleasant' weather?",
    "Hot weather: because walking from the car to the front door should feel like a desert expedition.",
    "Who needs a sauna when you can just step outside during a heatwave and instantly regret your life choices?",
    "The only sizzling I want to hear is my food on the grill, not my skin on the pavement.",
    "Hot weather is the time of year when my air conditioner becomes my most prized possession - sorry, family.",
    "When it's this hot, my favorite activity is trying to find shade like it's a game of real-life hide-and-seek with the sun.",
    "Hot weather is the only season where my car seatbelt feels like it's plotting against me.",
    "If sweating were an Olympic sport, I'd be a gold medalist by now. Thanks, summer!",
    "Hot weather is nature's way of telling you to stay indoors and contemplate the life choices that led you to this moment.",
    "I like my weather how I like my coffee - hot, but not so hot that it burns my tongue for the next week.",
    "Summer: when the idea of going to the beach sounds great until you remember you have to endure the scalding sand and relentless sun.",
]
rainstatements = [
    "Did someone order wet? I didn't.",
    "Of course, I forgot my umbrella, coat, sleeves,,,",
]
snowstatements = [
    "What's this? Oh, wait, I don't like this.",
    "Since when was a shovel a necessary tool for something other than bodies?",
]


# Add the data() function
def data():
    global temperature


# Modify the sillystatement() function
def sillystatement():
    if temperature < 50:
        print(
            random.choice(coldstatements)
        )  # Use random.choice() to select a random statement
    elif 50 < temperature <= 80:
        print(random.choice(warmstatements))
    elif temperature > 80:
        print(random.choice(hotstatements))


# Modify the weatherapp() function
def weatherapp():
    global temperature  # Add this line to access the global variable
    city = input("Enter a city name: ")
    request_url = f"{BASE_URL}?appid={API_KEY}&q={city}"
    response = requests.get(request_url)

    if response.status_code == 200:
        data = response.json()
        weather = data["weather"][0]["description"]
        print("Weather:", weather)
        temperature = round((data["main"]["temp"] - 273.15) * (9 / 5) + 32, 2)
        print("Temperature:", temperature, "in F")
        sillystatement()  # Call the sillystatement function
    else:
        print("An error occurred.")

    choice = input("Would you like to check the weather again? Y or N. ")
    if choice.lower() == "y":
        weatherapp()
    else:
        quit()


weatherapp()
