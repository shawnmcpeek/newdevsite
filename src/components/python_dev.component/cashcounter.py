while True:
    print("Cash Counter")
    a = int(input("Enter the number of 100s. "))
    b = int(input("Enter the number of 50s. "))
    c = int(input("Enter the number of 20s. "))
    d = int(input("Enter the number of 10s. "))
    e = int(input("Enter the number of 5s. "))
    f = int(input("Enter the number of 2s. "))
    g = int(input("Enter the number of 1s. "))
    check = float(input("Enter the amount of all checks. "))
    if input("Are you counting coins? ") == "yes":
        h = int(input("Enter the number of dollar coins. "))
        i = int(input("Enter the number of 50c coins. "))
        j = int(input("Enter the number of quarters. "))
        k = int(input("Enter the number of dimes. "))
        l = int(input("Enter the number of nickels. "))
        m = int(input("Enter the number of pennies. "))
        sumtotal = (
            (a * 100)
            + (b * 50)
            + (c * 20)
            + (d * 10)
            + (e * 5)
            + (f * 2)
            + (g * 1)
            + check
            + (h * 1)
            + (i * 0.5)
            + (j * 0.25)
            + (k * 0.10)
            + (l * 0.05)
            + (m * 0.01)
        )
        print(sumtotal)
    else:
        sum = (
            (a * 100)
            + (b * 50)
            + (c * 20)
            + (d * 10)
            + (e * 5)
            + (f * 2)
            + (g * 1)
            + check
        )
        print(sum)
