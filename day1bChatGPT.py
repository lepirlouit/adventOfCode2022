# Read the input
calories = []
while True:
  try:
    line = input()
    if line == '':
      # If we encounter a blank line, start a new list for the next Elf's inventory
      calories.append([])
    else:
      # Otherwise, add the number of Calories to the current Elf's list
      calories[-1].append(int(line))
  except EOFError:
    # Stop when we reach the end of the input
    break

# Find the top three Elves carrying the most Calories
top_three = [0, 0, 0]
for elf_calories in calories:
  total = sum(elf_calories)
  if total > top_three[0]:
    # Insert the total number of Calories into the appropriate place in the list
    top_three = [total] + top_three[:2]
  elif total > top_three[1]:
    top_three = [top_three[0], total] + top_three[2:3]
  elif total > top_three[2]:
    top_three = top_three[:2] + [total]

# Print the result
print(
    f"The top three Elves are carrying a total of {sum(top_three)} Calories.")
