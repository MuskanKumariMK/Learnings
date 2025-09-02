namespace LSP.Use
{
     public class RectangleShape : IShape
     {
          public double Width { get; set; }
          public double Height { get; set; }
          public double Area() => Width * Height;
     }
}
