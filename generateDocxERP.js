import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun, AlignmentType, TableOfContents, Header, Footer, PageNumber } from 'docx';

const createDocx = async () => {
    const basePath = "C:/Users/carlos/.gemini/antigravity-ide/brain/8849e302-51cf-4993-b78c-517764533d1b/";
    
    const getImageData = (fileName) => {
        try {
            return fs.readFileSync(basePath + fileName);
        } catch (e) {
            console.error("Error leyendo imagen:", fileName);
            return Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64');
        }
    };

    const doc = new Document({
        creator: "Equipo 08",
        title: "Informe ERP Sistemas de Clase Mundial",
        styles: {
            paragraphStyles: [
                {
                    id: "Normal",
                    name: "Normal",
                    basedOn: "Normal",
                    next: "Normal",
                    run: { font: "Arial", size: 22 }, // 11pt
                    paragraph: { spacing: { line: 360, before: 0, after: 200 }, alignment: AlignmentType.JUSTIFIED },
                },
                {
                    id: "Heading1",
                    name: "Heading 1",
                    basedOn: "Normal",
                    next: "Normal",
                    run: { font: "Arial", size: 28, bold: true, color: "000000" }, // 14pt
                    paragraph: { spacing: { before: 400, after: 200 } },
                },
                {
                    id: "Heading2",
                    name: "Heading 2",
                    basedOn: "Normal",
                    next: "Normal",
                    run: { font: "Arial", size: 24, bold: true, color: "000000" }, // 12pt
                    paragraph: { spacing: { before: 400, after: 200 } },
                },
                {
                    id: "Heading3",
                    name: "Heading 3",
                    basedOn: "Normal",
                    next: "Normal",
                    run: { font: "Arial", size: 22, bold: true, color: "333333" }, // 11pt
                    paragraph: { spacing: { before: 200, after: 100 } },
                },
            ]
        },
        sections: [
            // PORTADA
            {
                properties: { page: { pageNumbers: { start: 1, formatType: "DECIMAL" } } },
                children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "UNIVERSIDAD SAN SEBASTIÁN", bold: true, size: 36 })], spacing: { after: 200, before: 800 } }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Facultad de Ingeniería y Tecnología", bold: true, size: 28 })], spacing: { after: 200 } }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ingeniería Civil Informática", bold: true, size: 28 })], spacing: { after: 1500 } }),
                    
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Prueba Solemne N°3: Sistemas de Clase Mundial", bold: true, size: 32 })], spacing: { after: 400 } }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Modelamiento e Implementación de un ERP Logístico para la Integración de la Cadena de Suministro", size: 28, italics: true, color: "444444" })], spacing: { after: 1500 } }),
                    
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Equipo Desarrollador:", bold: true, size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Carlos Jesus Bastidas Pereira", size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Javier Sebastian Morales Subaru", size: 24 })], spacing: { after: 500 } }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Docente Evaluador: Hernán Gutiérrez", size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Correo: hgutierrezf@docente.uss.cl", size: 24 })], spacing: { after: 800 } }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Fecha: 25 de Junio de 2026", size: 24 })] }),
                ],
            },
            // CONTENIDO
            {
                headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Fundamentos ERP - Sistemas de Clase Mundial - Equipo 08", color: "888888", size: 18 })] })] }) },
                footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Página ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }), new TextRun({ text: " de ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })] })] }) },
                children: [
                    new Paragraph({ text: "Índice de Contenidos", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new TableOfContents("Índice", { hyperlink: true, headingStyleRange: "1-3" }),
                    
                    new Paragraph({ text: "1. Introducción: Los ERP como Sistemas de Clase Mundial", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new Paragraph({ text: "En el núcleo de toda organización altamente competitiva reside la capacidad de orquestar sus recursos materiales, financieros y humanos con precisión milimétrica. Un Sistema de Planificación de Recursos Empresariales (ERP) no es meramente un software; es la espina dorsal estratégica que permite erradicar los 'Silos de Información', centralizando los flujos de datos en una única fuente de verdad (Single Source of Truth). Al adoptar un enfoque de 'Sistema de Clase Mundial', las empresas logran trascender operaciones fragmentadas, integrando la gestión bajo mejores prácticas comprobadas de la industria." }),
                    new Paragraph({ text: "Este informe detalla la conceptualización e implementación del prototipo Front-End 'LogisERP'. Este prototipo aborda tres de los pilares críticos en la gestión de la Cadena de Suministro (Supply Chain Management - SCM): la Gestión de Materiales e Inventarios (MM), el Abastecimiento/Compras (Procurement) y la Ejecución Logística de Despachos (LE). Mediante este sistema, se busca demostrar cómo la visibilidad en tiempo real puede mitigar problemas clásicos de la cadena logística, como el 'Efecto Látigo' (Bullwhip effect), permitiendo a la gerencia tomar decisiones proactivas en lugar de reactivas." }),

                    new Paragraph({ text: "2. Marco Teórico y Arquitectura Conceptual del ERP", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "2.1. Integración de Procesos y Eliminación de Silos", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Históricamente, los departamentos operaban con bases de datos independientes. LogisERP propone un modelo de integración horizontal. Una orden de compra aprobada en el módulo de 'Procurement' afecta inmediatamente el volumen de entrada esperado en el 'Inventario', lo cual a su vez determina la capacidad del departamento de 'Despachos' para cumplir con los Service Level Agreements (SLA). Esta integración es el fundamento que convierte al prototipo en una solución de 'Clase Mundial'." }),
                    
                    new Paragraph({ text: "2.2. Adopción de Mejores Prácticas (Best Practices)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "La interfaz gráfica (GUI) desarrollada guía al operador hacia flujos de trabajo estandarizados, minimizando los errores de entrada y forzando la validación de transacciones. Esto refleja la filosofía de los grandes proveedores de ERP (como SAP o Oracle), donde el software inherentemente obliga a la organización a operar bajo estándares de calidad internacional." }),

                    new Paragraph({ text: "3. Mapeo Teórico y Demostración Práctica de Módulos", heading: HeadingLevel.HEADING_1 }),
                    
                    // LOGIN Y SEGURIDAD
                    new Paragraph({ text: "3.1. Autenticación y Perímetro de Seguridad", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Concepto ERP: Todo Sistema de Clase Mundial requiere un sólido sistema de Identity and Access Management (IAM) para segregar funciones y garantizar auditorías (Segregation of Duties)." }),
                    new Paragraph({ text: "Implementación: La puerta de enlace bloquea el acceso a las funciones modulares. Los intentos fallidos son procesados y notificados inmediatamente, simulando un entorno seguro." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("login_screen_1782411190455.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("login_error_1782413701162.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    // DASHBOARD Y BI
                    new Paragraph({ text: "3.2. Módulo de Inteligencia de Negocios (BI / Executive Dashboard)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Concepto ERP: Los módulos de Business Intelligence consolidan la data transaccional (OLTP) transformándola en información analítica (OLAP) útil para la alta gerencia." }),
                    new Paragraph({ text: "Implementación: El Dashboard proyecta los indicadores clave de desempeño (KPIs) en tiempo real. Mediante interactividad, los directivos pueden evaluar el flujo de ingresos versus despachos, previniendo posibles roturas de stock o cuellos de botella operativos." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("dashboard_chart_hover_1782413724079.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    // INVENTARIO (MM)
                    new Paragraph({ text: "3.3. Módulo de Gestión de Materiales e Inventarios (MM)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Concepto ERP: El control del stock (Material Management) es vital para mantener un capital de trabajo óptimo, evitando el sobre-stocking y garantizando el flujo de producción o distribución." }),
                    new Paragraph({ text: "Implementación: Una matriz de datos de alta legibilidad permite la visibilidad global de las existencias (SKUs). La ingesta de nuevos materiales está controlada a través de formularios encapsulados que validan la procedencia de los ítems." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("inventory_list_1782413732982.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("inventory_modal_1782413739292.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    // ORDENES DE COMPRA (PROCUREMENT)
                    new Paragraph({ text: "3.4. Módulo de Abastecimiento y Órdenes de Compra (Procurement)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Concepto ERP: La relación con proveedores y la gestión del aprovisionamiento dictan el ritmo de la cadena de suministro." }),
                    new Paragraph({ text: "Implementación: El sistema despliega las requisiciones de compra pendientes. Se ha integrado una funcionalidad de 'Procesamiento en Lote' (Batch Processing) que permite a la jefatura seleccionar y aprobar múltiples órdenes de manera masiva, agilizando drásticamente la burocracia de abastecimiento." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("orders_list_1782413750170.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("orders_checked_1782413757623.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    // DESPACHOS (LE)
                    new Paragraph({ text: "3.5. Módulo de Ejecución Logística y Despachos (LE)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Concepto ERP: Representa el eslabón final (Última milla o Last-Mile Logistics) que impacta directamente en la satisfacción del cliente final." }),
                    new Paragraph({ text: "Implementación: Se provee una vista jerárquica con indicadores de progreso visual. Permite al personal de logística monitorear si un transporte está en fase de preparación, en ruta, o entregado, garantizando trazabilidad absoluta de punta a punta." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("dispatches_list_1782413763435.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    // RETROALIMENTACIÓN
                    new Paragraph({ text: "3.6. Retroalimentación del Sistema y Control de Errores", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "En todo Sistema ERP es fundamental la trazabilidad de la acción ejecutada. LogisERP despliega notificaciones efímeras (Toasts) que confirman transacciones como el guardado de configuraciones o la aprobación de órdenes, reduciendo la incertidumbre operativa." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("toast_notification_1782413776449.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),

                    new Paragraph({ text: "4. Beneficios Organizacionales de LogisERP", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "La implementación simulada de LogisERP evidencia tres beneficios categóricos para una organización de clase mundial:" }),
                    new Paragraph({ text: "1. Reducción de Costos Transaccionales: Al unificar las compras e inventarios, se reduce el trabajo administrativo duplicado." }),
                    new Paragraph({ text: "2. Visibilidad End-to-End: La gerencia puede auditar el flujo desde la orden de compra al proveedor hasta el despacho al cliente final desde una sola ventana." }),
                    new Paragraph({ text: "3. Escalabilidad Funcional: El diseño modular del prototipo facilita la futura incorporación de módulos adicionales, como Finanzas (FI) o Recursos Humanos (HR), sin alterar el núcleo del sistema." }),

                    new Paragraph({ text: "5. Conclusión", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new Paragraph({ text: "El desarrollo de LogisERP trasciende la mera elaboración de un prototipo de software; constituye la materialización de los principios fundamentales de los Sistemas de Clase Mundial aplicados a la gestión empresarial. Al alinear los conceptos teóricos de la Cadena de Suministro —como la gestión de materiales, el abastecimiento estratégico y la logística de distribución— con una interfaz moderna, eficiente y libre de silos, se ha demostrado cómo la tecnología actúa como facilitador del éxito corporativo." }),
                    new Paragraph({ text: "El resultado de este proyecto es una plataforma robusta, diseñada bajo las mejores prácticas de la industria y que ilustra a la perfección el poder de la integración de procesos. El Equipo 08 ha consolidado satisfactoriamente los aprendizajes teóricos de la asignatura, demostrando que un verdadero ERP es aquel que empodera a la organización para tomar decisiones informadas en el menor tiempo posible." }),

                    new Paragraph({ text: "6. Referencias Bibliográficas", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "Davenport, T. H. (1998). Putting the enterprise into the enterprise system. Harvard Business Review, 76(4), 121-131.", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Laudon, K. C., & Laudon, J. P. (2020). Sistemas de información gerencial: Administración de la empresa digital (16a ed.). Pearson.", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Monk, E., & Wagner, B. (2012). Concepts in Enterprise Resource Planning (4th ed.). Cengage Learning.", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Simchi-Levi, D., Kaminsky, P., & Simchi-Levi, E. (2008). Designing and Managing the Supply Chain: Concepts, Strategies and Case Studies (3rd ed.). McGraw-Hill.", indent: { hanging: 400, left: 400 } }),
                ],
            }
        ],
    });

    const b64string = await Packer.toBase64String(doc);
    fs.writeFileSync('C:/Users/carlos/Desktop/Informe_Solemne_Equipo08_Teoria_ERP.docx', Buffer.from(b64string, 'base64'));
    console.log("Documento DOCX Teoría ERP generado con exito!");
};

createDocx().catch(console.error);
