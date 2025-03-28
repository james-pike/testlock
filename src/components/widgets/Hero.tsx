import { component$ } from "@builder.io/qwik";
import HeroCarousel from "./HeroCarousel";
import IconBrandTailwind from "../icons/IconBrandTailwind";
import IconBrandGoogle from "../icons/IconBrandGoogle";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto">
        <div class="pt-0 md:pt-[40px] pointer-events-none"></div>
        <div class="py-10 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8 px-4 md:px-8 bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
          <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
            <h1 
              class="text-4.5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 animate-hero-text"
            >
              Trusted Locksmith & Security Solutions <br class="hidden lg:block" />{" "}
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-5 dark:text-slate-300 animate-hero-subtitle">
                TestLock provides expert locksmith services for homes, businesses, and vehicles.
                From emergency lockouts to security installations, we ensure your safety with precision and care.
              </p>

              <div class="max-w-xs sm:max-w-md animate-hero-buttons m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-3 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="tel:+16132188063"
                  >
                    <IconBrandTailwind class="mr-1"/> {" "} Call - (613) 218-8063
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-secondary sm:mb-0 w-full"
                    href="/contact"
                  >
                    <IconBrandGoogle class="mr-1"/> Get A Free Estimate
                  </a> 
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
});