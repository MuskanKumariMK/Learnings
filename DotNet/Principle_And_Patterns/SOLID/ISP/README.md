# ISP

## Overview
- The **Interface Segregation Principle (ISP)** is the **I** in SOLID principles of object-oriented programming.  
- It states that:  
> **Clients should not be forced to depend on interfaces they do not use.**

This means that instead of creating **large, “fat” interfaces** with many methods,  
we should split them into **smaller, more specific interfaces** so classes only implement what they actually need.  

---

## Benefits of ISP
- Prevents **unnecessary code implementation**.  
- Avoids `NotImplementedException` in classes.  
- Makes code **more maintainable** and **modular**.  
- Improves **readability** and **testability**.  

---

## ISP Implementation in This Project

This project demonstrates ISP in a **C# Console App** using two approaches:

###  Without ISP (Bad Example)
- A big interface `IMultiFunctionDevice` defines `Print()`, `Scan()`, and `Fax()`.  
- `OldPrinter` only supports printing, but still must implement `Scan()` and `Fax()`.  
- This results in **unimplemented methods** throwing exceptions.  

###  With ISP (Good Example)
- Separate interfaces:  
  - `IPrinter` → only `Print()`  
  - `IScanner` → only `Scan()`  
  - `IFax` → only `Fax()`  
- `OldPrinter` implements only `IPrinter`.  
- `ModernPrinter` implements `IPrinter`, `IScanner`, and `IFax`.  
- Each class supports exactly the features it provides.  

---

## Folder Structure

```bash
ISP/
│
├── NotUse/
│   ├── IMultiFunctionDevice.cs
│   └── OldPrinter.cs
│
├── Use/
│   ├── IPrinter.cs
│   ├── IScanner.cs
│   ├── IFax.cs
│   ├── OldPrinter.cs
│   └── ModernPrinter.cs
│
├── Program.cs
└── README.md
```