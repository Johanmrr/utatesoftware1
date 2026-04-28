
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if(menuBtn){
      menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // const translations = {
    //   es: {
    //     "nav.home":"Inicio","nav.services":"Servicios","nav.benefits":"Beneficios","nav.testimonials":"Testimonios","nav.faq":"FAQ","nav.team":"Nuestro Equipo","nav.contact":"Contacto",
    //     "hero.lead":"Soluciones digitales","hero.title_1":"Soluciones","hero.title_2":"Digitales","hero.title_3":"para tu empresa","hero.subtitle":"Desarrollamos soluciones digitales que impulsan tu crecimiento. Creamos páginas web modernas y aplicaciones web personalizadas, optimizadas para ofrecer rendimiento, usabilidad y resultados reales que potencian tu negocio.","hero.cta_primary":"Solicita una consulta gratuita","hero.cta_secondary":"Ver servicios","hero.trust.title":"Soporte 24/7","hero.trust.sub":"Atención rápida y profesional","hero.experience.title":"Experiencia","hero.experience.sub":"Equipos con +4 años",
    //     "services.lead":"Nuestros servicios","services.title":"Servicios Disponibles Para Tu Empresa","services.subtitle":"Soluciones digitales a medida: desarrollo web, aplicaciones y productos SaaS.",
    //     "service1.title":"Desarrollo de Aplicaciones Web","service1.text":"Construimos aplicaciones escalables, seguras y con UX cuidada.","service1.cta":"Conocer más →",
    //     "service2.title":"Desarrollo de Páginas Web","service2.text":"Creamos sitios web modernos, rápidos y adaptables que representan la identidad de tu negocio.","service2.cta":"Conocer más →",
    //     "service3.title":"Creación de Productos SaaS","service3.text":"Diseñamos y desarrollamos plataformas SaaS completas, seguras y escalables para empresas digitales.","service3.cta":"Conocer más →",
    //     "benefits.lead":"Estrategias","benefits.title":"Estrategias a la Medida para tu Negocio","benefits.text":"Diseñamos soluciones enfocadas en resultados: reducción de costos, automatización y mejora en la experiencia de usuario.",
    //     "benefits.item1.title":"Tecnologías Innovadoras","benefits.item1.text":"Adoptamos tecnologías que escalan con tu negocio.",
    //     "benefits.item2.title":"Soporte Confiable","benefits.item2.text":"Mantenimiento y seguridad proactiva.",
    //     "transform.lead":"Casos de Éxito","transform.title":"Transformamos Tu Negocio con Tecnología","transform.text":"Soluciones implementadas para mejorar procesos, ventas y productividad.","transform.stat1.title":"Años de experiencia","transform.stat1.text":"Equipos con experiencia en múltiples industrias.","transform.stat2.title":"Satisfacción","transform.stat2.text":"Clientes que renuevan confianza en nosotros.","transform.cta":"Comienza tu proyecto","transform.cta_sub":"Agenda una llamada gratuita con nuestro equipo","transform.cta_btn":"Agendar llamada",
    //     "testimonials.lead":"Testimonios","testimonials.title":"Lo que dicen nuestros clientes",
    //     "testimonial1.text":"\"Utate nos ayudó a rediseñar nuestra plataforma y aumentamos conversiones en 35%.\"",
    //     "testimonial2.text":"\"Profesionales, rápidos y con excelente soporte post-lanzamiento.\"",
    //     "testimonial3.text":"\"Gran comunicación y entregas puntuales. 100% recomendados.\"",
    //     "faq.title":"Preguntas Frecuentes","faq.subtitle":"Resolvemos las dudas más comunes",
    //     "faq.q1":"¿Cómo inicio un proyecto con Utate?","faq.a1":"Contáctanos por el formulario o agenda una llamada — analizamos tu caso y proponemos un plan.",
    //     "faq.q2":"¿Trabajan con pymes y startups?","faq.a2":"Sí — tenemos paquetes y metodologías escalables según tamaño y presupuesto.",
    //     "faq.q3":"¿Ofrecen mantenimiento después del lanzamiento?","faq.a3":"Sí, ofrecemos soporte y SLA personalizados.",
    //     "contact.title":"Envíanos un Mensaje","contact.info_title":"Información de Contacto","contact.hours":"Lun - Vie: 9:00 - 18:00","contact.help_title":"¿Necesitas ayuda inmediata?","contact.help_text":"Revisa nuestras preguntas frecuentes o escríbenos por WhatsApp.","contact.help_btn":"Centro de Ayuda",
    //     "form.name":"Nombre","form.email":"Correo Electrónico","form.phone":"Teléfono (Opcional)","form.message":"Cuéntanos cómo podemos ayudarte...","form.send":"Enviar Mensaje",
    //     "footer.links.services":"Servicios","footer.links.benefits":"Beneficios","footer.links.testimonials":"Testimonios","footer.links.faq":"FAQ",
    //     "footer.head.company":"Empresa","footer.links.team":"Nuestro Equipo","footer.links.contact":"Contacto","footer.links.privacy":"Política de Privacidad",
    //     "footer.newsletter_text":"Recibe noticias, casos de éxito y ofertas exclusivas."
    //   },
    //   en: {
    //     "nav.home":"Home","nav.services":"Services","nav.benefits":"Benefits","nav.testimonials":"Testimonials","nav.faq":"FAQ","nav.team":"Our Team","nav.contact":"Contact",
    //     "hero.lead":"Digital Solutions","hero.title_1":"Digital","hero.title_2":"Solutions","hero.title_3":"for your business","hero.subtitle":"We develop digital solutions that drive your growth. We create modern websites and custom web applications, optimized to deliver performance, usability, and real results that empower your business.","hero.cta_primary":"Request a free consultation","hero.cta_secondary":"See services","hero.trust.title":"24/7 Support","hero.trust.sub":"Fast, professional help","hero.experience.title":"Experience","hero.experience.sub":"Teams with +4 years",
    //     "services.lead":"Our services","services.title":"Services Available For Your Company","services.subtitle":"Tailored digital solutions: web development, applications, and SaaS products.",
    //     "service1.title":"Web Application Development","service1.text":"We build scalable, secure apps with great UX.","service1.cta":"Learn more →",
    //     "service2.title":"Website Development","service2.text":"We create modern, fast, and responsive websites that reflect your business identity.","service2.cta":"Learn more →",
    //     "service3.title":"SaaS Product Development","service3.text":"We design and build secure, scalable SaaS platforms tailored for digital businesses.","service3.cta":"Learn more →",
    //     "benefits.lead":"Strategies","benefits.title":"Custom Strategies for Your Business","benefits.text":"We design solutions focused on results: cost reduction, automation and improved UX.",
    //     "benefits.item1.title":"Innovative Technologies","benefits.item1.text":"We adopt technologies that scale with your business.",
    //     "benefits.item2.title":"Reliable Support","benefits.item2.text":"Proactive maintenance and security.",
    //     "transform.lead":"Success Stories","transform.title":"We Transform Your Business with Technology","transform.text":"Solutions implemented to improve processes, sales and productivity.","transform.stat1.title":"Years of experience","transform.stat1.text":"Teams experienced in multiple industries.","transform.stat2.title":"Satisfaction","transform.stat2.text":"Clients who renew trust with us.","transform.cta":"Start your project","transform.cta_sub":"Schedule a free call with our team","transform.cta_btn":"Schedule call",
    //     "testimonials.lead":"Testimonials","testimonials.title":"What our clients say",
    //     "testimonial1.text":"\"Utate helped us redesign our platform and we increased conversions by 35%.\"",
    //     "testimonial2.text":"\"Professional, fast and excellent post-launch support.\"",
    //     "testimonial3.text":"\"Great communication and on-time deliveries. 100% recommended.\"",
    //     "faq.title":"Frequently Asked Questions","faq.subtitle":"We answer the most common doubts",
    //     "faq.q1":"How do I start a project with Utate?","faq.a1":"Contact us via the form or schedule a call — we analyze your case and propose a plan.",
    //     "faq.q2":"Do you work with SMEs and startups?","faq.a2":"Yes — we have scalable packages and methodologies depending on size and budget.",
    //     "faq.q3":"Do you offer post-launch maintenance?","faq.a3":"Yes, we offer support and personalized SLAs.",
    //     "contact.title":"Send Us a Message","contact.info_title":"Contact Information","contact.hours":"Mon - Fri: 9:00 - 18:00","contact.help_title":"Need immediate help?","contact.help_text":"Check our FAQ or write to us on WhatsApp.","contact.help_btn":"Help Center",
    //     "form.name":"Name","form.email":"Email Address","form.phone":"Phone (Optional)","form.message":"Tell us how we can help...","form.send":"Send Message",
    //     "footer.links.services":"Services","footer.links.benefits":"Benefits","footer.links.testimonials":"Testimonials","footer.links.faq":"FAQ",
    //     "footer.head.company":"Company","footer.links.team":"Our Team","footer.links.contact":"Contact","footer.links.privacy":"Privacy Policy",
    //     "footer.newsletter":"Subscribe to our Newsletter","footer.newsletter_text":"Get news, success stories and exclusive offers."
    //   }
    // };

    // function applyLang(lang){
    //   document.querySelectorAll('[data-i18n]').forEach(el => {
    //     const key = el.getAttribute('data-i18n');
    //     if(translations[lang] && translations[lang][key]) {
    //       el.innerText = translations[lang][key];
    //     }
    //   });
    //   document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    //     const key = el.getAttribute('data-i18n-placeholder');
    //     if(translations[lang] && translations[lang][key]) {
    //       el.placeholder = translations[lang][key];
    //     }
    //   });
    //   document.getElementById('lang-es').classList.toggle('text-[var(--brand-blue)]', lang==='es');
    //   document.getElementById('lang-en').classList.toggle('text-[var(--brand-orange)]', lang==='en');
    //   localStorage.setItem('site_lang', lang);
    // }
    // document.getElementById('lang-es').addEventListener('click', ()=> applyLang('es'));
    // document.getElementById('lang-en').addEventListener('click', ()=> applyLang('en'));
    // const initialLang = localStorage.getItem('site_lang') || 'es';
    // applyLang(initialLang);
    // document.querySelectorAll('a[href^="#"]').forEach(a=>{
    //   a.addEventListener('click', (e)=>{
    //     const href = a.getAttribute('href');
    //     if(href.startsWith('#')){
    //       e.preventDefault();
    //       const el = document.querySelector(href);
    //       if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    //     }
    //   });
    // });
