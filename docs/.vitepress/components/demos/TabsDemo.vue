<script setup lang="ts">
import Tabs from '@/components/ui/tabs/Tabs.vue'
import TabsList from '@/components/ui/tabs/TabsList.vue'
import TabsTrigger from '@/components/ui/tabs/TabsTrigger.vue'
import TabsContent from '@/components/ui/tabs/TabsContent.vue'
</script>

<template>
  <Tabs default-value="account" class="w-full max-w-md">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account" class="p-4 text-sm">
      Make changes to your account here. Click save when you're done.
    </TabsContent>
    <TabsContent value="password" class="p-4 text-sm">
      Change your password here. After saving, you'll be logged out.
    </TabsContent>
  </Tabs>
</template>
