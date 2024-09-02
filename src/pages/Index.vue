<template>
    <div class="p-2 sm:p-8 h-fit 2xl:h-dvh">
      <div class="flex p-2 sm:p-8 w-full h-full rounded-xl border-4 border-white gap-8">
        <div class="overflow-hidden hidden 2xl:inline-block border-0 h-full shadow-none basis-1/3">
          <img class="object-cover rounded-xl basis-1/2 max-h-full h-full brightness-75 sepia" src="/test.jpg" alt="">
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
                    <RouterLink to="/experiences/1"
                      class="flex flex-col bg-slate-100 p-2 rounded-md h-80 sm:h-52 w-10/12 sm:w-32 items-center carousel-item drop-shadow-lg hover:scale-105 md:hover:scale-110 transition-transform justify-around"
                      v-for="i in 10" :id="`experience${i}`">
                      <img class="object-contain rounded-md basis-1/2 max-h-64 sm:max-h-48 brightness-75 sepia"
                        src="/test.jpg" alt="">
                      <p class="text-black relative text-xl sm:text-base">Experiencias nº {{ i }}</p> 
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
                    <div
                      class="flex flex-col bg-slate-100 p-2 rounded-md h-80 sm:h-52 w-10/12 sm:w-32 items-center carousel-item drop-shadow-lg hover:scale-105 md:hover:scale-110 transition-transform justify-around"
                      v-for="i in 2" :id="`project${i}`">
                      <img class="object-contain rounded-md basis-1/2 max-h-64 sm:max-h-48 brightness-75 sepia"
                        src="/test.jpg" alt="">
                      <p class="text-black relative text-xl sm:text-base">Proyecto nº {{ i }}</p>
                    </div>
                  </div>
                  <a :href="`#project10`" class="btn btn-circle hidden 2xl:inline-flex">❯</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>