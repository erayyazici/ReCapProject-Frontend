###### TR
# Araba Kiralama Projesi | Front-End
**[Angular](https://angular.io/cli) ve [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) Kullanılarak Hazırlanmıştır**
## İlgili Klasörler
- [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components) : HTML, Typescript ve CSS dosyalarını içerir. Typescript dosyaları genel olarak ilgili componentin servisini kullanılır.
- [Services](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/services) : API ile bağlantının sağlandığı kısımdır. Gerekli metotlar serviste yazıldıktan sonra  [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components) tarafında kullanıma alınarak(Implementation) karmaşa önlenmiş olur.
- [Models](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/models) : API'dan gelen veriler Front-End'de bir interface içerisinde özellik olarak tutulur ve [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components) tarafında kullanıcıya gösterilir.
- [Pipes](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/pipes) : Eğer elimizde bir veri varsa ve bu veriyi farklı şekilde kullanmak istiyorsak pipe'lar kullanılabilir (Örneğin: Bir fiyat verisi varsa ve o fiyata KDV eklenecek ise pipe kullanılabilir.)

###### ENG
# Rent A Car Project | Front-End
**Made using [Angular](https://angular.io/cli) and [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**
## Related Folders
- [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components) : Includes HTML,Typesript and CSS files. The Typescript files generally use related component service.
- [Services](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/services) : It is the part the connection with the API is provided.Confusion is avoided by implementation service in [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components) after write the necessary method.
- [Models](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/models) : Data from the API is kept as a property from an interface on the Front-End and displayed to user in [Component](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/components)
- [Pipes](https://github.com/cihateray/ReCapProject-Frontend/tree/master/src/app/pipes) : If we have a data and  we want using data differently can use the pipe.(For Example: If we have a price data and want add vat this price, we can use pipe)
