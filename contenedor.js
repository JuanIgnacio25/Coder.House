const fs = require('fs');

const checkFile = async (nombreArchivo) => {
    const stats = fs.existsSync(nombreArchivo);

    if (stats == false) {
        try {
            await fs.promises.writeFile(nombreArchivo, "[]");
        } catch (error) {
            throw error;
        }
    }
}

class Contenedor {

    constructor(nombreArchivo) {
        this.id = 1;
        this.nombreArchivo = nombreArchivo;
    };

    async getAll() {
        try {
            await checkFile(this.nombreArchivo);
            const contenidoJson = JSON.parse(await fs.promises.readFile(this.nombreArchivo));
            return contenidoJson;
        } catch (error) {
            throw error;
            return "[]";
        }

    }
    async getById(id) {
        try {
            await checkFile(this.nombreArchivo);
            let array = JSON.parse(await fs.promises.readFile(this.nombreArchivo));

            array = array.filter((x) => {
                return x.id == id;
            });

            return array[0];
        } catch (error) {
            throw error;
        }

    }

};

module.exports = Contenedor;