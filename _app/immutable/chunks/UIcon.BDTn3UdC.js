import{t as F,a as I,S as L,i as T}from"./index.Bsu3AjH3.js";import{y as U,s as B,f as G,g as H,h as K,d as _,j,i as O,A as N}from"./scheduler.BPnewtNl.js";import{w as Q,b as V}from"./paths.8ch-gNu-.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){F(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,i,a,r,p,f,D,k,E,h,P){let c=e.length,u=p.length,l=c;const m={};for(;l--;)m[e[l].key]=l;const d=[],y=new Map,w=new Map,x=[];for(l=u;l--;){const n=P(r,p,l),o=i(n);let g=f.get(o);g?x.push(()=>g.p(n,t)):(g=E(o,n),g.c()),y.set(o,d[l]=g),o in m&&w.set(o,Math.abs(l-m[o]))}const A=new Set,J=new Set;function S(n){I(n,1),n.m(D,h),f.set(n.key,n),h=n.first,u--}for(;c&&u;){const n=d[u-1],o=e[c-1],g=n.key,v=o.key;n===o?(h=n.first,c--,u--):y.has(v)?!f.has(g)||A.has(g)?S(n):J.has(v)?c--:w.get(g)>w.get(v)?(J.add(g),S(n)):(A.add(v),c--):(k(o,f),c--)}for(;c--;){const n=e[c];y.has(n.key)||k(n,f)}for(;u;)S(d[u-1]);return U(x),d}const R="@riadh-adrani-theme",W=e=>{localStorage.setItem(R,JSON.stringify(e))},q=Q(!0),M=e=>q.update(t=>{var a;const i=typeof e=="boolean"?e:!t;return W(i),(a=document.querySelector(":root"))==null||a.setAttribute("data-theme",i?"dark":"light"),i}),ns=()=>{const e=localStorage.getItem(R);M(e?JSON.parse(e):!0)},b=e=>`${V}/logos/${e}`,s=(e,t)=>t?{dark:b(t),light:b(e)}:b(e),as={Ansible:s("ansible.svg"),AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.svg"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Prisma:s("prisma.svg"),MySql:s("mysql.svg"),Grafana:s("grafana.svg"),Prometheus:s("prometheus.svg"),Linux:s("linux.svg"),SpringBoot:s("spring-boot.svg"),Rails:s("rails.svg"),Grpc:s("grpc.svg"),Subclic:s("subclic.png"),Openclassrooms:s("openclassrooms.webp"),Hexacoffre:s("hexacoffre.svg"),DigitalExpress:s("digitalexpress.png"),Epitech:s("epitech.png")};let C;q.subscribe(e=>C=e);const is=e=>typeof e=="string"?e:C?e.dark:e.light;function X(e){let t,i;return{c(){t=G("i"),this.h()},l(a){t=H(a,"I",{class:!0}),K(t).forEach(_),this.h()},h(){j(t,"class",i=`${e[0]} ${e[1]}`)},m(a,r){O(a,t,r)},p(a,[r]){r&3&&i!==(i=`${a[0]} ${a[1]}`)&&j(t,"class",i)},i:N,o:N,d(a){a&&_(t)}}}function z(e,t,i){let{icon:a=void 0}=t,{classes:r=""}=t;return e.$$set=p=>{"icon"in p&&i(0,a=p.icon),"classes"in p&&i(1,r=p.classes)},[a,r]}class os extends L{constructor(t){super(),T(this,t,z,X,B,{icon:0,classes:1})}}export{as as A,os as U,M as a,es as b,ss as e,is as g,ns as o,q as t,ts as u};