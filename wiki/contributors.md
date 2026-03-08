---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3026642514&spec=640',
    name: '土拨鼠',
    title: '文档创建 | 编辑',
    links: []
  },
  {
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1563575481&spec=640',
    name: 'GrassBlock2022',
    title: '文档编辑',
    links: []
  },
    {
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2212997605&spec=640',
    name: 'TWSFTS_07007',
    title: '文档编辑',
    links: []
  }

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>文档贡献者</template>
    <template #lead>
      参与编辑和提供文档内容
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>