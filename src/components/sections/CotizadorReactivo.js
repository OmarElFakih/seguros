import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Context } from "../../store/appContext";
import Button from '../elements/Button';
import DatePicker from "../elements/DatePicker";
import DuracionMaxima from "../elements/DuraciónMaxima";
import Pasajeros from "../elements/Pasajeros";
import { useMediaQuery } from 'react-responsive';
import PlanDisponible from "../elements/PlanDisponible";





const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}


const CotizadorReactivo = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props

}) => {


    const outerClasses = classNames(
        'section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const { store, actions } = useContext(Context);
    const [ tipo, setTipo ] = useState("");
    const [ origen, setOrigen ]  = useState("");
    const [ textoOrigen, setTextoOrigen ] = useState("");
    const [ destino, setDestino ] = useState("");
    const [ textoDestino, setTextoDestino] = useState("");
    const [ filling, setfilling] = useState(true);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 750px)' })

   

    return (
        <section
            {...props}
            className={outerClasses}
        >
        {filling ? 
        <>
            <div style={{display: (isTabletOrMobile ? "block" : "-webkit-box"), paddingLeft: (isTabletOrMobile ? "0%" : "0%"), justifyContent: "center", position: "fixed", width: "100%", zIndex: "1"}} >
                <div className={[(isTabletOrMobile ? "bloquesMobile" : ""), (store.formFieldVisibility[1] ? "bloquesCabeceraReactiva" : "bloqueEscondido")].join(" ")} >
                    <p>tipo de viaje</p> <br />
                    <p className={isTabletOrMobile ? "":"heavyWeight"}>{tipo}</p>
                </div>
                <div className={[(isTabletOrMobile ? "bloquesMobile" : ""), (store.formFieldVisibility[2] ? "bloquesCabeceraReactiva" : "bloqueEscondido")].join(" ")}>
                    <p>origen</p> <br />
                    <p className={isTabletOrMobile ? "":"heavyWeight"}>{textoOrigen}</p>
                </div>
                <div className={[(isTabletOrMobile ? "bloquesMobile" : ""), (store.formFieldVisibility[3] ? "bloquesCabeceraReactiva" : "bloqueEscondido")].join(" ")}>
                    <p>destino</p> <br />
                    <p className={isTabletOrMobile ? "":"heavyWeight"}>{textoDestino}</p>
                </div>
                <div className={[(isTabletOrMobile ? "bloquesMobile" : ""), (store.formFieldVisibility[4] ? "bloquesCabeceraReactiva" : "bloqueEscondido")].join(" ")}>
                    <p>{store.travelData.partida}</p>
                    <p>-</p>
                    <p>{store.travelData.retorno}</p> <br />
                </div>
                <div className={[(isTabletOrMobile ? "bloquesMobile" : ""), (store.formFieldVisibility[5] ? "bloquesCabeceraReactiva" : "bloqueEscondido")].join(" ")}>
                    <p>pasajeros</p> <br />
                    <p className={isTabletOrMobile ? "":"heavyWeight"}>{store.travelData.pasajeros}</p>
                </div>        
            </div>    
            <div style={{ margin: "0px 20%" }}>
                <form style={{paddingTop:(isTabletOrMobile ? "115%" : "25%"), zIndex: "-3"}}>
                    <div>   
                    {store.formFieldVisibility[0] ? <>
                    <select value={tipo} className="inputCotizador" onChange = {e => setTipo(e.target.value)}>
                        <option value="">Tipo de viaje</option>
                        <option value="Viajes Anuales">Viajes anuales</option>
                        <option value="Viajes Por Dia">Viajes por dia</option>
                    </select><br />
                        <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(1, true); actions.updateTravelData("tipo", tipo)}}>
                            Actualizar
                                                      </Button>
                    </> : null
                    }
                    </div>
                    <br />
                    <div>
                    {store.formFieldVisibility[1] ? <><select  id="websitebundle_filterquote_origin" name="websitebundle_filterquote[origin]" required="required" className="inputCotizador general_input italic fsize-12 uppercase mb15" data-placeholder="Origen Del Viaje" placeholder="Origen Del Viaje" onChange = {e => {setOrigen(e.target.value); setTextoOrigen(e.target.options[e.target.selectedIndex].text);}}>
                        <option value="" selected="selected">Origen Del Viaje</option>
                        <option value="3">Afghanistán</option>
                        <option value="6">Albania</option>
                        <option value="51">Alemania</option>
                        <option value="1">Andorra</option>
                        <option value="9">Angola</option>
                        <option value="5">Anguila</option>
                        <option value="247">Antártida</option>
                        <option value="4">Antigua y Barbuda</option>
                        <option value="8">Antillas Holandesas</option>
                        <option value="178">Arabia Saudita</option>
                        <option value="56">Argelia</option>
                        <option value="10">Argentina</option>
                        <option value="7">Armenia</option>
                        <option value="13">Aruba</option>
                        <option value="12">Australia</option>
                        <option value="11">Austria</option>
                        <option value="14">Azerbaiyán</option>
                        <option value="28">Bahamas</option>
                        <option value="21">Bahrein</option>
                        <option value="17">Bangladesh</option>
                        <option value="16">Barbados</option>
                        <option value="18">Bélgica</option>
                        <option value="32">Belice</option>
                        <option value="23">Benin</option>
                        <option value="31">Bielorrusia</option>
                        <option value="26">Bolivia</option>
                        <option value="15">Bosnia y Herzegovina</option>
                        <option value="30">Botsuana</option>
                        <option value="27">Brazil</option>
                        <option value="25">Brunei Darussalam</option>
                        <option value="20">Bulgaria</option>
                        <option value="19">Burkina Faso</option>
                        <option value="22">Burundi</option>
                        <option value="29">Bután</option>
                        <option value="47">Cabo Verde</option>
                        <option value="106">Camboya</option>
                        <option value="42">Camerún</option>
                        <option value="33">Canada</option>
                        <option value="198">Chad</option>
                        <option value="41">Chile</option>
                        <option value="43">China</option>
                        <option value="49">Chipre</option>
                        <option value="44">Colombia</option>
                        <option value="108">Comoras</option>
                        <option value="37">Congo</option>
                        <option value="110">Corea del Norte</option>
                        <option value="111">Corea del Sur</option>
                        <option value="39">Costa de Marfil (Costa de Marfil)</option>
                        <option value="45">Costa Rica</option>
                        <option value="90">Croacia (Hrvatska)</option>
                        <option value="46">Cuba</option>
                        <option value="244">Curazao</option>
                        <option value="53">Dinamarca</option>
                        <option value="52">Djibouti</option>
                        <option value="54">Dominica</option>
                        <option value="57">Ecuador</option><option value="59">Egipto</option><option value="194">El Salvador</option><option value="2">Emiratos Árabes Unidos</option><option value="61">Eritrea</option><option value="187">Eslovaquia</option><option value="185">Eslovenia</option><option value="62">España</option><option value="67">Estados Federados de Micronesia</option><option value="230">Estados Unidos de America</option><option value="58">Estonia</option><option value="63">Etiopía</option><option value="176">Federación Rusa</option><option value="65">Fiji</option><option value="164">Filipinas</option><option value="64">Finlandia</option><option value="69">Francia</option><option value="70">Gabón</option><option value="79">Gambia</option><option value="73">Georgia</option><option value="76">Ghana</option><option value="77">Gibraltar</option><option value="71">Gran Bretaña (Reino Unido)</option><option value="72">Granada</option><option value="83">Grecia</option><option value="81">Guadalupe</option><option value="243">Guam</option><option value="85">Guatemala</option><option value="87">Guayana</option><option value="74">Guayana Francesa</option><option value="80">Guinea</option><option value="82">Guinea Ecuatorial</option><option value="86">Guinea-Bissau</option><option value="91">Haití</option><option value="89">Honduras</option><option value="88">Hong Kong</option><option value="92">Hungría</option><option value="96">India</option><option value="93">Indonesia</option><option value="97">Irak</option><option value="98">Iran</option><option value="94">Irlanda</option><option value="246">Isla Bouvet</option><option value="48">Isla de Navidad</option><option value="240">Isla del hombre</option><option value="150">Isla Norfolk</option><option value="99">Islandia</option><option value="113">Islas Caimán</option><option value="34">Islas Cocos (Keeling)</option><option value="40">Islas Cook</option><option value="249">Islas de la tierra</option><option value="24">Islas de las Bermudas</option><option value="68">Islas Faroe</option><option value="242">Islas Heard y Mcdonald</option><option value="66">Islas Malvinas</option><option value="136">Islas Marianas del Norte</option><option value="130">Islas Marshall</option><option value="232">Islas menores alejadas de los Estados Unidos</option><option value="179">Islas Salomón</option><option value="197">Islas Turcas y Caicos</option><option value="218">Islas Vírgenes (británicas)</option><option value="219">Islas Vírgenes (EE.UU.)</option><option value="95">Israel</option><option value="100">Italia</option><option value="101">Jamaica</option><option value="103">Japón</option><option value="239">Jersey</option><option value="102">Jordan</option><option value="173">Katar</option><option value="114">Kazajstán</option><option value="104">Kenia</option><option value="105">Kirguizstán</option><option value="107">Kiribati</option><option value="112">Kuwait</option><option value="115">Laos</option><option value="121">Lesoto</option><option value="124">Letonia</option><option value="116">Líbano</option><option value="120">Liberia</option><option value="125">Libia</option><option value="118">Liechtenstein</option><option value="122">Lituania</option><option value="123">Luxemburgo</option><option value="135">Macao</option><option value="131">Macedonia</option><option value="129">Madagascar</option><option value="145">Malasia</option><option value="143">Malawi</option><option value="142">Maldivas</option><option value="132">Mali</option><option value="140">Malta</option><option value="126">Marruecos</option><option value="137">Martinica</option><option value="141">Mauricio</option><option value="138">Mauritania</option><option value="225">Mayotte</option><option value="144">México</option><option value="128">Moldavia</option><option value="127">Mónaco</option><option value="134">Mongolia</option><option value="238">Montenegro</option><option value="139">Montserrat</option><option value="146">Mozambique</option><option value="133">Myanmar</option><option value="147">Namibia</option><option value="156">Nauru</option><option value="155">Nepal</option><option value="152">Nicaragua</option><option value="149">Níger</option><option value="151">Nigeria</option><option value="157">Niue</option><option value="154">Noruega</option><option value="148">Nueva Caledonia</option><option value="158">Nueva Zelanda(Aotearoa) </option><option value="75">NULL</option><option value="159">Omán</option><option value="153">Países Bajos</option><option value="165">Pakistán</option><option value="171">Palau</option><option value="160">Panamá</option><option value="163">Papúa Nueva Guinea</option><option value="172">Paraguay</option><option value="161">Perú</option><option value="168">Pitcairn</option><option value="162">Polinesia francés</option><option value="166">Polonia</option><option value="170">Portugal</option><option value="237">Puerto Rico</option><option value="36">República Centroafricana</option><option value="50">Republica checa</option><option value="35">República Democrática del Congo</option><option value="55">República Dominicana</option><option value="174">Reunión</option><option value="177">Ruanda</option><option value="175">Rumania</option><option value="84">S. Georgia and S. Sandwich Islands</option><option value="60">Sahara Occidental</option><option value="223">Samoa</option><option value="248">Samoa Americana</option><option value="109">San Cristóbal y Nieves</option><option value="189">San Marino</option><option value="231">San Martín</option><option value="235">San Martín</option><option value="167">San Pedro y Miquelón</option><option value="216">San Vicente y las Granadinas</option><option value="184">Santa helena</option><option value="117">Santa Lucía</option><option value="241">Santa Sede (Estado Ciudad del Vaticano)</option><option value="193">Santo Tomé y Príncipe</option><option value="190">Senegal</option><option value="236">Serbia</option><option value="180">Seychelles</option><option value="188">Sierra Leona</option><option value="183">Singapur</option><option value="195">Siria</option><option value="191">Somalia</option><option value="119">Sri Lanka</option><option value="196">Suazilandia</option><option value="226">Sudáfrica</option><option value="181">Sudán</option><option value="234">Sudán del Sur</option><option value="182">Suecia</option><option value="38">Suiza</option><option value="192">Surinam</option><option value="186">Svalbard y Jan Mayen</option><option value="201">Tailandia</option><option value="210">Taiwán</option><option value="211">Tanzania</option><option value="202">Tayikistan</option><option value="245">Territorio Británico del Océano Índico</option><option value="169">Territorio Palestino</option><option value="199">Territorios Franceses del Sur</option><option value="78">Tierra Verde</option><option value="233">Timor Oriental</option><option value="200">Togo</option><option value="203">Tokelau</option><option value="206">Tonga</option><option value="208">Trinidad y Tobago</option><option value="205">Túnez</option><option value="204">Turkmenistan</option><option value="207">Turquía</option><option value="209">Tuvalu</option><option value="212">Ucrania</option><option value="213">Uganda</option><option value="214">Uruguay</option><option value="215">Uzbekistán</option><option value="221">Vanuatu</option><option value="217">Venezuela</option><option value="220">Viet Nam</option><option value="222">Wallis y Futuna</option><option value="224">Yemen</option><option value="228">Zaire (ex)</option><option value="227">Zambia</option><option value="229">Zimbabue</option>
                        </select>
                        <br />
                        <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(2, true); actions.updateTravelData("origen", origen);}}>
                            Actualizar
                        </Button>
                    </> : null
                    }
                    </div>
                    <br />
                    <div>
                    {store.formFieldVisibility[2] ? <><select className="inputCotizador" onChange = {e => {setDestino(e.target.value); setTextoDestino(e.target.options[e.target.selectedIndex].text)}}>
                                                        <option selected value>Destino</option>
                                                        <option value={1}>Europa</option>
                                                        <option value={4}>Estados Unidos</option>
                                                        <option value={5}>Resto del mundo</option>
                                                      </select>
                                                      <br />
                        <Button tag="a" color="primary" wideMobile onClick={() => {actions.changeVisibility(3, true); actions.updateTravelData("destino", destino);}}>
                            Actualizar
                                                      </Button>
                    </> : null
                    }
                    </div>
                    <br />
                    <div>
                    {store.formFieldVisibility[3] ? <>
                                                    {store.travelData.tipo == "Viajes Anuales" ? <DuracionMaxima /> : <DatePicker />}
                                                     
                                                      <br />
                    </> : null
                    }
                    </div>
                    <br />
                    <div>
                    {store.formFieldVisibility[4] ? <Pasajeros /> : null}
                    </div>
                    <div style={{paddingTop: "10%"}}>
                    {store.formFieldVisibility[5] ?  
                    
                    <Button tag="a" color="primary" wideMobile onClick={() => {actions.resetVisibility(); actions.apiCallCotizar(); setfilling(false);}}>
                    Cotizar
                    </Button>
                    : null}
                    
                    </div>
                </form>
            </div>
            </>
            :
            <>
                <h3 className="text-color-primary">Planes Disponibles</h3>
                <div style={{display: (isTabletOrMobile ? "block" : "flex"), justifyContent: "space-around"}} className="row">
                        <PlanDisponible nombre="Orange1" precio={10} cobertura={100}/>
                        <PlanDisponible nombre="Orange2" precio={100} cobertura={1000}/>
                        <PlanDisponible nombre="Orange3" precio={20} cobertura={300}/>
                        <PlanDisponible nombre="Orange4" precio={100} cobertura={500}/>
                        <div className="w-100"></div>
                        <PlanDisponible nombre="Orange5" precio={450} cobertura={10000}/>
                        <PlanDisponible nombre="Orange6" precio={3000} cobertura={1000000}/>
                        <PlanDisponible nombre="Orange7" precio={34} cobertura={300}/>
                        <PlanDisponible nombre="Orange8" precio={10} cobertura={100}/>
                </div>
                <div style={{paddingTop: "5%"}}>
                <Button tag="a" color="primary" wideMobile onClick = {() => setfilling(true)}>
                    Volver al Cotizador
                </Button>
                </div>
            </>
            }
        </section>

    );
}

CotizadorReactivo.propTypes = propTypes;
CotizadorReactivo.defaultProps = defaultProps;

export default CotizadorReactivo;