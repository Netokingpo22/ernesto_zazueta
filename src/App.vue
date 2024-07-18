<template>
  <div class="bg-background-black font-roboto-mono text-color-white">
    <div class="h-screen bg-[#0e0d11]">
      <ProfileComponent />
    </div>
    <div class="bg-[#0e0d11]">
      <ProjectsComponent />
      <EducationComponent />
      <WorkComponent />
      <SkillsComponent />
      <PersonalComponent />
    </div>
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
