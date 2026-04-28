import os
import re
import sys

# Forzar codificación UTF-8 para evitar errores en Windows
if sys.stdout.encoding != 'utf-8':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def build_static_page(template_path, output_path):
    if not os.path.exists(template_path):
        print(f"Error: {template_path} no encontrado.")
        return

    with open(template_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Mapeo de componentes a archivos
    component_map = {
        'header-container': 'components/header.html',
        'footer-container': 'components/footer.html',
        'hero-section': 'components/hero.html',
        'services-section': 'components/services.html',
        'projects-section': 'components/projects.html',
        'stats-section': 'components/stats.html',
        'testimonials-section': 'components/testimonials.html',
        'stack-section': 'components/stack.html',
        'faq-section': 'components/faq.html',
        'contact-section': 'components/contact.html'
    }

    def replace_component(match):
        selector = match.group(1)
        path = component_map.get(selector)
        if path and os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as cf:
                return cf.read()
        return match.group(0)

    # Regex para buscar <div id="id-del-componente"></div>
    pattern = r'<div id="([^"]+)"></div>'
    final_content = re.sub(pattern, replace_component, content)

    # Eliminar el script de loader.js en la versión local
    final_content = final_content.replace('<script src="js/loader.js" defer></script>', '<!-- Version Local: Inlined -->')

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"Generado: {output_path}")

if __name__ == "__main__":
    build_static_page('index.html', 'index_LOCAL.html')
    build_static_page('OurTeam.html', 'OurTeam_LOCAL.html')
    print("\nProceso terminado. Ahora puedes abrir 'index_LOCAL.html' directamente.")
