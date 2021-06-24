<template>
  <div class="Profile">
    <ProfileNavBar></ProfileNavBar>
    <ProfileInfo></ProfileInfo>
    <ProfileOrderList></ProfileOrderList>
    <ProfileServerList></ProfileServerList>
  </div>
</template>

<script>
import ProfileNavBar from './childComps/ProfileNavBar.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileOrderList from './childComps/ProfileOrderList.vue'
import ProfileServerList from './childComps/ProfileServerList.vue'

export default {
  name: "Profile",
  data () {
   return {}
  },
   methods:{},
   components: {
     ProfileNavBar,
     ProfileInfo,
     ProfileOrderList,
     ProfileServerList
   }
}
</script>

<style>
</style>