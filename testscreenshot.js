const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

 

// Configura las opciones de Chrome (puedes personalizar esto según tus necesidades)
//const chromeOptions = new chrome.Options();
//chromeOptions.addArguments('--headless'); // Ejecución en modo headless (sin ventana gráfica)
const driver =  new Builder().forBrowser('chrome').build();


// Crea una instancia de Selenium WebDriver
/*const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(chromeOptions)
  .build();
*/
  driver.manage().window().maximize();

// Abre una página web

 driver.get("https://www.google.com")
    
  .then(() => {
    // Encuentra el elemento que quieres hacer clic (cambia el selector según tus necesidades)
    
    
    driver.findElement(By.xpath('Aceptar todo')).click();
    driver.findElement(By.id("APjFqb")).sendKeys("automatización");
    driver.findElement(By.xpath("//*[text()='Buscar con Google']")).click();
    driver.get(
      "https://www.google.com/search?q=automatizaci%C3%B3n&sca_esv=569441480&source=hp&ei=Jq0WZZT4DdqdptQP_4il6Ag&iflsig=AO6bgOgAAAAAZRa7NqFt-zUwOoyHB7yNJPG65KBj4QuN&ved=0ahUKEwiUo7Kc1M-BAxXajokEHX9ECY0Q4dUDCBE&oq=automatizaci%C3%B3n&gs_lp=Egdnd3Mtd2l6Ig9hdXRvbWF0aXphY2nDs25IAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEMyAEA&sclient=gws-wiz#ip=1"
    )
    //driver.executeScript("window.scrollBy(0, 500);");
    driver.findElement(
        By.xpath("//*[@id='rso']/div[2]/div/div/div[1]/div/div/span/a/h3")
    )
    return driver.get("https://es.wikipedia.org/wiki/Automatizaci%C3%B3n");


    
  })
  .then(() => {
    // Captura una captura de pantalla y guárdala en un archivo
    return driver.takeScreenshot();
  })
  .then((screenshot) => {
    // Guarda la captura de pantalla en un archivo
    fs.writeFileSync('screenshot1.png', screenshot, 'base64');
    console.log('Captura de pantalla guardada como "screenshot.png"');
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  })
  .finally(() => {
    // Cierra el navegador
    driver.quit();
  });