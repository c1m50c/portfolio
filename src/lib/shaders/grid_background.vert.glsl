uniform float speed;
uniform vec2 limits;
uniform float time;

attribute float moveable;

void main() {
    vec3 position_as_vec3 = position;

    if (floor(moveable + 0.5) > 0.5) {
        position_as_vec3.z = mod((position_as_vec3.z + speed * time) - limits.x, limits.y - limits.x) + limits.x;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position_as_vec3, 1.0);
}