export default function BadgeValidator(badge) {
    if(badge.name.length < 3) {
        return {
            status: false,
            message: "El nombre de la ruta debe tener al menos 3 caracteres"
        }
    }

    if(badge.image === null) {
        return {
            status: false,
            message: "La imagen es requerida"
        }
    }


    if(badge.route=== null) {
        return {
            status: false,
            message: "Debe elegir una ruta"
        }
    }
    
    return {
        status: true,
        message: ""
    }
}