using MAUI_Test_App.MVVM.Models;

namespace MAUI_Test_App.Selectors
{
    public class ClothDataTemplateSelector : DataTemplateSelector
    {
        protected override DataTemplate OnSelectTemplate(object item, BindableObject container)
        {
            var cloth = item as Cloth;
            if (!cloth.HasOffer)
            {
                Application.Current.Resources.TryGetValue("ClothResource", out var ClothResource);
                return ClothResource as DataTemplate;
            }
            return new DataTemplate();
        }
    }
}
