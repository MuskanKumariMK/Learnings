using MAUI_Test_App.MVVM.Models;
using System.Collections.ObjectModel;

namespace MAUI_Test_App.MVVM.ViewModels
{
    public class ClothViewModel
    {
        /// <summary>
        /// ObservableCollection of Cloth objects representing the products available in the application.
        ///  ObservableCollection in dotnet is used to provide notifications when items get added, removed, or when the whole list is refreshed. This is particularly useful in MVVM architecture for data binding scenarios, where the UI needs to update automatically when the underlying data changes.
        /// </summary>
        public ObservableCollection<Cloth> Products { get; set; }
        public ClothViewModel()
        {

            Products = new ObservableCollection<Cloth>()
            {
               new Cloth
               {
                   Title = "Green T-Shirt",
                   Description = "A comfortable cotton t-shirt.",
                   Price = 15.99m,
                   Image = "tshirt.png",
                   Stock = 90,
                   HasOffer = true,
                   OfferPrice = 150.99m
               },
               new Cloth
               {
                   Title = "Green T-Shirt",
                   Description = "A comfortable cotton t-shirt.",
                   Price = 19.99m,
                   Image = "red.png",
                   Stock = 50,
                   HasOffer = true,
                   OfferPrice = 14.99m
               },
               new Cloth
               {
                   Title = "Green T-Shirt",
                   Description = "A comfortable cotton t-shirt.",
                   Price = 99.99m,
                   Image = "white.png",
                   Stock = 60,
                   HasOffer = true,
                   OfferPrice = 94.99m
               },
            };
        }
    }
}
