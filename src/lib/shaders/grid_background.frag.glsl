const vec3 CATPPUCCIN_CRUST_MACCHIATO = vec3(24.0 / 255.0, 25.0 / 255.0, 38.0 / 255.0);
const vec3 CATPPUCCIN_CRUST_LATTE = vec3(220.0 / 255.0, 224.0 / 255.0, 232.0 / 255.0);

const vec3 CATPPUCCIN_BASE_MACCHIATO = vec3(36.0 / 255.0, 39.0 / 255.0, 58.0 / 255.0);
const vec3 CATPPUCCIN_BASE_LATTE = vec3(76.0 / 255.0, 79.0 / 255.0, 105.0 / 255.0);

uniform vec2 resolution;
uniform bool light;

void main() {
    if (light) {
        gl_FragColor = vec4(
            mix(
                CATPPUCCIN_BASE_LATTE,
                CATPPUCCIN_CRUST_LATTE,
                (gl_FragCoord.xy / resolution).y * 1.75
            ),
            1.0
        );
    } else {
        gl_FragColor = vec4(
            mix(
                CATPPUCCIN_BASE_MACCHIATO,
                CATPPUCCIN_CRUST_MACCHIATO,
                (gl_FragCoord.xy / resolution).y * 1.5
            ),
            1.0
        );
    }
}