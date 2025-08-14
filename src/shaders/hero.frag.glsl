precision mediump float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uAccent;
uniform float uNoiseAmp;
uniform float uGrain;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0,0.0));
  float c = hash(i + vec2(0.0,1.0));
  float d = hash(i + vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
}

void main(){
  vec2 uv = (gl_FragCoord.xy / uResolution.xy);
  vec2 p = uv * 3.0;

  float t = uTime * 0.15;
  vec2 w = vec2(noise(p + t), noise(p + 8.0 + t));
  p += (w - 0.5) * uNoiseAmp;

  float n = noise(p*1.6);
  float vign = smoothstep(1.2, 0.2, distance(uv, vec2(0.5)));
  float glow = smoothstep(0.6, 1.0, n) * 0.8;
  vec3 base = mix(vec3(0.06,0.07,0.10), uAccent, glow);
  float grain = (hash(uv * uTime * 60.0) - 0.5) * uGrain;

  vec3 col = base * vign + grain;
  gl_FragColor = vec4(col,1.0);
}
