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
                false
            ],

            travelData: {
                tipo: " ",
                origen: " ",
                destino: " ",
                duracion: " ",
                pasajeros: {}
            }

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

            }
			
		}
	};
};

export default getState;