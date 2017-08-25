export const validators = {
  id: "es"
};

export default
{
	translation:{
    contact:{
      info: "Bogotá (+57)3505389480 \n soporte@minka.io\n Calle 93 #14-71 Oficina 701\n Bogotá D.C. Carolina Gomez"
    },
    notFound:{
      text: "Oops! Parece que algo salio mal"
    },
    header:{
      lukatag:"Lukatag",
      about:"Acerca",
    },
    landing:{
  		intro:{
  			title:"No te preocupes más por tus facturas de servicios o porque olvidaste un pago",
  			subtext:"Con Luka puedes pagar todos tus servicios en un mismo lugar",
  			button:"Comenzar",
  		},
  		body:{
  			//payment bill diagram
  			bill:{
  				title:"Todas tus facturas organizadas en un solo lugar",
  				subtext:"Olvida de hacer filas o esperar en el teléfono. Agrega todas las cuentas de servicios a Luka. Luego lleva registro de las fechas límite y los valores, en cualquier parte a cualquier hora.",
  			},
  			//calendar diagram
  			calendar:{
  				title:"Nos encargamos de todos tus pagos hasta el final del mes",
  				subtext:"Por qué lidiar con varias facturas y tarifas. Nosotros pagamos todas tus deudas y tu solo realizas un Luka pago (\"Luka bill\") al final del mes, sin intereses.",
  			},
  			//chatbot diagram
  			chatbot:{
  				title:"Ingresa a tus finanzas donde quiera que estés.",
  				subtext:"Hemos construido Luka para ser fácil y seguro. Envía un pago por el chat o usa la app. Además, te recordaremos de tus transacciones pendientes o pregúntale a nuestro bot, es instantáneo.",
  			},
  			//bank (billete)
  			bank:{
  				title:"No más multas",
  				subtext:"Paga tus deudas instantáneamente y evita el corte de tus servicios.",
  			},
  			//time
  			saveTime:{
  				title:"Ahorra tiempo",
  				subtext:"¿Cansado de perder tiempo en pagos? Luka es rápido y fácil de configurar.",
  			},
  			//blockchain
  			blockchain:{
  				title:"Transacciones Seguras",
  				subtext:"Usamos tecnología de blockchain, cada pago es cifrado y tokenizado.",
  			},
  			//omnichannel
  			credit:{
  				title:"Construye tu Credito",
  				subtext:"Cuanto más pidas prestado y repagues, más te recompensaremos.",
  			},
  			//unifiedApi
  			advising:{
  				title:"Asesoría Financiera",
  				subtext:"Nosotros aprendemos de tus hábitos y te ayudamos a administrar tu dinero de una mejor forma.",
  			},
  			//track
  			messagePay:{
  				title:"Paga por un mensaje",
  				subtext:"Paga desde Facebook messenger o SMS.",
  			},
  		},
  		bottom:{
  			title:"Nunca olvides un pago otra vez",
        subtext:"Estaremos próximamente en tus tiendas locales",
  			button:"Comenzar",
  		}
    },
    lukatag:{
      intro:{
        title:"Paga a tu manera y expresate"
      },
      body:{
        firstRow:{
          title:"LukaTags convierten enviar dinero en algo divertido y fácil.",
          subtext:"Olvídate de recordar un número y personaliza tu cuenta para que refleje tu estilo de vida!"
        },
        secondRow:{
          title:"¡Tus clientes aman lo que haces por ellos, asegúrate de que no te olviden!",
          subtext:"Cada vez que ellos paguen, verán tu Lukatag, haciendo un check-out de forma rápida y fácil."
        },
        thirdRow:{
          title:"El seguimiento de tus gastos es divertido y rápido con Lukatags.",
          subtext:"Nunca pensaras, \"¿Que es esto?\" al momento de revisar tus estados y administrar tu presupuesto con nombres claros para cada transacción."
        }
      },
      bottom:{
        title: "¡Consigue tu LukaTag hoy!",
        button: "Comenzar"
      }
    },
    about:{
      intro:{
        title:"Luka es una plataforma que socializa y unifica pagos y acceso a crédito",
        subtext:"Administra tu dinero y paga como quieras cuando lo desees. Fundado en el 2017, operando en Bolivia y Colombia, Luka utiliza un chatbot de IA (Inteligencia artificial) el cual te permite enviar y recibir dinero de tus amigos, pagar tus cuentas o hasta por tu café mañanero."
      },
      body:{
        firstRow:{
          title:"Acerca de Nosotros:",
          text:"Somos un grupo de innovadores que creemos que las finanzas no deberían ser difíciles. Nos encanta jugar con gadgets resolviendo problemas. Estamos cambiando el mundo de las finanzas, una transacción a la vez, mientras nos enfocámos en aquellos que la tienen más difícil: Personas sin acceso a servicios bancarios."
        },
        secondRow:{
          title:"Dónde estamos",
          text:"Actualmente nosotros servimos a usuarios y comercios en Bolivia y Colombia"
        },
        thirdRow:{
          title:"A Quién servimos",
          text:"A todos los que se cansaron de complicarse la vida y desean una experiencia transaccional más simple"
        },
        fourthRow:{
          title:"Nuestros asociados",
          text:"Dentro de nuestros afiliados estan Monetisoft, Sintesis, Ubeep y Infobip"
        }
      },
      bottom:{
        title: '¿Deseas unirte a nosotros para eliminar el dolor de los pagos?',
        button: "Contáctanos"
      }
    },
    form:{
      lang:{
        and: "y",
        or: "o",
        singleM: "El",
        singleF: "La"
      },
      types:{
        chars: "caracteres",
        letters: "letras",
        number: "número",
        numbers: "números",
        digits: "digitos"
      },
      fields:{
        tel: "teléfono",
        pin: "pin",
        firstName: "nombre",
        lastName: "apellido",
        email: "correo electronico",
        pass: "contraseña",
        id: "identificación",
        country: "pais",
        city: "ciudad"
      },
      errors:{
        required:"Requerido",
        invalid: "{{att}} invalido",
        notAdult: "Debes ser mayor de edad para registrarte",
        taken: "{{att}} esta tomado. Escoge otro.",
        interval: "El {{att}} debe tener entre {{min}} y {{max}} {{type}}",
        minSize: "{{att}} debe tener al menos {{size}} {{type}}",
        maxSize: "{{att}} debe tener menos de {{size}} {{type}}",
        exactSize: "{{att}} debe tener exactamente {{size}} {{type}}",
        isNaN: "{{att}} debe ser un numero",
        mustAccept: "Debes aceptar los Terminos y Condiciones",
        mustEqual: "Debe ser igual a {{att}}",
        mustContain: "{{part}} {{att}} debe contener {{car}}",
        mustOnlyContain: "{{att}} solo debe contener {{car}}",
        mustNotContain: "{{att}} no puede contener {{car}}",
        critical: "Something went wrong",
      },
      messages:{
        phone: "Hola! Primero necesito tu teléfono",
        pin: "Te mandamos un pin",
        pinPlaceholder: "Pin de 4 digitos",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo Electronico",
        pass: "PIN",
        confirmPass: "Confirma tu PIN",
        id: "Identificación",
        age: "Fecha de Nacimiento",
        address: "Direccion",
        country: "Pais",
        city: "Ciudad",
        terms: "Acepto los Terminos y Condiciones",
      },
      tour:{
        first:{
          title:"Conecta y paga tus servicios",
          text:"Sincroniza tus cuentas, recibe notificaciones, revisa tus saldos y paga en dos simples plazos"
        },
        second:{
          title:"Solicita un pago",
          text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        third:{
          title:"Disfrutalo ahora y paga después",
          text:"Luka te da la opción de tener tus cuentas al día y pagarlas después de un mes. Si, Luka presta"
        },
        buttons:{
          next: "Continuar",
          skip: "Saltar",
        }
      },
      buttons:{
        next: "Siguiente",
        prev: "Anterior",
        finish: "Finalizar"
      },
      help:{
        lukatag:{
          title:"¿Que es LukaTag?",
          text:"Un @Lukatag es un nombre único que identifica a un individuo, un profesional, un comercio o una empresa que utiliza Luka. Un @Lukatag es creado para hacer mas fácil y rápido enviar y recibir dinero"
        },
        pass:{
          title:"¿Para que sirve el PIN ?",
          text:"El PIN de autenticación de 4 dígitos es requerido a todas las personas para poder ingresar a Hola Luka y para confirmar ciertas transacciones",
        }
      }
    }
	},
};
