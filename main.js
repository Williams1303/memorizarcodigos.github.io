// Definimos los códigos de productos y sus nombres
const products = {
  "7753150000149": "aguaymanto fresco pelado x 200gr",
  "7759436000124": "arandano hortifrutc 125gr",
  "7759436000155": "arandano hortifrutc 300gr",
  "4397": "carambola m x kg",
  "4476": "chirimoya m x kg",
  "7756275000032": "ciruelo de seda x 500gr",
  "7755984000029": "ciruelillo x 600gr",
  "4398": "cocona m x kg",
  "7755413000705": "concentrado de emoliente x 2kg",
  "4125": "fresa americana x kg",
  "4006": "granada",
  "2979888": "granadilla market",
  "4523": "guanabana m x kg",
  "4526": "higo fresco metro",
  "4049": "kiwi americano",
  "4491": "lima m x kg",
  "4626": "lucuma madura empacada",
  "4436": "mandarina con pepa m x kg",
  "4617": "mandarina costa m x kg",
  "4534": "mandarina s/pepa m x kg",
  "4128": "mango ataulfo x kg",
  "4487": "mango edward m x kg",
  "4493": "mango haden m x kg",
  "4545": "mango kafro metro",
  "4542": "mango kent m x kg",
  "4448": "manzana americana royal gala",
  "4447": "manzana americana verde x kg",
  "4127": "manzana americana washington",
  "4506": "manzana delicia kinder m x kg",
  "4697": "manzana fuji importada",
  "4898": "manzana israel añawi m x kg",
  "4525": "manzana rayada m x kg",
  "4489": "maracuya m x kg",
  "4490": "melocoton metro",
  "4456": "melon coquito m x kg",
  "4129": "melon honey",
  "4146": "melon magenta x kg",
  "4718": "melon piel de sapo",
  "8642": "melon tropial metro",
  "4383": "membrillo m x kg",
  "29750177": "mix para emoliente",
  "4646": "naranja de mesa americana",
  "4435": "naranja de mesa s/pepa m x kg",
  "4856": "naraja p/jugo chanchamayo m x kg",
  "4539": "nectarin",
  "4382": "palta fuerte m x kg",
  "4392": "palta nava",
  "4455": "palta gueen metro",
  "4912": "papaya hawaiana super",
  "258999": "papaya m x kg",
  "4394": "pepino melon m x kg",
  "4575": "pera canela importada",
  "4056": "pera italiana x kg",
  "4441": "pera packhams x kg",
  "4389": "piña golden m x kg",
  "4197": "piña para jugo m x kg",
  "4859": "pitahaya amarilla",
  "4755": "pitahaya roja metro",
  "4457": "platano bellaco x kg",
  "4896": "platano biscocho",
  "256931": "platano isla metro x kg",
  "4865": "platano organico",
  "256935": "platano palillo",
  "4999": "platano seda m x kg",
  "8151": "sandia lady dell metro x kg",
  "4784": "sandia m x kg",
  "8358": "sandia sugar baby metro",
  "4450": "tangelo especial m x kg",
  "4452": "tangelo s/pepa m granel x kg",
  "4486": "toronja ruby m x kg",
  "4437": "toronja sin pepa m x kg",
  "4299": "tuna andina",
  "4385": "tuna roja m x kg",
  "4384": "tuna verde m x kg",
  "4119": "uva borgoña x kg",
  "7754078000877": "uva de mesa variedad swer globe x 2lb",
  "256469": "uva jack salute x kg",
  "4535": "uva red globe m x kg",
  "4393": "uva sultana nac m x kg",
  "4395": "uva vallet metro",
  "7751906000023": "1/2 col China ",
  "7752347000030": "1/2 col corazon",
  "7751906000320": "acelga",
  "4471": "aji amarillo - m",
  "4606": "aji limo - m",
  "4629": "aji entero super",
  "7751906000347": "albahaca",
  "7751906000344": "apio",
  "7751536719241": "apio metro ",
  "7753117000267":"apio x un cuisine y co",
  "4467": "alverja - m",
  "7751906000351": "beterraga - m",
  "4591": "brócoli - m",
  "21103032": "caigua",
  "4370": "calabaza americana x kg",
  "4221": "camote amarillo market",
  "4444": "camote morado",
  "4482": "cebolla blanca m",
  "7751906000368": "cebolla china",
  "4872": "cebolla rosa market",
  "2957782": "choclo market unid",
  "7754415000119": "coliflor",
  "7751906000375": "culantro",
  "4083": "espinaca",
  "4084": "frijol chino fresco(perecibles)",
  "29693610": "eucalipto",
  "4509": "habas - m",
  "7751906000382": "hierba buena",
  "7751368000166": "hierba luisa",
  "4608": "holantao - m",
  "7751906000399": "huacatay",
  "4462": "kion - m",
  "7750697418505": "lechuga metro",
  "7751906000443": "lechuga americano ",
  "7753117000236": "lechuga crespa x 320 gr cuisine & co",
  "7753238000030": "lechuga criolla",
  "4466": "limón sutil m x kg",
  "4743": "maíz morado mercado ",
  "7751906000405": "manzanilla",
  "4294": "nabo x kg",
  "4323": "olluco super",
  "4481": "papa amarilla tumbay m x kg",
  "4207": "papa blanca",
  "4333": "papa blanca cocktail",
  "4709": "papa blanca Yungay m",
  "4451": "papa canchan procesada m x kg",
  "4460": "papa huayro - m"
};

