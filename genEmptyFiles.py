import os
import pathlib
path = pathlib.Path(__file__).parent.resolve()
for i in range(1, 26):
    d = str(i)
    if len(d) == 1:
        d = "0" + d
    dir_path = path.joinpath("day_" + d)
    os.mkdir(dir_path)
    file1 = os.path.join(dir_path, "day_" + d + "_part_one.js")
    file2 = os.path.join(dir_path, "day_" + d + "_part_two.js")
    input_file1 = os.path.join(dir_path, "testDay" + d + ".txt")
    input_file2 = os.path.join(dir_path, "inputDay" + d + ".txt")

    f1 = open(file1, "w")
    f1.write(f"const fs = require('fs');\nconst contentBuffer = fs.readFileSync('./"+"testDay" + d + ".txt"+"');\n// const contentBuffer = fs.readFileSync('./" +
             "inputDay" + d + ".txt"+"');\nconst content = contentBuffer.toString();\nconst lines = content.split('\\n');")
    f1.close()
    f2 = open(file2, "w")
    f2.write(f"const fs = require('fs');\nconst contentBuffer = fs.readFileSync('./"+"testDay" + d + ".txt"+"');\n// const contentBuffer = fs.readFileSync('./" +
             "inputDay" + d + ".txt"+"');\nconst content = contentBuffer.toString();\nconst lines = content.split('\\n');")
    f2.close()

    if1 = open(input_file1, "w")
    if1.close()
    if2 = open(input_file2, "w")
    if2.close()
