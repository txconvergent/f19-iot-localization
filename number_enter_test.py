import count_uploader as uploader

while True:
    try:
        n = int(input("Enter a number to send to database: "))
        uploader.upload(n)
        uploader.print_db()

    except TypeError:
        print("please enter a number")
        continue
