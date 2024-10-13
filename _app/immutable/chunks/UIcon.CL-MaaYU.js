import{t as R,a as q,S as C,i as E}from"./index.Bsu3AjH3.js";import{y as T,s as G,f as I,g as U,h as H,d as J,j as M,i as K,A as P}from"./scheduler.BPnewtNl.js";import{w as Q}from"./index.lYJ-oOA4.js";import{b as V}from"./paths.BSZDUMpC.js";function es(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ns(e,n){R(e,1,1,()=>{n.delete(e.key)})}function ts(e,n,o,a,c,p,h,N,k,B,v,O){let r=e.length,l=p.length,d=r;const m={};for(;d--;)m[e[d].key]=d;const u=[],y=new Map,b=new Map,x=[];for(d=l;d--;){const t=O(c,p,d),i=o(t);let g=h.get(i);g?x.push(()=>g.p(t,n)):(g=B(i,t),g.c()),y.set(i,u[d]=g),i in m&&b.set(i,Math.abs(d-m[i]))}const L=new Set,A=new Set;function w(t){q(t,1),t.m(N,v),h.set(t.key,t),v=t.first,l--}for(;r&&l;){const t=u[l-1],i=e[r-1],g=t.key,f=i.key;t===i?(v=t.first,r--,l--):y.has(f)?!h.has(g)||L.has(g)?w(t):A.has(f)?r--:b.get(g)>b.get(f)?(A.add(g),w(t)):(L.add(f),r--):(k(i,h),r--)}for(;r--;){const t=e[r];y.has(t.key)||k(t,h)}for(;l;)w(u[l-1]);return T(x),u}const F="@riadh-adrani-theme",W=e=>{localStorage.setItem(F,JSON.stringify(e))},_=Q(!0),D=e=>_.update(n=>{var a;const o=typeof e=="boolean"?e:!n;return W(o),(a=document.querySelector(":root"))==null||a.setAttribute("data-theme",o?"dark":"light"),o}),as=()=>{const e=localStorage.getItem(F);D(e?JSON.parse(e):!0)},S=e=>`${V}/logos/${e}`,s=(e,n)=>n?{dark:S(n),light:S(e)}:S(e),os={Ansible:s("ansible.svg"),AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.svg"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Github:s("github.svg"),Gitlab:s("gitlab.png"),Terraform:s("terraform.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Prisma:s("prisma.svg"),MySql:s("mysql.svg"),Grafana:s("grafana.svg"),Prometheus:s("prometheus.svg"),Linux:s("linux.svg"),SpringBoot:s("spring-boot.svg"),Rails:s("rails.svg"),Grpc:s("grpc.svg"),Subclic:s("subclic.png"),Openclassrooms:s("openclassrooms.webp"),Hexacoffre:s("hexacoffre.svg"),DigitalExpress:s("digitalexpress.png"),Epitech:s("epitech.png"),Dashboard1:s("dashboard1.png"),Dashboard2:s("dashboard2.png"),Dashboard3:s("dashboard3.png"),Dashboard4:s("dashboard4.png"),LeBouddoir1:s("lebouddoir1.png"),LeBouddoir2:s("lebouddoir2.png"),LeBouddoir3:s("lebouddoir3.png"),LeBouddoir4:s("lebouddoir4.png"),LaPanthere:s("lapanthere.png"),LaPanthere1:s("lapanthere1.png"),LaPanthere2:s("lapanthere2.png"),LaPanthere3:s("lapanthere3.png"),LaPanthere4:s("lapanthere4.png"),OhMyFood1:s("ohmyfood1.png"),OhMyFood2:s("ohmyfood2.png"),OhMyFood3:s("ohmyfood3.png"),OhMyFood4:s("ohmyfood4.png")};let j;_.subscribe(e=>j=e);const is=e=>typeof e=="string"?e:j?e.dark:e.light;function X(e){let n,o;return{c(){n=I("i"),this.h()},l(a){n=U(a,"I",{class:!0}),H(n).forEach(J),this.h()},h(){M(n,"class",o=`${e[0]} ${e[1]}`)},m(a,c){K(a,n,c)},p(a,[c]){c&3&&o!==(o=`${a[0]} ${a[1]}`)&&M(n,"class",o)},i:P,o:P,d(a){a&&J(n)}}}function z(e,n,o){let{icon:a=void 0}=n,{classes:c=""}=n;return e.$$set=p=>{"icon"in p&&o(0,a=p.icon),"classes"in p&&o(1,c=p.classes)},[a,c]}class gs extends C{constructor(n){super(),E(this,n,z,X,G,{icon:0,classes:1})}}export{os as A,gs as U,D as a,ns as b,es as e,is as g,as as o,_ as t,ts as u};