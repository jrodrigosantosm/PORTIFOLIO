var i = 0;
    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 170;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    
    }

    function clicargitform(){         
      window.open("https://github.com/jrodrigosantosm/formulario-emprego-na-hora-bolsa");
    }

    function clicarpageform(){         
      window.open("https://jrodrigosantosm.github.io/formulario-emprego-na-hora-bolsa/");
      }

      function clicargitcalc(){         
        window.open("https://github.com/jrodrigosantosm/Calculadora-js");
      }
  
      function clicarpagecalc(){         
        window.open("https://jrodrigosantosm.github.io/Calculadora-js/");
        }
    