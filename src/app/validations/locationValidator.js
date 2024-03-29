export default function LocationValidator(location) {

    if (!location.name || !location.description || !location.image || !location.latitude || !location.longitude) {
        return {
            status: false,
            message: "Los campos no pueden quedar vacios"
        }
    }

    if (location.name.length < 3) {
        return {
            status: false,
            message: "El nombre de la ubicación debe tener al menos 3 caracteres"
        }
    }

    if (location.description.length < 10) {
        return {
            status: false,
            message: "La descripción de la ubicación debe tener al menos 10 caracteres"
        }
    }

    if (location.image == null) {
        return {
            status: false,
            message: "La imagen es requerida"
        }
    }

    if (location.latitude == "" && location.longitude == "") {
        return {
            status: false,
            message: "Elija una ubicación para esta localidad"
        }
    }



    return {
        status: true,
        message: ""
    };
    
}