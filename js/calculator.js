/**
 * 🧠 Motor de Cálculo de Peso Ideal
 * Contiene la lógica para las fórmulas de Lorentz y Devine.
 */

export class WeightCalculator {
    /**
     * Calcula el peso ideal usando la fórmula de Lorentz.
     * @param {number} height - Altura en cm.
     * @param {string} sex - 'male' o 'female'.
     * @returns {number} Peso ideal en kg.
     */
    static calculateLorentz(height, sex) {
        if (sex === 'male') {
            return height - 100 - ((height - 150) / 4);
        } else {
            return height - 100 - ((height - 150) / 2);
        }
    }

    /**
     * Calcula el peso ideal usando la fórmula de Devine.
     * @param {number} height - Altura en cm.
     * @param {string} sex - 'male' o 'female'.
     * @returns {number} Peso ideal en kg.
     */
    static calculateDevine(height, sex) {
        const heightInches = height / 2.54;
        const inchesOver5Feet = heightInches - 60;
        
        if (sex === 'male') {
            return 50 + (2.3 * inchesOver5Feet);
        } else {
            return 45.5 + (2.3 * inchesOver5Feet);
        }
    }

    /**
     * Calcula el Indice de Masa Corporal (IMC).
     * @param {number} weight - Peso en kg.
     * @param {number} height - Altura en cm.
     * @returns {number} IMC.
     */
    static calculateBMI(weight, height) {
        const heightMeters = height / 100;
        return weight / (heightMeters * heightMeters);
    }

    /**
     * Devuelve un rango de peso ideal promediando fórmulas.
     * @param {number} height - Altura en cm.
     * @param {string} sex - 'male' o 'female'.
     * @returns {Object} { min, max }
     */
    static getIdealRange(height, sex) {
        const lorentz = this.calculateLorentz(height, sex);
        const devine = this.calculateDevine(height, sex);
        
        // Creamos un rango basado en estas dos fórmulas
        const min = Math.min(lorentz, devine) - 2;
        const max = Math.max(lorentz, devine) + 2;
        
        return {
            min: Math.round(min),
            max: Math.round(max)
        };
    }

    /**
     * Clasifica el IMC según la OMS.
     * @param {number} bmi 
     * @returns {string} Clasificación.
     */
    static getBMIStatus(bmi) {
        if (bmi < 18.5) return 'Bajo peso';
        if (bmi < 25) return 'Saludable';
        if (bmi < 30) return 'Sobrepeso';
        return 'Obesidad';
    }
}
