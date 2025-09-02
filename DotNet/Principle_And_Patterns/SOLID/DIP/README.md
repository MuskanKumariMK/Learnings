# Dependency Inversion Principle (DIP)

## Definition
The **Dependency Inversion Principle (DIP)** is the **D** in SOLID principles of object-oriented programming.  
It states that:  

> **High-level modules should not depend on low-level modules. Both should depend on abstractions.**  
> **Abstractions should not depend on details. Details should depend on abstractions.**

---

## Problem It Solves
In traditional code, high-level classes (business logic) directly depend on low-level classes (implementations).  

This creates **tight coupling** → if the implementation changes, the high-level code also breaks.  

DIP encourages using **interfaces (abstractions)** so high-level modules only know about abstractions, not concrete classes.  

---

## Benefits of DIP
- Reduces **tight coupling** between classes.  
- Improves **maintainability** and **scalability**.  
- Makes code **easier to test** with dependency injection.  
- Encourages **reuse of high-level logic** with different implementations.  

---

## DIP Implementation in This Project

This project demonstrates DIP in a **C# Console App** using two approaches:

###  Without DIP (Bad Example)
- `UserManager` directly depends on `UserRepository`.  
- If we want to switch from SQL to Mongo, we must **modify `UserManager`**.  
- This creates strong dependency and breaks **Open/Closed Principle** too.  

###  With DIP (Good Example)
- An abstraction `IUserRepository` is created.  
- `UserManager` depends only on `IUserRepository`, not on any specific implementation.  
- `SqlUserRepository` and `MongoUserRepository` implement `IUserRepository`.  
- At runtime, we can **inject different repositories** without changing `UserManager`.  

---
---

## Folder Structure

```bash
DIP/
│
├── NotUse/
│   └── UserManager.cs
│
├── Use/
│   ├── IUserRepository.cs
│   ├── UserManager.cs
│   ├── SqlUserRepository.cs
│   └── MongoUserRepository.cs
│
├── Common/
│   └── Performance/
│       └── PerformanceTester.cs
│
├── Program.cs
└── README.md
```