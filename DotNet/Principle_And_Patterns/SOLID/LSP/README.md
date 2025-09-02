# LSP

## Overview
- The **Liskov Substitution Principle (LSP)** is the **L** in SOLID principles of object-oriented programming.  
- It states that:  
> **Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.**

This means that **derived classes must be completely substitutable for their base classes**.  
If a subclass changes the expected behavior of the parent, it violates LSP.

---

## Benefits of LSP
- Ensures **correctness** of inheritance hierarchies.  
- Prevents **unexpected behavior** when substituting derived classes.  
- Improves **reliability** and **reusability** of code.  
- Encourages the use of **interfaces and abstractions** instead of forcing inheritance.  

---

## LSP Implementation in This Project

This project demonstrates LSP in a **C# Console App** using two approaches:

###  Without LSP (Bad Example)
- `Rectangle` is a base class.  
- `Square` inherits from `Rectangle`.  
- Setting different `Width` and `Height` on `Square` breaks expected behavior.  
  - Example: `Width = 5`, `Height = 10` → Wrong area (100 instead of 25).  

###  With LSP (Good Example)
- `IShape` interface defines `Area()`.  
- `RectangleShape`, `SquareShape`, and `CircleShape` implement `IShape`.  
- Each shape follows its own correct area formula.  
- Any shape can substitute `IShape` without breaking behavior.  

---

## Folder Structure

```bash
LSP/
│
├── NotUse/
│   ├── Rectangle.cs
│   └── Square.cs
│
├── Use/
│   ├── IShape.cs
│   ├── RectangleShape.cs
│   ├── SquareShape.cs
│   └── CircleShape.cs
├── Program.cs
└── README.md

```

## How to Run
