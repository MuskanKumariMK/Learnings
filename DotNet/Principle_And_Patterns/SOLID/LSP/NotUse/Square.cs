namespace LSP.NotUse
{
     // Subclass that breaks LSP
     public class Square : Rectangle
     {
          public override int Width
          {
               set { base.Width = base.Height = value; }
          }

          public override int Height
          {
               set { base.Width = base.Height = value; }
          }
          //Square inherits Rectangle, but changes the expected behavior.

          //A rectangle should allow independent Width and Height.

          //If we substitute Square where Rectangle is expected, the program breaks.
     }
}
