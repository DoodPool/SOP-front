precision mediump float;

uniform vec2 resolution;
uniform int time;
uniform float scale;

float bumpFn(float x) {
    if(x == 0.0) {
        return 1.0;
    }

    float a = 100.0;
    return sin(a * x) / (a * x);
}

void main(void) {
    vec2 xy = gl_FragCoord.xy / scale;
    xy.x += float(time) / 100.0;
    xy.y += float(time) / 100.0;

    bool isHorizontal = mod(xy.x, 100.0) < 2.0;
    bool isVertical = mod(xy.y, 100.0) < 2.0;

    float yWithTime = xy.y + float(time) / 10.0;

    if(isHorizontal && isVertical) {
        gl_FragColor = vec4(vec3(0.3), 1.0);
    } else if(isHorizontal || isVertical) {
        gl_FragColor = vec4(vec3(0.1), 1.0);
    } else {
        gl_FragColor = vec4(vec3(0.0), 0.0);
    }
}
