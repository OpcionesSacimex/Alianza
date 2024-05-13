<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>

<body>
    <div class="flex flex-wrap-reverse" style="max-width:100%; background: #d1d5db;">
        <div style="min-width:200px;min-height:100px;">
            <div style="display: flex; justify-content: center; align-items: center; background: #d1d5db;  color: #333;">
                <div style="width: 100%;">
                    <label
                        style="font-size: xx-large; 
                        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; 
                        color: #096647">
                        Bienvenido a Sacimex
                    </label>
                </div>
            </div>
        </div>
        <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
            style="min-width:200px;min-height:100px">
            <div>

                <label>
                    Su registro a Sacimex ha sido exitoso,
                    Por motivos de seguridad debemos validar su correo electronico, si usted no realizo esta accion
                    haga caso omiso al precente correo

                    <a href='{{$origen}}/{{$key}}'>Validar correo </a>
                </label>
            </div>
        </div>
        <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round"
            style="min-width:200px;min-height:100px">
          
                <div class="container">
                    <div class="row pb-5">
                        <div class="col-md-9 pt-5">
                            <h5 class="mb-3">Contacto</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <p class="pl-3"><i class="fas fa-user"></i> <span class="pl-3">Opciones Sacimex,
                                            S.A. de C.V. SOFOM E.N.R</span></p>
                                    <p class="pl-3"><i class="fas fa-map-marker-alt"></i> <span class="pl-3">Valerio
                                            Trujano 713, Oaxaca de Juarez, Oaxaca, CP 68000</span></p>
                                    <p class="pl-3"><i class="far fa-clock"></i> <span class="pl-3">Horario de
                                            atención: Lunes a Viernes de 09:00 a 19:00 hrs y Sábado de 09:00 a 14:00
                                            hrs.</span></p>
                                </div>
                                <div class="col-md-6"><a href="tel:+529515141208" class="btn btn-link text-white"><i
                                            class="fas fa-phone-alt mr-3"></i>
                                        (951) 5141208
                                    </a> <a href="tel:+529515011992" class="btn btn-link text-white"><i
                                            class="fas fa-phone-alt mr-3"></i>
                                        (951) 5011992
                                    </a> <a href="tel:+529515162104" class="btn btn-link text-white"><i
                                            class="fas fa-phone-alt mr-3"></i>
                                        (951) 5162104
                                    </a> <a href="tel:+528008238544" class="btn btn-link text-white"><i
                                            class="fas fa-phone-alt mr-3"></i>
                                        800 823 8544
                                    </a> <a href="mailto:atencion_a_usuarios@opcionessacimex.com"
                                        class="btn btn-link text-white"><i class="far fa-envelope mr-3"></i>
                                        atencion_a_usuarios@opcionessacimex.com
                                    </a></div>
                            </div>
                        </div>
                        <div class="col-md-3 pt-5">
                            <h5>Redes sociales</h5> <a href="https://www.facebook.com/sacimex/" target="_blank"
                                class="text-white pl-3 h2">
                                <img class="XNo5Ab" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC" style="height:28px;width:28px" alt="" data-csiid="19" data-atf="4">    
                            </a>
                            <a href="https://twitter.com/sacimex" target="_blank" class="text-white pl-3 h2">
                                <img class="XNo5Ab"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA/0lEQVR4AbXPIazCMACE4d+L2qoZFEGSIGcRc/gJJB5XMzGJmK9EN0HMi+qaibkKVF1txdQe4g0YzPK5yyWXHL9TaPNQ89LojH87N1rbJcXkMF4Fk31UMrf34hm14KUeoQxGArALHTMuQD2cAWQfJXOpgTbksGr9ng8qluShJTPhyCdx63POg7rEim95ZyR68I1ggQpnCEGwyPicw6hZtPEGmnhkycqOio1zm6XuFtyw5XDXfGvuau0dXHzJp8pfBPuhIXO9ZK5ILUCdSvLYMpc6ASBtl3EaC97I4KaFaOCaBE9Zn5jUsVqR2vcTJZO1DdbGoZryVp94Ka/mQfE7f2T3df0WBhLDAAAAAElFTkSuQmCC"
                                    style="height:26px;width:26px" alt="" data-csiid="8" data-atf="1">
                            </a> <a href="https://www.instagram.com/opciones_sacimex/?hl=es-la" target="_blank"
                                class="text-white pl-3 h2">
                                <img class="XNo5Ab"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABOFBMVEVHcExxF/13F/1zFf2AFv2MCu+iBOmyAuLEAd7SANraBMzwHpedI+XeANfmANHmAr+PF/6fD/vxAL7qArV7GP21FvnRVurnZ+P2Z9roQeDzGtXzB8v7AqvWiPn+7fn////7ftv/A7z0BKH3v/H+3fT+ruj+AJr/9/r/RcD/bMDKFff/Bo3iG+r8GrX/AIH+H5r/yeP+BHj/t9n/V5r+Am7+H37+BGT/ssX/Imz/RXv/ucz+e4z+JFT/XI3/MGL+LUf/u7f/yc7/Alr+OUf+MSz+QzT+R0T+iHD+SRj+VzH+WQX+AkL+c2L/0sT+aCX+cBL/7+j+aQL+eRv/oUX/fwL+iBD/wXz+jgD/3rr/1rn+dgz+nAP9FpT+lw7+qgH+tQD+vQD/w1f9kwf/xAD9PFn9ogj/ywD9uAfgLZLBAAAAaHRSTlMAW9H+////////xEsC///N////zFz/////////////////uP////7///////////7////////////////////////////////////////////////////////F/7VQ///+/87/vsj/uqL0GQwAAAHcSURBVHgBRMlFehwxEEDhV1VS04yZ7U04m+AmcBjfLLscJ4xLHyA0YGqSlJ7P9MT6BRC52EEQuDjlFITx2eWvXJsDQWYIKgJj4VQW5gBJAg75K5vTgZDTFUEu/kUEzqGaiC6DMBbhpqQyoyKTNYD1Hp+Ui6J0ZH1HhXNA0RfzyRIZl5WprroK3BZwwvx0aUGdB87HCIN5VBUVP9i468ZLxWLv+pg6vJmDaSiSW2eyIRNg84/HxfVJmTD3DxFWGmWjrosRpxMNGr3iIqYbG7IGK5lKvZE3jVuTynsDzHRoD3xpxaTQvIKumGBWgCouM9bPKEisJg0VTV4X0aBqQEuXQ2kGlmVmZCtgCoxBJfeAz0b8NQbWI7wOAKCZMgbn9E6tItG1HFTKRQ4jgSYpiiPu6BFJW1fW9J7oDFWWgpf0MH09YnB6yIEYnIJhLhqkpw3aC4OuUJ4QlDzX55/Um5m4Ue6dmXr59LwkBM0xy/ieVNV7zSSTZMU3fs8UNBomr+v3jQx5X1XmB7tdgnNu1JqDl+0nbnp+HpLp+WM5bB0mIMJFc/ouSgjd+U99O1qYONOhFEMonPcZCZ6eGp9eRcSwhWkSRCIxKnfeIMBh1WRcFOhTaENo/096OTA7AACDzKODDThakgAAAABJRU5ErkJggg=="
                                    style="height:26px;width:26px" alt="" data-csiid="8" data-atf="1">
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>

</body>

</html>
