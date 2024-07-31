<template>
  <div
    class="bg-background-black font-roboto-mono text-xs text-color-white md:text-base"
  >
    <div class="h-screen">
      <ProfileComponent />
    </div>
    <ProjectsComponent />
    <EducationComponent />
    <WorkComponent />
    <SkillsComponent />
    <PersonalComponent />
  </div>
</template>
<script setup>
import ProfileComponent from "./components/ProfileComponent.vue";
import EducationComponent from "./components/EducationComponent.vue";
import WorkComponent from "./components/WorkComponent/WorkComponent.vue";
import SkillsComponent from "./components/SkillsComponent/SkillsComponent.vue";
import PersonalComponent from "./components/PersonalComponent/PersonalComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent.vue";
</script>