// Obtenemos los elementos HTML relevantes
// Obtener los elementos del DOM
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

// Mostrar el cuadro emergente al cargar la página
window.onload = function() {
  popup.style.display = 'block';
}

// Cerrar el cuadro emergente al hacer clic en el botón "Cerrar"
closeButton.onclick = function() {
  popup.style.display = 'none';
}

const codeInput = document.getElementById("code-input");
const submitButton = document.getElementById("submit-code-button");
const errorMessage = document.getElementById("error-message");
const failedAttemptsCount = document.getElementById("failed-count");
const resetContainer = document.getElementById("reset-container");
const resetPasswordInput = document.getElementById("reset-password-input");
const submitResetButton = document.getElementById("submit-reset-button");
const helpButton = document.getElementById("help-button");
const helpContainer = document.getElementById("help-container");
let isHelpVisible = false;
helpButton.addEventListener('click', function() {
  if (isHelpVisible) {
      helpContainer.style.display = 'none';
      isHelpVisible = false;
    } else {
      helpContainer.style.display = 'block';
      isHelpVisible = true;
    }

  });
const frutasButton = document.getElementById("frutas-button");
const frutasLista = document.getElementById("frutas-lista");

const verdurasButton = document.getElementById("verduras-button");
const verdurasLista = document.getElementById("verduras-lista");

const polloBrazaButton = document.getElementById("pollo-braza-button");
const polloBrazaLista = document.getElementById("pollo-braza-lista");

const cervezasButton = document.getElementById("cervezas-button");
const cervezasLista = document.getElementById("cervezas-lista");

function mostrarLista(lista) {
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}
submitButton.addEventListener('click', function() {
  // Aquí va el código que se ejecutará al hacer clic en el botón de enviar.
  console.log('Botón de enviar clickeado');
  });

frutasButton.addEventListener('click', function() {
  mostrarLista(frutasLista);
});

verdurasButton.addEventListener('click', function() {
  mostrarLista(verdurasLista);
});


// Variables para manejar la lógica de reinicio
const maxFailedAttempts = 5;
let failedAttempts = sessionStorage.getItem("failedAttempts")
  ? parseInt(sessionStorage.getItem("failedAttempts"))
  : 0;

if (failedAttempts >= maxFailedAttempts) {
  codeInput.disabled = true;
  submitButton.disabled = true;
  resetContainer.style.display = "block";
}

// Función para validar el código ingresado
function validateCode() {
  const code = codeInput.value.trim();

  // Si el código es válido, mostramos el nombre del producto correspondiente
  if (products[code]) {
    errorMessage.innerHTML = `Correcto: ${products[code]}.`;
    errorMessage.classList.remove('incorrect');
    errorMessage.classList.add('correct');
    sessionStorage.setItem("failedAttempts", 0);
  } else {
    // Si el código es inválido, mostramos un mensaje de error y aumentamos el número de intentos fallidos
    errorMessage.innerHTML = "Código inválido.";
    errorMessage.classList.remove('correct');
    errorMessage.classList.add('incorrect');
    failedAttempts++;
    failedAttemptsCount.innerHTML = failedAttempts;
    sessionStorage.setItem("failedAttempts", failedAttempts);

    // Si el número de intentos fallidos supera el límite, mostramos el formulario de reinicio
    if (failedAttempts >= maxFailedAttempts) {
      codeInput.disabled = true;
      submitButton.disabled = true;
      resetContainer.style.display = "block";
    }
  }
}


// Función para reiniciar el juego
function resetGame() {
  const resetPassword = resetPasswordInput.value.trim();

  // Si la contraseña de reinicio es válida, reiniciamos el juego
  if (resetPassword === "61125598") {
    failedAttempts = 0;
    failedAttemptsCount.innerHTML = failedAttempts;
    errorMessage.innerHTML = "";
    codeInput.disabled = false;
    submitButton.disabled = false;
    resetPasswordInput.value = "";
    resetContainer.style.display = "none";
    sessionStorage.setItem("failedAttempts", 0);
  } else {
    // Si la contraseña de reinicio es inválida, mostramos un mensaje de error
    alert("Contraseña incorrecta. Intenta de nuevo.");
  }
}

// Agregamos un evento click al botón de enviar código
submitButton.addEventListener("click", validateCode);

// Agregamos un evento click al botón de enviar contraseña de reinicio
submitResetButton.addEventListener("click", resetGame);

// Agregamos un evento keypress al input de código para detectar si se presiona Enter
codeInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    validateCode();
  }
});




