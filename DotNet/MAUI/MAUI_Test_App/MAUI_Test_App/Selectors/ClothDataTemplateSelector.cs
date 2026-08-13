using MAUI_Test_App.MVVM.Models;

namespace MAUI_Test_App.Selectors
{
    /// <summary>
    /// Chooses the design of a product card.
    /// Offer products use OfferTemplate and the remaining products use NormalTemplate.
    /// </summary>
    public class ClothDataTemplateSelector : DataTemplateSelector
    {
        public DataTemplate NormalTemplate { get; set; } = null!;
        public DataTemplate OfferTemplate { get; set; } = null!;

        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            return item is Cloth cloth && cloth.HasOffer
               ? OfferTemplate
               : NormalTemplate;
        }
    }
}
