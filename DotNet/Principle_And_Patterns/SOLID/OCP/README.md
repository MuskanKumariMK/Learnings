# (OCP)

## Overview
- The Open/Closed Principle (OCP) is one of the five SOLID principles of object-oriented programming.
- It states that:  
> **Software entities (classes, modules, functions) should be open for extension but closed for modification.**

This means you should be able to add new features or behavior to your code **without changing the existing code**. Instead of editing old classes, you extend them by creating new ones.

---

##  Benefits of OCP
-  Improves **scalability** – easier to add new features.  
-  Increases **maintainability** – avoids breaking existing code.  
-  Encourages **polymorphism & abstraction**.  
-  Helps with **clean architecture** and **testability**.  

---

## ORP Implementation in This Project

This project demonstrates OCP in a **C# Console App** using two approaches:

###  Without OCP (Bad Example)
- `Discount.cs` handles all discount logic.  
- Adding a new discount type requires modifying this class, which breaks OCP.  

###  With OCP (Good Example)
- `IDiscount.cs` (interface) defines the contract.  
- `RegularDiscount.cs` and `VIPDiscount.cs` implement discount rules separately.  
- Adding new discount types is possible **without modifying existing classes**.  
1. **Not Use SRP** – Validation and persistence logic are combined in a single class (violates SRP).  
2. **Use SRP** – Validation and persistence logic are separated into different classes (follows SRP).  

---

## Folder Structure

```bash
ORP/
|     
├── NotUse/
│   └── Discount.cs      
├── Use/
│   ├── IDIScount.cs   
│   ├── RegularDiscount.cs   
│   └── VIPDIScount.cs      
├── Program.cs              
└── README.md
```

## How to Run
