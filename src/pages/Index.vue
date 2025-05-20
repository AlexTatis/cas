<script setup lang="ts">
import experiences from '../experiences.json'
import projects from '../projects.json'

</script>

<template>
  <div>
    <div class="p-2 sm:p-8 h-fit 2xl:h-dvh">
      <div class="flex p-2 sm:p-8 w-full h-full rounded-xl border-4 border-white gap-8">
        <div class="overflow-hidden hidden 2xl:inline-block border-0 h-full shadow-none basis-1/3">
          <img class="object-cover rounded-xl basis-1/2 max-h-full h-full brightness-75 sepia" src="/intro.jpg" alt="">
        </div>
        <div class="grow basis-2/3">
          <div class="flex justify-center">
            <h1 class="font-serif font-black text-6xl mt-8 sm:mt-0">
              Carpeta
              <br>
              <span class="text-9xl ml-5">CAS</span>
            </h1>
          </div>
          <div class="flex items-center mt-12">
            <div class="w-full h-1 rounded bg-white"></div>
            <p class="flex-1 basis-2/3 text-center text-2xl">Alejandro Campo Herbés</p>
            <div class="w-full h-1 rounded bg-white"></div>
          </div>
          <div class="flex justify-center gap-4 h-max align-middle my-8">
            <button class="btn" onclick="intro_modal.showModal()">Introducción</button>
            <button class="btn" onclick="conclusion_modal.showModal()">Conclusión</button>
          </div>
          <div role="tablist" class="tabs tabs-lifted mt-10">
            <input type="radio" name="my_tabs" role="tab"
              class="tab [--tab-bg:#44403c] [--tab-border-color:#1c1917] text-white text-lg" checked
              aria-label="Experiencias">
            <div role="tabpanel" class="tab-content bg-stone-700 border-stone-900 rounded-box p-6 overflow-x-hidden">
              <div class="basis-1/2">
                <h2 class="text-center sm:text-left font-bold font-quattrocento text-3xl"><span
                    class="text-5xl font-bold">E</span>XPERIENCIAS</h2>
                <div class="flex items-center gap-2">
                  <a :href="`#experience1`" class="btn btn-circle hidden 2xl:inline-flex">❮</a>
                  <div
                    class="flex flex-col items-center w-full 2xl:max-w-5xl sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:inline-flex 2xl:flex-row 2xl:carousel gap-4 overflow-x-hidden p-4">
                    <RouterLink :to="`/experiences/${i + 1}`"
                      class="flex flex-col bg-slate-100 p-2 rounded-md h-80 sm:h-52 w-10/12 sm:w-32 items-center carousel-item drop-shadow-lg hover:scale-105 md:hover:scale-110 transition-transform justify-around"
                      v-for="(experience, i) in experiences" :id="`experience${i + 1}`">
                      <img class="object-cover rounded-md basis-1/2 aspect-video max-h-64 sm:max-h-48 brightness-75 sepia"
                        :src="experience.images[0]" alt="">
                      <p class="text-black relative text-xl sm:text-base text-center">{{ experience.title }}</p>
                    </RouterLink>
                  </div>
                  <a :href="`#experience10`" class="btn btn-circle hidden 2xl:inline-flex">❯</a>
                </div>
              </div>
            </div>
            <input type="radio" name="my_tabs" role="tab"
              class="tab [--tab-bg:#44403c] [--tab-border-color:#1c1917] text-white text-lg" aria-label="Proyectos">
            <div role="tabpanel" class="tab-content bg-stone-700 border-stone-900 rounded-box p-6 overflow-x-hidden">
              <div class="basis-1/2">
                <h2 class="text-center sm:text-left font-bold font-quattrocento text-3xl"><span
                    class="text-5xl font-bold">P</span>ROYECTOS</h2>
                <div class="flex items-center gap-2">
                  <a :href="`#project1`" class="btn btn-circle hidden 2xl:inline-flex">❮</a>
                  <div
                    class="flex flex-col items-center w-full 2xl:max-w-6xl sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:inline-flex 2xl:flex-row 2xl:carousel gap-4 overflow-x-hidden p-4">
                    <RouterLink :to="`/projects/${i + 1}`"
                      class="flex flex-col bg-slate-100 p-2 rounded-md h-80 sm:h-52 w-10/12 sm:w-32 items-center carousel-item drop-shadow-lg hover:scale-105 md:hover:scale-110 transition-transform justify-around"
                      v-for="(project, i) in projects" :id="`project${i + 1}`">
                      <img class="object-cover rounded-md basis-1/2 aspect-video max-h-64 sm:max-h-48 brightness-75 sepia"
                        :src="project.images[0]" alt="">
                      <p class="text-black relative text-xl sm:text-base text-center">{{ project.title }}</p>
                    </RouterLink>
                  </div>
                  <a :href="`#project10`" class="btn btn-circle hidden 2xl:inline-flex">❯</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Introduction Modal -->

    <dialog id="intro_modal" class="modal">
      <div class="modal-box text-black">
        <h2 class="font-extrabold text-center text-4xl">Introducción</h2>

        <div class="prose-base py-4">
          <p>Mi nombre es Alejandro Campo, y aunque actualmente me encuentro estudiando el programa del Bachillerato Internacional en Santiago de Compostela, soy de Caldas de Reyes. </p>

          <p>Me considero una persona curiosa, bastante perfeccionista y a la que le gusta aplicar lo que aprende para ayudar a los demás. A veces, esto juega en mi contra, ya que me lleva a asumir proyectos demasiado grandes o a exigirme más de lo necesario. Sin embargo, con el tiempo he aprendido que el verdadero valor de lo que uno hace no está solo en el resultado final, sino en el proceso, en las lecciones aprendidas y, sobre todo, en el impacto que tiene en quienes te rodean.
          </p>

          <p>A pesar de ser una persona introvertida, siempre he buscado dónde poder compartir ideas, aprender de otros y construir algo en conjunto. Aunque venga de lejos y no conozca a nadie, esta fue una de las razones por las que elegí el Bachillerato Internacional, y especialmente lo que más me atrae del programa CAS: vivir experiencias que me hagan crecer, equivocarme, mejorar y conectar con los demás.
          </p>
        </div>
        
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>

    <!-- Conclusion Modal -->
    
    <dialog id="conclusion_modal" class="modal">
      <div class="modal-box w-dvw text-black">
        <h2 class="font-extrabold text-center text-4xl">Conclusión</h2>
        <div class="prose-base py-4 text-black">
          <p>En definitiva, y para concluir mi carpeta CAS, considero que este programa ha sido todo lo que soñaba encontrar desde un principio.
          </p>

          <p>
