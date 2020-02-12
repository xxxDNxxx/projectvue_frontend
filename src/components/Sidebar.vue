<template>
    <div class="sidebar">
        <SidebarNav :item="admin" class="sidebar-nav" />
        <SidebarNav :item="user" class="sidebar-nav" />
        <SidebarNav :item="setting" class="sidebar-nav" />
    </div>
</template>

<script>
import SidebarNav from "./SidebarNav";
export default {
  data() {
    return {
      admin: {
        header: "<i class='fa fa-unlock'></i> ส่วนของผู้ดูแลระบบ",
        navs: [
          { name: "จัดการผู้ใช้" },
          { name: "จัดการอีเวนต์" },
          { name: "ยืนยันตัวตนผู้ใช้" }
        ]
      },
      user: {
        header: "<i class='fa fa-user'></i> ส่วนของผู้ใช้งาน",
        navs: [
          { name: "อีเวนต์ของฉัน" },
          { name: "สร้างอีเวนต์" }
          
        ]
      },
      setting: {
        header: "<i class='fa fa-cog'></i> ตั้งค่าอื่่นๆ",
        navs: [
          { name: "ตั้งค่าโปรไฟล์" },
          { name: "ตั้งค่าการแจ้งเตือน" },
          { name: "ออกจากระบบ" }
        ]
      }
    };
  },
  components: {
    SidebarNav
  }
};
</script>

<style scoped>
.sidebar-nav {
  margin-bottom: 30px;
}
</style>


