print("--- Personalised Data Analysis ---")

# Variables
name = "Khushi"
roll = "2506042"
age = 19  

# Calculations
roll_int = int(roll)
last_two_digits = int(roll[-2:])
sum_result = age + last_two_digits
name_length = len(name)
product_result = age * name_length

# Output
print("Name:", name)
print("Roll no (string):", roll)
print("Roll no (integer):", roll_int)
print("Age:", age)
print("Last two digits of roll number:", last_two_digits)
print("Age + last two digits:", sum_result)
print("Length of name:", name_length)
print("Age * length of name:", product_result)