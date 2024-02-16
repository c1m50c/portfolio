const vec3 CATPPUCCIN_CRUST = vec3(24.0 / 255.0, 25.0 / 255.0, 38.0 / 255.0);
const vec3 CATPPUCCIN_BASE = vec3(36.0 / 255.0, 39.0 / 255.0, 58.0 / 255.0);

uniform vec2 resolution;

void main() {
    gl_FragColor = vec4(
        mix(
            CATPPUCCIN_BASE,
            CATPPUCCIN_CRUST,
            (gl_FragCoord.xy / resolution).y * 1.5
        ),
        1.0
    );
}