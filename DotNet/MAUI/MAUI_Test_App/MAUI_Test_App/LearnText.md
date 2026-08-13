# My MAUI Learning Notes

- Navigation
- Flyout
- Tabbed Page
- StackLayout
- Grid

## ResourceDictionary with CollectionView

### ResourceDictionary kya karta hai?

ResourceDictionary reusable UI resources ko ek jagah rakhta hai. Is project mein
`ClassResourceDictionary.xaml` ke andar styles, DataTemplates aur selector rakhe
gaye hain. Isse page clean rehta hai aur same resource dusre page par bhi use ho
sakta hai.

### Is example ka flow

1. `ClothViewModel` products ki list deta hai.
2. `ClothPage` list ko `CollectionView` ke `ItemsSource` mein bind karta hai.
3. CollectionView har product ko `ClothTemplateSelector` ke paas bhejta hai.
4. Selector product ka `HasOffer` check karta hai.
5. Offer ho to `OfferClothTemplate`, warna `NormalClothTemplate` use hota hai.

### x:Key ka matlab

`x:Key` resource ka naam hota hai. Example:

```xml
<Style x:Key="ClothTitleStyle" TargetType="Label" />
```

Use karne ka tarika:

```xml
<Label Style="{StaticResource ClothTitleStyle}" />
```

### StaticResource ka matlab

`StaticResource` dictionary se given key wala resource nikalta hai. Cloth page
mein selector is line se milta hai:

```xml
ItemTemplate="{StaticResource ClothTemplateSelector}"
```

### MergedDictionary kyon chahiye?

`App.xaml` mein `ClassResourceDictionary.xaml` merge ki gayi hai. Isliye uske
resources poori application ke pages par available hain.

### Chhoti practice

1. `ClothTitleStyle` ka `TextColor` change karke app dekho.
2. Ek product ka `HasOffer` true se false karo aur card design compare karo.
3. `ClothCardStyle` ka `CornerRadius` change karo.
4. Ek naya product add karke check karo ki CollectionView automatically dikhata hai.
