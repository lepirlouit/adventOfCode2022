# Create an empty dictionary to represent the outermost directory
filesystem = {}

# Add the "cd /" command to the list of commands
commands = ["cd /"]

# Read the input
while True:
  try:
    line = input()
    if line.startswith("$"):
      # If the line starts with "$", it is a command
      commands.append(line[1:].strip())
  except EOFError:
    # Stop when we reach the end of the input
    break

# Keep track of the current directory and the total size of each directory
current_dir = filesystem
total_sizes = {
    "/": 0
}

# Loop through the commands and execute them
for command in commands:
  if command == "cd /":
    # If the command is "cd /", move to the outermost directory
    current_dir = filesystem
  elif command.startswith("cd"):
    # If the command starts with "cd", move into the specified directory
    dir_name = command.split()[1]
    current_dir = current_dir[dir_name]
  elif command == "ls":
    # If the command is "ls", print out the contents of the current directory
    for key, value in current_dir.items():
      if isinstance(value, dict):
        # If the value is a dictionary, it is a directory
        print(f"dir {key}")
      else:
        # Otherwise, it is a file
        print(f"{value} {key}")
      # Add the file or directory's size to the total size of the current directory
      total_sizes[current_dir] += value


