const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

async function takeScreenshot() {
  // Inicializa el controlador de Selenium
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Abre la página web de la que deseas tomar una captura de pantalla
    await driver.get("https://www.google.com");
    driver.manage().window().maximize();

    // Realiza un scroll hacia abajo
    await driver.executeScript("window.scrollBy(0, 500);"); // Cambia el valor 500 según sea necesario
    driver.findElement(By.xpath("//*[text()='Aceptar todo']")).click();
    driver.findElement(By.id("APjFqb")).sendKeys("automatización");
    await driver.sleep(2000);

    driver.findElement(By.xpath("//*[text()='Buscar con Google']")).click();
    await driver.get(
      "https://www.google.com/search?q=automatizaci%C3%B3n&sca_esv=569441480&source=hp&ei=Jq0WZZT4DdqdptQP_4il6Ag&iflsig=AO6bgOgAAAAAZRa7NqFt-zUwOoyHB7yNJPG65KBj4QuN&ved=0ahUKEwiUo7Kc1M-BAxXajokEHX9ECY0Q4dUDCBE&oq=automatizaci%C3%B3n&gs_lp=Egdnd3Mtd2l6Ig9hdXRvbWF0aXphY2nDs25IAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEMyAEA&sclient=gws-wiz#ip=1"
    );
    await driver.executeScript("window.scrollBy(0, 500);");
    await driver.findElement(
      By.xpath("//*[@id='rso']/div[2]/div/div/div[1]/div/div/span/a/h3")
    );
    await driver.sleep(2000);

    await driver.get("https://es.wikipedia.org/wiki/Automatizaci%C3%B3n");
    await driver.executeScript("window.scrollBy(0, 4150);");
    await driver.sleep(2000);
    // Toma la captura de pantalla y guárdala en un archivo
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot2.png', screenshot);
    await driver.sleep(2000);
    console.log('Captura de pantalla tomada y guardada como screenshot.png');
  } catch (error) {
    console.error('Ocurrió un error:', error);
  } finally {
    // Cierra el navegador
    await driver.quit();
  }
}

takeScreenshot();
