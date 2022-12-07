
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

# Find the Elf carrying the most Calories
max_calories = 0
max_elf = -1
for i, elf_calories in enumerate(calories):
  total = sum(elf_calories)
  if total > max_calories:
    max_calories = total
    max_elf = i

# Print the result
print(f"Elf {max_elf + 1} is carrying the most Calories with a total of {max_calories}.")