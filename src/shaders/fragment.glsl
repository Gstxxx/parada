precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec3 colorA = vec3(0.5, 0.5, 1.0);
vec3 colorB = vec3(1.0, 0.5, 0.8);

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // Create fluid motion using sine waves
    float movement = sin(uv.x * 3.0 + u_time * 0.5) * 0.5 + 0.5;
    movement *= sin(uv.y * 4.0 - u_time * 0.3) * 0.5 + 0.5;
    
    // Add some turbulence
    float turbulence = sin(uv.x * 10.0 + u_time) * sin(uv.y * 8.0 - u_time) * 0.3;
    movement += turbulence;
    
    // Create holographic effect with multiple color layers
    vec3 color = mix(colorA, colorB, movement);
    color += vec3(sin(u_time * 0.5) * 0.2, cos(u_time * 0.3) * 0.2, sin(u_time * 0.4) * 0.2);
    
    // Add iridescence
    float iridescence = sin(movement * 10.0 + u_time) * 0.5 + 0.5;
    color *= vec3(0.8 + iridescence * 0.4, 0.9 + iridescence * 0.3, 1.0);
    
    gl_FragColor = vec4(color, 1.0);
}