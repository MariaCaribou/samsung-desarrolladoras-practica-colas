// En la pescadería han ido llegando clientes que han cogido número para ser 
// atendidos. El orden de llegada ha sido: Paco, Carmen, Analía, Fernando y Clara. 
// Hacer una función que imprima en pantalla en orden FIFO (First In First Out) los 
// nombres de las personas según el número del ticket que han cogido (del 1 al 5).

class Cola {
    constructor ()
    {
        this.items = [];
    }

    encolar(elem)
    {
        this.items.push(elem);
        return this.items;
    }

    desencolar ()
    {
        this.items.shift();
        return this.items;
    }

    imprimir ()
    {
        for (var i = 0; i < this.items.length; i++)
        {
            document.write((i+1) + " " + this.items[i] + "<br/>");
        }
    }
}

const turnoPescaderia = new Cola();

turnoPescaderia.encolar("Paco");
turnoPescaderia.encolar("Carmen");
turnoPescaderia.encolar("Analía");
turnoPescaderia.encolar("Fernando");
turnoPescaderia.encolar("Clara");

turnoPescaderia.imprimir();