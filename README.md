# 💸 Who Wants to Be a Millionaire Quiz

## 📚 Navigation

1. [Task](#task)
2. [Requirements](#requirements)
3. [Flexibility Considerations](#flexibility-considerations)
4. [Technical Stack](#technical-stack)
5. [Installation and Running the Project](#installation-and-running-the-project)
6. [Features](#features)
7. [Folder Structure](#folder-structure)
8. [JSON Configuration Example](#json-configuration-example)
9. [Linting and Formatting](#linting-and-formatting)
10. [License](#license)

## Task

Implement the basic functionality of the "Who Wants to Be a Millionaire" game:

- The player answers one of 12 questions in turn.
- Each question has at least 4 answer options and at least one correct one.
- If the answer is correct, the player moves to the next question. If the answer is incorrect, the player goes to the final screen.
- The final screen should show the overall game result. The design for the layout is [provided](https://www.figma.com/file/tIZEZn2HTAeSDQRzoOzvXE/Front-end-test%2C-Headway). The layout should be adaptive.

## Requirements

- Use this [layout](https://www.figma.com/file/tIZEZn2HTAeSDQRzoOzvXE/Front-end-test%2C-Headway) for the layout.
- Make the layout adaptive (from iPhone 8 to 4k displays).
- Perform the layout without using CSS frameworks.
- The game configuration (questions, answers, money for the correct answer, etc.) should be in JSON format.
- The configuration should be extendable: more or fewer answer options for questions; several correct answers, etc.
- Place the result on GitHub with md-instructions for installation and launch.
- Complete the task using NextJs and deploy it on Vercel.
- All client code must fully comply with the "out of the box" eslint / airbnb rules.
- All client code should be fully typed using TypeScript.

## Flexibility Considerations

- Code that will be easy to expand and maintain.
- Architectural organization of the application.
- Correct handling of exceptional situations.

## Technical Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **State Manager**: Redux Toolkit(thunk, reselect)
- **Linting**: ESLint with Airbnb configuration
- **Deployment**: Vercel
- **Architecture**: FSD (Feature-Sliced Design)

## Installation and Running the Project

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KhromenkoDaniel/headway-millionaire-game.git
   cd headway-millionaire-game
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Features

- Interactive quiz game with 12 questions.
- Adaptive design for various screen sizes.
- JSON-based configuration for easy customization.

## Folder Structure

The project follows the FSD (Feature-Sliced Design) architecture, which organizes code by features and layers.

## JSON Configuration Example

```json
[
  {
    "id": 1,
    "question": "What is the capital of France?",
    "answers": [
      { "answer": "Berlin", "id": 1, "correct": false },
      { "answer": "Madrid", "id": 2, "correct": false },
      { "answer": "Paris", "id": 3, "correct": true },
      { "answer": "Rome", "id": 4, "correct": false }
    ],
    "sum": 500
  }
]
```

## Linting and Formatting

- The project uses ESLint with Airbnb configuration to ensure code quality.
- Run linting with:

  ```bash
  npm run lint
  ```

## License

This project is licensed under the MIT License.

