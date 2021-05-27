const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

            formFieldVisibility: [
                true,
                false,
                false,
                false,
                false,
				false
            ],

            travelData: {
                tipo: " ",
                origen: " ",
                destino: " ",
                duracion: " ",
				partida: " ",
				retorno: " ",
                pasajeros: 1,
				edades: [0,0,0,0,0,0,0,0]
            },


		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

            changeVisibility: (index, value) => {

                const store = getStore();

                const demo = store.formFieldVisibility.map((elm, i) => {
                    if(i === index) elm = value;
                    return elm;
                });

                setStore({formFieldVisibility: demo});

            },

			updateTravelData: (key, value) => {
				const tempTravelData = getStore().travelData;

				tempTravelData[key] = value;

				setStore({travelData: tempTravelData})

				console.log(getStore().travelData);

			},

			resetVisibility: () =>{
				setStore({formFieldVisibility: [true, false, false, false, false, false]});

			},

			apiCallCotizar: () => {
				console.log("seguro cotizado");
			},

			apicallConsulta: () => {

				console.log("plan consultado");
			}
			
		}
	};
};

export default getState;