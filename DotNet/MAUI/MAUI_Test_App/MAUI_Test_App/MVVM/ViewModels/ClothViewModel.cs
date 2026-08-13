using MAUI_Test_App.MVVM.Models;
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace MAUI_Test_App.MVVM.ViewModels
{

    public class ClothViewModel
    {
        /// <summary>
        /// Products contains the data shown on the Cloth page.
        /// ObservableCollection tells the UI when an item is added or removed.
        /// </summary>
        public ObservableCollection<Cloth> Products { get; set; }
        public bool IsRefreshing { get; set; }
        public ICommand RefreshCommand => new Command(async () =>
        {
            IsRefreshing = true;
            await Task.Delay(2000);
            ResfreshItems();
            IsRefreshing = false;
        });
        public ClothViewModel()
        {
            ResfreshItems();
        }
        private void ResfreshItems()
        {
            Products = new ObservableCollection<Cloth>()
            {
                new Cloth
                {
                    Title = "Classic Green T-Shirt",
                    Description = "Soft cotton t-shirt for everyday comfort.",
                    Price = 799m,
                    Image = "tshirt.png",
                    Stock = 90,
                    HasOffer = true,
                    OfferPrice = 599m
                },
                new Cloth
                {
                    Title = "Red Casual T-Shirt",
                    Description = "A relaxed fit t-shirt with a bright finish.",
                    Price = 649m,
                    Image = "red.png",
                    Stock = 50,
                    HasOffer = false
                },
                new Cloth
                {
                    Title = "Essential White T-Shirt",
                    Description = "A clean and simple wardrobe essential.",
                    Price = 899m,
                    Image = "white.png",
                    Stock = 12,
                    HasOffer = true,
                    OfferPrice = 699m
                }
            };

        }
    }
}
