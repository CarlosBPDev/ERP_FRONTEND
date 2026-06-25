import * as fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, ImageRun, AlignmentType } from 'docx';

const createDocx = async () => {
    const loginImgPath = "C:/Users/carlos/.gemini/antigravity-ide/brain/8849e302-51cf-4993-b78c-517764533d1b/login_screen_1782411190455.png";
    const dashboardImgPath = "C:/Users/carlos/.gemini/antigravity-ide/brain/8849e302-51cf-4993-b78c-517764533d1b/dashboard_screen_1782411246551.png";
    const inventoryImgPath = "C:/Users/carlos/.gemini/antigravity-ide/brain/8849e302-51cf-4993-b78c-517764533d1b/inventory_modal_1782411269201.png";

    const doc = new Document({
        creator: "Antigravity",
        title: "Informe Solemne 3",
        sections: [
            // PORTADA
            {
                properties: {},
                children: [
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "UNIVERSIDAD SAN SEBASTIÁN", bold: true, size: 28, font: "Arial" }),
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "Facultad de Ingeniería y Tecnología", bold: true, size: 24, font: "Arial" }),
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "Ingeniería Civil Informática", bold: true, size: 24, font: "Arial" }),
                        ],
                        spacing: { after: 1000 }
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "Prueba Solemne N°3: Sistemas de Clase Mundial", bold: true, size: 28, font: "Arial" }),
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({ text: "Prototipo Front-End de Sistema ERP Logístico", size: 24, font: "Arial" }),
                        ],
                        spacing: { after: 1000 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Integrantes:", bold: true, size: 24, font: "Arial" }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Carlos Jesus Bastidas Pereira", size: 24, font: "Arial" }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Javier Sebastian Morales Subaru", size: 24, font: "Arial" }),
                        ],
                        spacing: { after: 500 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Docente: hgutierrezf@docente.uss.cl", size: 24, font: "Arial" }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Fecha: 25 de Junio de 2026", size: 24, font: "Arial" }),
                        ],
                        spacing: { after: 500 }
                    }),
                ],
            },
            // INTRODUCCION
            {
                properties: {},
                children: [
                    new Paragraph({
                        text: "1. Introducción",
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "En el dinámico entorno empresarial contemporáneo, la capacidad de respuesta y la eficiencia en la cadena de suministro determinan el éxito competitivo de una organización. Los sistemas de Planificación de Recursos Empresariales (ERP) juegan un papel fundamental al unificar procesos críticos como la gestión de inventarios, las compras y la logística de despachos en una plataforma cohesionada.",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { line: 360 } // 1.5 line spacing (240 * 1.5)
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "El presente informe detalla el diseño y desarrollo de un prototipo funcional del Front-End para un sistema ERP orientado a la gestión logística (denominado \"LogisERP\"). El objetivo principal del desarrollo fue crear una interfaz gráfica moderna, intuitiva y de alta usabilidad que permita a los usuarios visualizar información operativa en tiempo real, facilitando el registro y la toma de decisiones. Para asegurar un producto de nivel de \"clase mundial\", el prototipo fue construido bajo principios estrictos de Experiencia de Usuario (UX) e Interfaz de Usuario (UI), emulando los estándares corporativos de la industria tecnológica actual mediante el uso de tecnologías web avanzadas (React, Tailwind CSS y Framer Motion).",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { before: 200, line: 360 }
                    }),

                    new Paragraph({
                        text: "2. Desarrollo del Prototipo ERP",
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 }
                    }),
                    new Paragraph({
                        text: "2.1. Arquitectura y Tecnologías Utilizadas",
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "El prototipo fue desarrollado utilizando una pila tecnológica moderna orientada a componentes. Se utilizó React.js en conjunto con Vite para garantizar un renderizado rápido y una estructura modular. Para la capa visual, se descartó el CSS tradicional en favor de Tailwind CSS, un framework de utilidad que permitió aplicar un diseño minimalista y de alto contraste (Dark Mode Enterprise), estándar en soluciones corporativas modernas. Además, se integró Recharts para la visualización de datos (Business Intelligence) y Framer Motion para coreografiar micro-interacciones y transiciones de interfaz, mejorando drásticamente la usabilidad percibida.",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { line: 360 }
                    }),
                    
                    new Paragraph({
                        text: "2.2. Diseño, Usabilidad y Experiencia de Usuario (UX/UI)",
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Se adoptó una filosofía de diseño centrada en el usuario corporativo. El esquema de colores oscuros reduce la fatiga visual durante jornadas prolongadas de trabajo, mientras que el uso de la tipografía \"Inter\" maximiza la legibilidad de tablas de datos densas. La usabilidad se reforzó mediante feedback inmediato: cada acción del usuario (ej. aprobar una orden) dispara una notificación flotante no intrusiva (Toast), eliminando la incertidumbre del estado del sistema.",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { line: 360 }
                    }),

                    new Paragraph({
                        text: "2.3. Funcionalidades y Módulos Implementados",
                        heading: HeadingLevel.HEADING_2,
                        spacing: { before: 200, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "El sistema se compone de áreas fundamentales integradas a través de una barra de navegación lateral colapsable:",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { line: 360, after: 200 }
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({ text: "Portal de Autenticación (Login)", bold: true, font: "Arial", size: 22 })
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(loginImgPath),
                                transformation: { width: 500, height: 350 }
                            })
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 }
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({ text: "Dashboard (Panel de Control)", bold: true, font: "Arial", size: 22 })
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(dashboardImgPath),
                                transformation: { width: 500, height: 350 }
                            })
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 }
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({ text: "Módulo de Inventario y Creación de Producto", bold: true, font: "Arial", size: 22 })
                        ],
                        spacing: { after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(inventoryImgPath),
                                transformation: { width: 500, height: 350 }
                            })
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 200 }
                    }),

                    new Paragraph({
                        text: "3. Conclusión",
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "El desarrollo de este prototipo Front-End logró materializar de forma exitosa los requerimientos de un sistema ERP de clase mundial enfocado en logística. Mediante la correcta aplicación de patrones de diseño de software e interfaces modernas, se demostró que es posible transformar la complejidad operativa de inventarios y despachos en una experiencia de usuario fluida, intuitiva y altamente eficiente.",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { line: 360 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "La integración de micro-interacciones, retroalimentación visual (toasts), y visualización gráfica de datos confirma que el prototipo no solo cumple con los requisitos técnicos estructurales, sino que aporta un valor agregado sustancial en la accesibilidad y adopción por parte del usuario final. Esta base arquitectónica sólida garantiza que el sistema esté completamente preparado para ser integrado con servicios Back-End reales, sentando las bases para una solución ERP completa y escalable a nivel empresarial.",
                                font: "Arial", size: 22
                            })
                        ],
                        spacing: { before: 200, line: 360 }
                    }),

                    new Paragraph({
                        text: "4. Bibliografía",
                        heading: HeadingLevel.HEADING_1,
                        spacing: { before: 400, after: 200 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Facebook Open Source. (2024). React: The library for web and native user interfaces. Recuperado de https://react.dev/", font: "Arial", size: 22 })
                        ],
                        spacing: { line: 360 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Framer. (2024). Framer Motion: A production-ready motion library for React. Recuperado de https://www.framer.com/motion/", font: "Arial", size: 22 })
                        ],
                        spacing: { line: 360 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Recharts. (2024). Recharts: A composable charting library built on React components. Recuperado de https://recharts.org/", font: "Arial", size: 22 })
                        ],
                        spacing: { line: 360 }
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({ text: "Tailwind Labs. (2024). Tailwind CSS: Rapidly build modern websites without ever leaving your HTML. Recuperado de https://tailwindcss.com/", font: "Arial", size: 22 })
                        ],
                        spacing: { line: 360 }
                    })
                ],
            }
        ],
    });

    const b64string = await Packer.toBase64String(doc);
    fs.writeFileSync('C:/Users/carlos/Desktop/Informe_Final_Equipo08.docx', Buffer.from(b64string, 'base64'));
    console.log("Documento generado con exito!");
};

createDocx().catch(console.error);
