namespace MAUI_Test_App.MVVM.Models
{
    /// <summary>
    /// This class stores the details of one cloth product.
    /// One object of this class becomes one card in the CollectionView.
    /// </summary>
    public class Cloth
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Image { get; set; } = string.Empty;
        public int Stock { get; set; }
        public bool HasOffer { get; set; }
        public decimal OfferPrice { get; set; }
    }
}
