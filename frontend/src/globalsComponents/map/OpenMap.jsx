import {MapContainer, Marker, TileLayer, useMapEvents, Rectangle, useMap} from "react-leaflet";
import {useMountEffect} from "primereact/hooks"
import React, {useMemo, useRef, useState} from "react"
import {boundRectangleCenter, iniciar} from "./handleMaps"
import {Toast} from "primereact/toast";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import "leaflet-geosearch/dist/geosearch.css"
import "leaflet-geosearch/dist/geosearch.umd"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import L from "leaflet"
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import {PanelGrid} from "../panels/PanelGrid";
import { DropDownAutoShow } from "../select/DropDownShow";
//import {DropDownAutoShow} from "../../selectors/DropDownAutoShow";


export const OpenMap = ({setPosition,position,buscar=true,size="400px"}) => {
    const toast = useRef()

    const provider = new OpenStreetMapProvider();
    const [ubicaciones, setUbicaciones] = useState([]);
    const [selectedDir, setSelectedDir] = useState(undefined);
    const [poligono, setPoligono] = useState(undefined);

    let timeOut;

    const redOptions = { color: 'red' }
    const onNoPermision = () => {
        toast.current.show({severity: 'war',summary:"Advertencia", detail: "El navegador no soporta el acceso a la ubicacion"})
    }
    const onErrorHubicate = (error) => {
        if (error.code === error.PERMISSION_DENIED) {
            toast.current.show({ severity: 'info', summary: 'Info', detail: 'Su navegador no cuenta con el permiso para acceder a la ubicacion' });
        }
    }
    const onUbicacion = async (ubicacion) => {
        const {latitude, longitude} = ubicacion.coords;
        if (latitude && longitude) {
            setPosition([latitude, longitude])
        } else {
            toast.current.show({ severity: 'error', summary: 'Error', detail: "No fue posible obtener la ubicacion"})
        }
    }
    const getPoligono = (value)=>{
        setPoligono(value)
        setPosition(boundRectangleCenter(value))
    }
    useMountEffect(()=>{
        if(!position){
            iniciar({onUbicacion:onUbicacion,onError:onErrorHubicate,onNoPermision:onNoPermision})
        }
        //iniciar({onUbicacion:onUbicacion,onError:onErrorHubicate,onNoPermision:onNoPermision})
    })

    const buscarDir = async (e)=>{
        clearTimeout(timeOut)
        timeOut = setTimeout(()=>{
            const obtener = async ()=>{
                const results = await provider.search({ query: `${e.target.value?e.target.value + ', México':''}` });
                setUbicaciones(results)
            }
            obtener()
        },800)
        return()=>{
            clearTimeout(timeOut)
        }

    }
    const MapComponent=()=>{
        const map = useMap();
        map.setView(position,map.getZoom())
        useMapEvents({
            click:(e)=>{
                const {latlng:{lat,lng}} = e
                setPosition([lat,lng])
            },
        })
        return null
    }
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                const {lat,lng} = marker.getLatLng()
                if (marker) {
                    setPosition([lat,lng])
                }
            },
        }),
        [],
    )
    return (
        <>
            <Toast ref={toast}></Toast>
            {
                position?
                    <>
                        {
                            buscar?
                                <>
                                    <PanelGrid>
                                        
                                        <div className="col-12">
                                        <DropDownAutoShow onChangeInput={buscarDir} dropOnchange={(e)=>{
                                                setSelectedDir(e.value)
                                                getPoligono(e.value)
                                        }} options={ubicaciones} optionLabel="label" optionValue="bounds"></DropDownAutoShow>
                                        </div>
                                        
                                        
                                    </PanelGrid>
                                </>
                                :<></>
                        }
                        <div style={{height:size}}>
                            <MapContainer style={{height:"100%", width:"100%"}} center={position} zoom={19} scrollWheelZoom={true} >

                                <TileLayer
                                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                <MapComponent/>
                                {
                                    poligono?
                                        <>
                                            <Rectangle bounds={poligono} pathOptions={redOptions} />
                                        </>
                                        : <></>
                                }

                                {
                                    position?
                                        <>
                                            <Marker eventHandlers={eventHandlers} ref={markerRef} draggable={true} position={position} icon={new L.Icon({
                                                iconUrl:markerIcon,
                                            })} >
                                            </Marker>
                                        </>
                                        :
                                        <>
                                        </>
                                }
                            </MapContainer>
                        </div>

                    </>:
                    <></>
            }
        </>
    )
}
//E80005