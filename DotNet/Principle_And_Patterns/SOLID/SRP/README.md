# Single Responsibility Principle (SRP)

## Overview

The **Single Responsibility Principle (SRP)** is one of the **SOLID principles** of object-oriented design. It states:

> "A class should have only one reason to change."

In simpler terms, each class should handle **only one responsibility**.  

**Benefits of SRP:**

- Improves **maintainability** – changing one responsibility won’t affect others.  
- Makes the code **easier to test**.  
- Increases **clarity and readability** of code.  

---

## SRP Implementation in This Project

This project demonstrates SRP in a **C# Console App** using **two approaches**:

1. **Not Use SRP** – Validation and persistence logic are combined in a single class (violates SRP).  
2. **Use SRP** – Validation and persistence logic are separated into different classes (follows SRP).  

---

## Folder Structure

```bash
SRP/
├── Models/
│   └── User.cs             # Shared User model from Commons project
├── NotUse/
│   └── UserManager.cs      # Violates SRP (validation + persistence in one class)
├── Use/
│   ├── UserValidator.cs    # Handles validation
│   ├── UserRepository.cs   # Handles data saving
│   └── UserManager.cs      # Coordinates validator + repository
├── Program.cs              # Demo & performance benchmark
└── README.md
```

## How to Run

- Make sure the Commons project (containing User.cs) is referenced in the SOLID project.

- Open Program.cs. It demonstrates:

- SRP Not Use Demo – single class handling everything.

- SRP Use Demo – proper SRP with separate classes.

- Performance Benchmark – measures execution time for 1 million iterations of both implementations.

- Build and run the project in Visual Studio.