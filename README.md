<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:6366f1&height=100&section=header" width="100%"/>

# Programming Test

A simple and customizable programming quiz application that allows users to create and take programming tests using JSON files.

## Features

- **Custom Quizzes:** Create your own programming quizzes using JSON.
- **Multiple Choice Questions:** Each question has four possible answers.
- **Automatic Scoring:** Answers are checked automatically and the final score is calculated.
- **Custom Languages:** Create quizzes for any programming language or subject.
- **Easy to Use:** No database or server-side programming is required.
- **User-Controlled Content:** Quiz questions are provided by the user. No predefined question database is included.

## How It Works

The application reads a JSON file named `questions.json` and uses its data to generate a quiz.

The JSON file contains:
- The quiz language.
- The programming language or subject.
- A list of questions.
- Four answer options for each question.
- The correct answer for each question.

You can create as many quizzes as you want by changing the JSON file.

## JSON Structure

Your `questions.json` file must follow this structure:

```json
{
    "testlanguage": "English",
    "language": "Python",
    "questions": [
        {
            "id": 1,
            "question": "How do you create a variable in Python?",
            "options": [
                "var x = 10",
                "let x = 10",
                "x = 10",
                "int x = 10"
            ],
            "answer": 2
        }
    ]
}
```

### JSON Fields

| Field | Description |
|---|---|
| `testlanguage` | The language used for writing questions and answers. |
| `language` | The programming language or subject of the quiz. |
| `questions` | An array containing all quiz questions. |
| `id` | A unique identifier for each question. |
| `question` | The question text. |
| `options` | An array containing exactly four answer choices. |
| `answer` | The index of the correct answer. |

**Important:** Answer indexes start at `0`, not `1`.

For example:
- `0` = First option
- `1` = Second option
- `2` = Third option
- `3` = Fourth option

## Creating Your Own Quiz

Since this project does not provide a public question database, you are responsible for creating your own `questions.json` file.

Follow these steps:

1. Open a text editor such as Visual Studio Code or Notepad.
2. Create a new file named `questions.json`.
3. Copy the JSON structure shown above.
4. Change the programming language and question language.
5. Add your own questions and four answer choices.
6. Set the correct answer index for every question.
7. Save the file in the same directory as the application.

You can add as many questions as you want by adding more objects to the `questions` array.

**Remember:** JSON syntax is strict. Use double quotes (`"`), commas between properties, and square brackets for arrays. Do not add a comma after the last item.

## Requirements

- A modern web browser.
- A local web server to load JSON files using `fetch()` (for example, VS Code Live Server).

## License: MIT

Copyright (c) 2026 [Aria Karami](https://github.com/ariakr1394)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:6366f1&height=100&section=footer" width="100%"/>
