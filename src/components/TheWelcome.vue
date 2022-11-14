<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>文档</template>
    Vue的官方文档为您提供了入门所需的所有信息。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>工具</template>
    该项目与Vite一起服务和捆绑。建议的IDE设置是VSCode+Volar。如果您需要测试组件和网页，请查看Cypress和Cypress组件测试。
    README.md中提供了更多说明。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>生态系统</template>
    获取项目的官方工具和库：Pinia、Vue Router、Vue Test Utils和Vue Dev tools。如果您需要更多资源，我们建议您访问Awesome Vue。
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>社区</template>
    卡住了？在我们的官方Discord服务器Vue Land或StackOverflow上提问。您还应该订阅我们的邮件列表，并关注官方@vuejs twitter帐户，了解Vue世界的最新消息。
  </WelcomeItem>
</template>
