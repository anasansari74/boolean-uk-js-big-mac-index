 let USBigMacPrice = 5.66

 let PakistanBigMacPrice = 200
 PakistanIPP = USBigMacPrice/PakistanBigMacPrice
 let PakistanCurrencyRate = 0.0065
 PakistanBigMacIndex = ((PakistanCurrencyRate - PakistanIPP) / PakistanIPP)*100

 console.log("Pakistan BMI is " ,PakistanBigMacIndex,"%")

 let UKBigMacPrice = 3.29
 UKIPP = USBigMacPrice/UKBigMacPrice
 let UKCurrencyRate = 1.39
 UKBigMacIndex = ((UKCurrencyRate - UKIPP) / UKIPP)*100

 console.log("UK BMI is " ,UKBigMacIndex,"%")

 let SaudiArabianBigMacPrice = 11
 SaudiArabianIPP = USBigMacPrice/SaudiArabianBigMacPrice
 let SaudiArabianCurrencyRate = 0.27
 SaudiArabianBigMacIndex = ((SaudiArabianCurrencyRate - SaudiArabianIPP) / SaudiArabianIPP)*100

 console.log("Saudi Arabian BMI is " ,SaudiArabianBigMacIndex,"%")

 let UAEBigMacPrice = 14
 UAEIPP = USBigMacPrice/UAEBigMacPrice
 let UAECurrencyRate = 0.27
 UAEBigMacIndex = ((UAECurrencyRate - UAEIPP) / UAEIPP)*100

 console.log("The UAE BMI is " ,UAEBigMacIndex,"%")

 let AustralianBigMacPrice = 6.4
 AustralianIPP = USBigMacPrice/AustralianBigMacPrice
 let AustralianCurrencyRate = 0.78
 AustralianBigMacIndex = ((AustralianCurrencyRate - AustralianIPP) / AustralianIPP)*100

 console.log("The Australian BMI is " ,AustralianBigMacIndex,"%")