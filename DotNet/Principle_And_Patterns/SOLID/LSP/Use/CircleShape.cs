
namespace LSP.Use
{
     public class CircleShape : IShape
     {
          public double Radius { get; set; }

          public double Area() => Radius * Radius * Math.PI;
     }
}
