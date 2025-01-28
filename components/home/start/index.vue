<template>
  <section id="start">
    <div class="container">
      <div class="brand-description">
        <ad-atom-heading :tag="1" text="Atomic">
          <span class="shiny-text">IT</span>
        </ad-atom-heading>
        <ad-atom-paragraph text="Empowering innovation through simplicity" />
      </div>
      <div class="showcase-container">
        <video
          id="black-hole-video"
          src="/black-hole.webm"
          playsinline
          autoplay
          loop
          muted
        />
        <ad-organism-card>
          <template #header>
            <ad-atom-select-button />
            <ad-atom-progress-bar mode="indeterminate" />
            <ad-atom-chip
              v-for="(item, index) in options"
              :key="index"
              :icon="item.icon"
              :label="item.label"
            />
            <div class="p-toggleswitch-container">
              <ad-atom-toggle-switch :default-value="true" />
            </div>
          </template>
          <template #content>
            <div class="content">
              <div class="first-row">
                <start-chart />
                <div class="right-column">
                  <ad-atom-slider orientation="vertical" :default-value="75" />
                </div>
              </div>
              <div class="second-row">
                <ad-atom-progress-spinner
                  stroke-width="8"
                  fill="transparent"
                  animation-duration=".5s"
                />
                <Paginator rows="10" total-records="30" />
              </div>
            </div>
          </template>
        </ad-organism-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StartChart } from './components'

const options = [
  {
    label: 'Technology',
    icon: 'pi pi-microchip-ai',
  },
  {
    label: 'Programming',
    icon: 'pi pi-code',
  },
  {
    label: 'Security',
    icon: 'pi pi-shield',
  },
]

onMounted(() => {
  const videoElement = document.getElementById(
    'black-hole-video'
  ) as HTMLVideoElement

  if (videoElement) {
    videoElement.play()
  }
})
</script>

<style lang="scss">
@use 'index';
</style>
