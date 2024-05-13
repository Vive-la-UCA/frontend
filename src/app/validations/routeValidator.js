export default function RouteValidator(route) {
    if(route.name.length < 3) {
        return {
            status: false,
            message: "El nombre de la ruta debe tener al menos 3 caracteres"
        }
    }

    if(route.image === null) {
        return {
            status: false,
            message: "La imagen es requerida"
        }
    }


    if(route.locations.length === 0) {
        return {
            status: false,
            message: "Debe elegir al menos una localidad"
        }
    }

    if (route.locations === null) {
        return {
            status: false,
            message: "Las localidades son requeridas"
        }
    }

    return {
        status: true,
        message: ""
    }
}