Ciertamente, algunos proyectos y experiencias han sido más difíciles de efectuar, pero incluso si el resultado final no fue el esperado, creo que todas ellas me han servido para conectar con un grupo de personas que no cambiaría por nada, y a aprender una lección muy importante para mí. En mi introducción personal me consideraba perfeccionista, y creo que CAS me ha ayudado a ver que, aunque la búsqueda de hacer las cosas correctamente no está mal, para ello hay que empezar equivocándose. Yo, ciertamente, me equivoqué muchas veces a lo largo de estos dos años, sea en la organización de los proyectos, en la gestión del tiempo o en intentar abarcar más de lo que podía.

          </p>

          <p>Pero fue precisamente ahí donde aprendí más: en los errores compartidos, en los planes improvisados, en las soluciones creativas a contrarreloj y en las conversaciones que nacieron de todo lo inesperado. CAS me enseñó que no todo tiene que salir perfecto para que valga la pena. Me mostró que lo importante es atreverse y comprometerse a lo que uno hace, aunque sea desde la duda o la inexperiencia. A veces intenté cosas que no me acabaron gustando, pero si nunca lo hubiera hecho nunca lo habría sabido, el atrevimiento es el camino a conocerse uno mejor.

          </p>

          <p>También me he dado cuenta de que las experiencias compartidas siempre son las que tienen mayor valor, y que hacer las cosas sin mayor motivo que para ayudar o hacer feliz a alguien es una maravillosa fuente de satisfacción. Sin duda, los amigos que he hecho en estos dos años me han dado momentos que atesoraré para siempre, y me han enseñado valiosas lecciones sobre la importancia de la amistad y la colaboración. Aristóteles decía que el verdadero crecimiento personal se refleja en el amigo, pues en él vemos un espejo que nos ayuda a descubrir quiénes somos y quiénes podemos llegar a ser.
</p>

          <p>Al mirar atrás, me doy cuenta de que CAS no solo me ha dejado recuerdos y anécdotas, sino también una versión más completa y realista de mí mismo. Una versión que entiende el valor de lo imperfecto, de lo colectivo, y de lo hecho con corazón.
          </p>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>