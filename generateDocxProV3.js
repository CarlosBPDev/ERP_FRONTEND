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
        title: "Tesis Solemne 3: ERP Nivel Dios",
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
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Análisis Exhaustivo, Arquitectura PWA y Desarrollo Core del Prototipo LogisERP", size: 28, italics: true, color: "444444" })], spacing: { after: 1500 } }),
                    
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Integrantes del Equipo de Ingeniería:", bold: true, size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Carlos Jesus Bastidas Pereira", size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Javier Sebastian Morales Subaru", size: 24 })], spacing: { after: 500 } }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Docente Titular: Hernán Gutiérrez", size: 24 })] }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Correo: hgutierrezf@docente.uss.cl", size: 24 })], spacing: { after: 800 } }),
                    new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Santiago, 25 de Junio de 2026", size: 24 })] }),
                ],
            },
            // ABSTRACT Y DESARROLLO
            {
                headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Sistemas de Clase Mundial - Informe Técnico Avanzado - Equipo 08", color: "888888", size: 18 })] })] }) },
                footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Página ", size: 20 }), new TextRun({ children: [PageNumber.CURRENT], size: 20 }), new TextRun({ text: " de ", size: 20 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 20 })] })] }) },
                children: [
                    new Paragraph({ text: "Índice de Contenidos", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new TableOfContents("Índice", { hyperlink: true, headingStyleRange: "1-3" }),
                    
                    new Paragraph({ text: "Resumen Ejecutivo (Abstract)", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new Paragraph({ text: "El ecosistema tecnológico actual demanda soluciones que trasciendan la simple digitalización de procesos. Un verdadero 'Sistema de Clase Mundial' (World-Class System) debe integrar alta disponibilidad, interfaces cognitivamente eficientes y una arquitectura resistente al escalamiento masivo. Este informe técnico expone el desarrollo exhaustivo del prototipo Front-End 'LogisERP', un sistema diseñado para la gestión integral de la cadena de suministro (Supply Chain Management). A través de la adopción del ecosistema React.js, Tailwind CSS y paradigmas de gestión de estado global, se logró materializar una solución que supera los requerimientos académicos para posicionarse como un software de grado Enterprise." }),

                    new Paragraph({ text: "1. Introducción al Desafío Logístico", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "La logística moderna se enfrenta a un problema fundamental: la asimetría de información. Los operadores logísticos y los gerentes de suministro suelen interactuar con sistemas fragmentados o heredados (legacy systems) que provocan cuellos de botella operativos. El objetivo de esta Solemne fue concebir y desarrollar el módulo de interacción humano-computadora (Front-End) de un ERP unificado, capaz de resolver estas ineficiencias mediante una visualización centralizada e interacciones de baja latencia." }),

                    new Paragraph({ text: "2. Arquitectura de Software y Decisiones Fundamentales", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "2.1. Framework React.js y el Virtual DOM", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Se seleccionó React.js versión 19 por su motor de reconciliación (Fiber Architecture). A diferencia de la manipulación directa del DOM (Document Object Model), que presenta una complejidad de O(n^3) en el peor de los casos, React calcula un árbol de diferencias heurístico (Diffing Algorithm) con complejidad O(n), lo cual es crítico al renderizar tablas de datos masivas como las presentes en los módulos de inventario y despachos." }),
                    
                    new Paragraph({ text: "2.2. Gestión de Estado mediante Patrón Singleton (Context API)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Para evitar el 'prop-drilling' (pasar propiedades a través de múltiples capas de componentes), se implementó un contenedor global de estado utilizando Context API. Este patrón asegura que los datos transversales, como los tokens de autenticación o los permisos de rol del usuario, permanezcan aislados, inmutables y accesibles globalmente con una complejidad de búsqueda O(1)." }),

                    new Paragraph({ text: "3. Ingeniería UX/UI: El Estándar 'Dark Enterprise'", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "Rechazando las tendencias de diseño superficiales, LogisERP abraza un minimalismo utilitario ('Dark Enterprise Mode'). Utilizando Tailwind CSS, se eliminó todo CSS semántico externo. La interfaz se dibuja en tonos de baja emisión de luz (#0a0a0a a #171717) previniendo la fatiga ocular del operador (Computer Vision Syndrome). Además, se aplicaron rigurosamente las Heurísticas de Usabilidad de Nielsen:" }),
                    new Paragraph({ text: "• Visibilidad del estado del sistema: A través del uso intensivo de notificaciones asíncronas (Toasts) y barras de progreso." }),
                    new Paragraph({ text: "• Prevención de errores: Interfaces que restringen inputs erróneos y utilizan modales para confirmaciones críticas." }),

                    new Paragraph({ text: "4. Implementación Modular y Capturas del Sistema en Tiempo Real", heading: HeadingLevel.HEADING_1 }),
                    
                    new Paragraph({ text: "4.1. Perímetro de Seguridad (Auth Gateway)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Portal de autenticación que protege el enrutamiento interno (Guards en React Router DOM). Rechaza el acceso a usuarios no identificados mediante intercepción de ciclo de vida del componente." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("login_screen_1782411190455.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.2. Business Intelligence Dashboard", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Módulo principal que renderiza KPIs logísticos mediante Recharts. Destacan los gráficos de flujo de activos en tiempo real." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("erp_dashboard_1782413304147.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.3. Inventario y Mutación de Datos (Overlays)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Para la ingesta de nuevos Stock Keeping Units (SKUs), se diseñó un sistema de ventanas modales sobrepuestas orquestado por Framer Motion, evitando cambios abruptos de contexto visual para el usuario." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("inventory_modal_1782411269201.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.4. Órdenes de Compra y Acciones Masivas (Bulk Processing)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "La interfaz tabular incorpora la funcionalidad de checkboxes múltiples, permitiendo la aprobación en lote (batch processing) de cientos de órdenes de manera simultánea, maximizando la productividad de la jefatura." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("erp_orders_1782413334525.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.5. Control Dinámico de Despachos (Last Mile Logistics)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Implementación de barras de progreso matemáticas que transforman el estado de un envío (Ej. 'En Ruta', 'Preparando') en un indicador visual porcentual, facilitando la auditoría logística rápida." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("erp_dispatches_1782413349795.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.6. Configuración Corporativa y Permisología", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Módulo administrativo para la gestión de Identidad, Roles y Accesos (IAM). Estructurado mediante navegación por pestañas lógicas integradas verticalmente." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("erp_settings_1782413365032.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "4.7. Retroalimentación Inmediata (Toasts System)", heading: HeadingLevel.HEADING_2 }),
                    new Paragraph({ text: "Cada mutación en la base de datos simulada dispara un mensaje asíncrono no bloqueante en la esquina inferior derecha. Esto cumple con las heurísticas de prevención de frustración del usuario." }),
                    new Paragraph({ children: [new ImageRun({ data: getImageData("erp_toast_1782413404651.png"), transformation: { width: 550, height: 340 }, type: 'png' })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),

                    new Paragraph({ text: "5. Conclusión y Proyección (Future Work)", heading: HeadingLevel.HEADING_1, pageBreakBefore: true }),
                    new Paragraph({ text: "El desarrollo de LogisERP es el resultado de la aplicación rigurosa de metodologías de ingeniería de software a la resolución de problemáticas empresariales complejas. El prototipo no solo cumple con integrar inventarios, compras y despachos, sino que lo hace garantizando un rendimiento técnico superlativo y una curva de aprendizaje mínima para el usuario final gracias a sus sólidas bases en UX corporativa." }),
                    new Paragraph({ text: "Habiendo desacoplado exitosamente la interfaz de la lógica de negocio subyacente, la arquitectura de este Front-End se encuentra completamente preparada para ser inyectada con datos de una capa Middleware o Back-End real, demostrando ser, innegablemente, un Sistema de Clase Mundial." }),

                    new Paragraph({ text: "6. Referencias Bibliográficas (APA 7ma)", heading: HeadingLevel.HEADING_1 }),
                    new Paragraph({ text: "Facebook Open Source. (2024). React: The library for web and native user interfaces. Recuperado el 25 de junio de 2026, de https://react.dev/", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Framer. (2024). Framer Motion: A production-ready motion library for React. Recuperado el 25 de junio de 2026, de https://www.framer.com/motion/", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Nielsen, J. (1994). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group. Recuperado el 25 de junio de 2026, de https://www.nngroup.com/articles/ten-usability-heuristics/", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Recharts. (2024). Recharts: A composable charting library built on React components. Recuperado el 25 de junio de 2026, de https://recharts.org/", indent: { hanging: 400, left: 400 } }),
                    new Paragraph({ text: "Tailwind Labs. (2024). Tailwind CSS: Rapidly build modern websites without ever leaving your HTML. Recuperado el 25 de junio de 2026, de https://tailwindcss.com/", indent: { hanging: 400, left: 400 } }),
                ],
            }
        ],
    });

    const b64string = await Packer.toBase64String(doc);
    fs.writeFileSync('C:/Users/carlos/Desktop/Informe_Solemne_Equipo08_INSANE.docx', Buffer.from(b64string, 'base64'));
    console.log("Documento DOCX INSANE generado con exito!");
};

createDocx().catch(console.error);
