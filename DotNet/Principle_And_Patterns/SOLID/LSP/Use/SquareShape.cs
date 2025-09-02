namespace LSP.Use
{
     public class SquareShape : IShape
     {
          public double Side { get; set; }
          public double Area() => Side * Side;
     }
}
