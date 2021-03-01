<template>
    <div id="app">

        <div id="container">
    <div id="app">
    </div>
        </div>
    </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld
    },
    mounted() {
        registerMicroApps([
            {
                name: "proj-a",
                entry: "//localhost:8000",
                container: "#container",
                activeRule: "/proj-a"
            },
            {
                name: "proj-b",
                entry: "//localhost:8001",
                container: "#container",
                activeRule: "/proj-b"
            }
        ]);
        // 启动 qiankun

        start();
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
