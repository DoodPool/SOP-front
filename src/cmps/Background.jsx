import React, { useEffect, useRef } from 'react';
import backgroundVert from '../assets/shaders/background.vert';

const Background = ({ backgroundFragment }) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const eRef = useRef(null);

    const fRef = useRef(null);
    const mRef = useRef(null);
    const uRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.id = "background";
        const ctx = canvas.getContext("webgl");

        if (!ctx) {
            console.error("Could not get WebGL context");
            return;
        }

        const vertexShader = ctx.createShader(ctx.VERTEX_SHADER);
        ctx.shaderSource(vertexShader, backgroundVert);
        ctx.compileShader(vertexShader);

        const fragmentShader = ctx.createShader(ctx.FRAGMENT_SHADER);
        ctx.shaderSource(fragmentShader, backgroundFragment);
        ctx.compileShader(fragmentShader);

        const program = ctx.createProgram();
        ctx.attachShader(program, vertexShader);
        ctx.attachShader(program, fragmentShader);
        ctx.linkProgram(program);
        ctx.useProgram(program);

        const vertexError = ctx.getShaderInfoLog(vertexShader);
        const fragmentError = ctx.getShaderInfoLog(fragmentShader);
        if (vertexError || fragmentError) {
            console.error(`Shader error: ${vertexError} ${fragmentError}`);
            return;
        }

        const h = new Float32Array([-1, 3, -1, -1, 3, -1]);
        ctx.bindBuffer(ctx.ARRAY_BUFFER, ctx.createBuffer());
        ctx.bufferData(ctx.ARRAY_BUFFER, h, ctx.STATIC_DRAW);
        const coordsLocation = ctx.getAttribLocation(program, "coords");

        ctx.vertexAttribPointer(coordsLocation, 2, ctx.FLOAT, false, 0, 0);
        ctx.enableVertexAttribArray(coordsLocation);

        fRef.current = ctx.getUniformLocation(program, "resolution");
        mRef.current = ctx.getUniformLocation(program, "time");
        uRef.current = ctx.getUniformLocation(program, "scale");
        eRef.current = Date.now();

        ctxRef.current = ctx
        console.log(ctxRef);


        draw();
    }, [backgroundFragment]);

    const draw = () => {
        const ctx = ctxRef.current;
        const canvas = canvasRef.current;
        if (!ctx) return;


        ctx.uniform2f(fRef.current, canvas.clientWidth, canvas.clientHeight);
        const devicePixelRatio = Math.ceil(window.devicePixelRatio);
        canvas.width = canvas.clientWidth * devicePixelRatio;
        canvas.height = canvas.clientHeight * devicePixelRatio;

        ctx.uniform1i(mRef.current, Date.now() - eRef.current);
        ctx.uniform1f(uRef.current, devicePixelRatio);
        ctx.viewport(0, 0, canvas.width, canvas.height);
        ctx.clearColor(0, 0, 0, 0);
        ctx.drawArrays(ctx.TRIANGLES, 0, 3);

        requestAnimationFrame(draw);
    };

    return <canvas ref={canvasRef}></canvas>;
};

export default Background;
