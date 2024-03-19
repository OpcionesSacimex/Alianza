import { PanelCenter } from "../../../globalsComponents/panels/PanelCenter"
import {URLStorage} from "../../../utils/URLBackend"
export const Terminos=()=>{
    const image = `${URLStorage}/img/vrdsacinfondo`
    return (
        <div className="font-bold" style={{
            backgroundImage: `url(${image})`, backgroundRepeat:"repeat", backgroundSize:104, 
            }}>
            <PanelCenter>
                <label className="text-green-900 text-2xl text-center font-bold"> OPCIONES SACIMEX, S.A. DE C.V. SOFOM E.N.R. </label>
                <label className="text-green-800 text-xl text-center font-bold"> TÉRMINOS Y CONDICIONES</label>
            </PanelCenter>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Datos de identificación: </label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Esta página web es propiedad y está operado por <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> Estos Términos establecen los términos y condiciones bajo los cuales tú puedes usar nuestra página web y servicios ofrecidos por nosotros. Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado estar sujeto a estos Términos:
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Derechos de propiedad intelectual e Industrial:</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Los derechos de propiedad intelectual respecto de los Servicios y Contenidos y los signos distintivos y dominios prestados a través de, contenidos en o atingentes a, el Portal, así como los derechos de uso y explotación de los mismos, incluyendo en forma enunciativa pero no limitativa, su divulgación, modificación, transmisión, publicación, venta o comercialización, reproducción y/o distribución, son propiedad exclusiva de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R</label> y están protegidas por la normativa vigente en materia de propiedad intelectual. El Usuario no adquiere derecho alguno de propiedad intelectual por el simple uso de los Servicios y Contenidos del Portal y en ningún momento dicho uso será considerado como una autorización o una licencia para utilizar los Servicios y Contenidos con fines distintos a los expresamente previstos en los presentes Términos y Condiciones de Uso. En consecuencia, el Usuario EN NINGÚN CASO estará facultado para crear nuevas versiones, distribuir, exhibir o de cualquier forma explotar, cualquiera de los Contenidos desplegados a través de este Portal y que son propiedad exclusiva de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R</label>
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Usos permitidos.</label>
            </div>
            <div className="mt-3 text-justify">
                <ul>
                    <li>
                        <label className="text-md">Salvo indicación contraria en el Portal, el Usuario estará facultado para ver, imprimir, copiar y distribuir los documentos desplegados en el mismo, siempre que cumplan con las siguientes condiciones:</label>
                        <ol className="mt-4"> 
                            <li>
                            Que el documento sea utilizado única y exclusivamente con propósitos informativos, personales y no-comerciales
                            </li>
                            <li className="mt-3">
                            Que cualquier copia del documento o cualquier porción del mismo, incluya en forma ostensible la información relativa a los derechos de propiedad intelectual y/o industrial de los mismos, en la misma forma en que dicha información sea expresada en el documento original desplegado en el Portal, y que el documento no pueda ser modificado en forma alguna.
                            </li>  
                        </ol>
                    </li>
                    <li className="mt-3">
                        <label className="text-md"><label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label>, se reserva el derecho de revocar la autorización a que se refiere el número anterior en cualquier tiempo, y por tanto, el uso por parte del Usuario deberá interrumpirse inmediatamente a partir del momento en que reciba la notificación correspondiente de parte de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label></label>
                    </li>
                    <li className="mt-3">
                        <label>El aprovechamiento de los Servicios y Contenidos ofrecidos o desplegados en el Portal, es exclusiva responsabilidad del Usuario, quien en todo caso, deberá servirse de ellos acorde a las funcionalidades permitidas en el propio Portal y a los usos autorizados en el presente Contrato, por lo que el Usuario se obliga a utilizarlos de modo tal que no atenten contra las normas de uso y convivencia en Internet, las leyes de los Estados Unidos Mexicanos y la legislación vigente en el estado en que el Usuario se encuentre al usarlos, las buenas costumbres, la dignidad de la persona y los derechos de Terceros. El Portal es para el uso personal y del Usuario por lo que en ningún caso podrá comercializar de manera alguna los Servicios y Contenidos.</label>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Usos no permitidos.</label>
            </div>
            <div className="mt-3">
                <label>El Usuario en ningún caso estará facultado para:</label>
            </div>
            <div className="mt-3 text-justify">
                <ul>
                    <li className="mt-4">
                        <label>Utilizar el Portal para obtener información confidencial para fines distintos que el de acceder a información respecto de los Servicios, o para fines de solicitar negocios de otros Usuarios del Portal.</label>
                    </li>
                    <li className="mt-4">
                        <label>Revender o redistribuir la información contenida en el Portal.</label>
                    </li>
                    <li className="mt-4">
                        <label>Promover o anunciar la habilidad de proveer productos o servicios que el Usuario no tenga la intención de proveer o que sean ilícitos o prácticamente imposibles de proveer sin contar con un plazo razonable para tales efectos;</label>
                    </li>
                    <li className="mt-4">
                        <label>Usar este Portal o cualquiera de la información disponible en el mismo, de cualquier forma, que pudiera resultar ilícita, ilegal o que constituya una violación a las leyes de México, ya sean federales, estatales o municipales.</label>
                    </li>
                    <li className="mt-4">
                        <label>Copiar o almacenar cualquier Contenido con propósitos diferentes de los mencionados expresamente en la sección de usos permitidos que antecede, sin contar con la autorización previa y por escrito de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label>, o en su caso, del titular de los derechos de autor de que se trate.</label>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Condiciones de uso.</label>
            </div>
            <div className="mt-3  text-justify">
                <label>Para usar nuestra página web y/o recibir nuestros servicios, debes tener al menos 18 años de edad, y poseer la autoridad legal, el derecho y la libertad para participar en estos Términos como un acuerdo vinculante.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>El acceso a la Página Web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por el Usuario. Con carácter general, para el acceso a los servicios y contenidos de la Página Web no será necesario el Registro del Usuario. No obstante, la utilización de determinados servicios podrá estar condicionada al Registro previo del Usuario. Los datos introducidos por el Usuario deberán ser exactos, actuales y veraces en todo momento.</label>
            </div>
            <div className="mt-3">
                <label>A título enunciativo, y en ningún caso limitativo o excluyente, el Usuario se compromete a:</label>
            </div>
            <div className="mt-3 text-justify">
                <ul>
                    <li className="mt-4">
                        <label>Utilizar el sitio web y todo su contenido y servicios conforme a lo establecido en la ley, la moral, el orden público y en las presentes Condiciones. Asimismo, se obliga hacer un uso adecuado de los servicios y/o contenidos de este Portal y a no emplearlos para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico aplicable.</label>
                    </li>
                    <li className="mt-4">
                        <label>No transmitir, introducir, difundir y poner a disposición de terceros, cualquier tipo de material e información (datos, contenidos, mensajes, dibujos, archivos de sonido e imagen, fotografías, software, etc.) que sean contrarios a la ley, la moral, el orden público y las presentes Condiciones.</label>
                    </li>
                    <li className="mt-4">
                        <label>Mantener indemne a <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> ante cualquier posible reclamación, multa, pena o sanción que pueda venir obligada a soportar como consecuencia del incumplimiento por parte del USUARIO de cualquiera de las normas de utilización antes indicadas, reservándose, además, <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> el derecho a solicitar la indemnización por daños y perjuicios que corresponda.</label>
                    </li>
                </ul>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Limitación de responsabilidad: </label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> no realiza ningún tipo de asesoramiento al Usuario en ningún ámbito, ya sea fiscal, económico, contable, mercantil o cualquier otro. Por ello, las decisiones adoptadas por el Usuario son realizadas a título personal y en este acto exime a <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> de toda responsabilidad en la que incurra el Usuario por la obtención de los créditos.
                </label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> no asume ningún tipo de responsabilidad por fallos en la red de internet o por el ataque al software de cualquier hacker
                </label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Usted declara ser conocedor de todos los riesgos que supone la contratación de los créditos por lo que exonera a <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> de cualquier responsabilidad por pérdidas incurridas o mal manejo o administración de recursos.
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Cookies</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                El Usuario que tenga acceso al Portal, acuerda recibir las Cookies que sean transmitidas por los servidores de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> Asimismo, el Usuario reconoce expresamente que las Cookies pueden contener información relativa a la identificación proporcionada por el Usuario o información para rastrear las Páginas que el Usuario ha visitado dentro del Portal, en el entendido, sin embargo, de que una Cookie no puede leer los datos o información del disco duro del Usuario, ni leer las Cookies creadas por otros Sitios o Páginas.
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Terminación.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Nos reservamos el derecho de suspender o cancelar su Cuenta en cualquier momento sin previo aviso por alguno de los siguientes motivos:
                </label>
            </div>
            <div className="mt-3 text-justify">
                <ul>
                    <li className="mt-4">
                        <label>
                        Tenemos razones para sospechar que usted está relacionado con actividades ilícitas o ilegales o una organización prohibida por la ley vigente,
                        </label>
                    </li>
                    <li className="mt-4">
                        <label>
                        Hemos tenido conocimiento de un uso no autorizado, real o potencial, de los datos de su Cuenta u otra violación de seguridad, real o potencial, o sospechamos de otro modo que haya habido algún uso no autorizado o fraudulento de su Cuenta,
                        </label>
                    </li>
                    <li className="mt-4">
                        <label>
                        Se vuelve o podría volverse ilegal o violar las leyes o regulaciones vigentes el continuar permitirle usar los Servicios
                        </label>
                    </li>
                    <li className="mt-4">
                        <label>
                        El Usuario ha incumplido estos Términos, y no ha logrado subsanar dicho incumplimiento dentro de los 15 días posteriores a la recepción de nuestra notificación, o usted ya no cumple con los criterios de registro establecido en estos Términos.
                        </label>
                    </li>
                    <li className="mt-4">
                        <label>
                        Estamos obligados a tomar estas medidas según establece la ley vigente o porque nos lo indica un tribunal u otro organismo de jurisdicción competente.
                        </label>
                    </li>
                    <li className="mt-4">
                        <label>
                        Cualquier sospecha de actividad ilegal puede ser motivo suficiente para cancelar la Cuenta y puede remitirse a las autoridades policiales correspondientes.
                        </label>
                    </li>
                </ul>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Tras la terminación de su Cuenta, dejará de utilizar los Servicios y todos los derechos que se le otorguen en virtud de estos Términos terminarán, y eliminaremos el contenido del Usuario, por lo que comprende y acepta que podemos mantener cierta información y datos de forma anónima para desarrollar aún más los Servicios (por ejemplo, estadísticas, para entrenar algoritmos de aprendizaje automático).
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Vigencia y modificaciones a los términos y condiciones.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Los Términos y Condiciones entrarán en plena vigencia para cada Usuario a partir de la fecha de su registro en la Plataforma y se mantendrán vigentes, incluyendo sus modificaciones, hasta que se produzca una razón que determine su finalización de acuerdo a los propios Términos y Condiciones o por decisión del Usuario de cancelar su suscripción como tal y dejar de usar los Servicios y la Plataforma. <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> se reserva el derecho de realizar en cualquier momento las modificaciones que considere pertinentes a los Términos y Condiciones o a las Servicios, así como a cualquier información incorporada a los mismos por referencia, a fin de adaptarlos a la normatividad que les resulte aplicable o a cambios en la legislación o jurisprudencia, por una obligación legal o contractual que así lo determine, sin perjuicio de también poder modificarlos al exclusivo criterio de <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> para adaptarse a las prácticas de la industria o a conveniencias operativas.
                </label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Una vez realizadas las modificaciones, <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label> enviará una notificación vía correo electrónico a los Usuarios sobre las modificaciones y su entrada en vigor. El Usuario entiende y acepta que el uso continuado del Servicio o de la Plataforma, una vez que las modificaciones a los presentes Términos y Condiciones hayan entrado en vigor, constituye la aceptación plena de su parte respecto de dichas modificaciones. En caso de que el Usuario no esté de acuerdo con las modificaciones realizadas a los Términos y Condiciones o simplemente ya no quiera estar sujeto a estos, podrá gestionar la cancelación inmediata de su registro como Usuario sin penalización alguna, siempre y cuando no se encuentre vigente en un contrato de crédito, de lo contrario tendrá que esperar el termino de dicho contrato o realizar la liquidación de su adeudo, para proceder con la cancelación de su registro. En caso de que el Usuario no cancele su registro, a la entrada en vigor de las modificaciones correspondientes, se entenderá que está de acuerdo con las mismas. Sin perjuicio de lo anterior, las obligaciones contraídas, que se encontraban vigentes al momento de notificarse la modificación de los Términos y Condiciones, continuarán vigentes y obligatorias para las partes en los términos acordados y conforme a los Términos y Condiciones vigentes al momento de su celebración.    
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Aceptación.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                El Usuario acepta que, durante el proceso de registro como Usuario, al marcar el cuadro con el texto que establece “Registrarme”, o en su caso aceptar los textos donde se lea la palabra “Autorizo. . . “, se obligará plenamente por estos Términos y Condiciones sin salvedad u oposición alguna, entendiéndose para tales efectos que dicha aceptación constituye una firma electrónica conforme a lo dispuesto en el Código de Comercio, y tendrá los mismos efectos que la firma autógrafa.
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Protección de datos personales.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                Los datos proporcionados por los Usuarios de este Portal, a manera enunciativa, y en ningún caso limitativa o excluyente, como personales, patrimoniales, financieros, son protegidos por lo dispuesto en la <label className="text-green-800 font-bold">Ley Federal de Protección de Datos Personales en Posesión de Particulares</label>, siendo  <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label>, responsable del tratamiento que se tenga con ellos.
                </label>
            </div>
            <div className="mt-3">
                <label className="text-md text-green-800 text-xl font-bold">Ley aplicable y Jurisdicción.</label>
            </div>
            <div className="mt-3 text-justify">
                <label>
                El presente Contrato se rige por las leyes mexicanas, para la interpretación, cumplimiento y ejecución del presente Contrato, las Partes se someten a los tribunales y Juzgados competentes del Estado de Oaxaca, renunciando expresamente a cualquier otro fuero que, por razón de sus domicilios, presentes o futuros, o por cualquier otra causa, pudiere corresponderles. <label className="text-green-800 font-bold">Opciones Sacimex, S.A. de C.V. SOFOM E.N.R.</label>, no realiza declaración u otorga garantía alguna en el sentido de que la información contenida en este Portal sea apropiada o disponible para ser utilizada en todos los países o jurisdicciones, y prohíbe accesar materiales desde territorios en donde los Servicios y Contenidos del Portal sean ilícitos. Aquellos Usuarios que acceden a este Portal, lo hacen por iniciativa propia y serán responsables de cumplir con las leyes aplicables en los lugares desde los cuales acceden al Portal.
                </label>
            </div>
        </div>
    )
}