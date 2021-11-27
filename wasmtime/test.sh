#!/bin/bash
zig build-exe helloworld.zig -target wasm32-wasi
wasmtime.exe helloworld.wasm

