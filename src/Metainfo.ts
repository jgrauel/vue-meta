import { defineComponent } from 'vue'
import { getCurrentManager } from './useApi'
import type { VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue'

export const MetainfoImpl = defineComponent({
  name: 'Metainfo',
  inheritAttrs: false,
  setup (_, { slots }) {
    return () => {
      const manager = getCurrentManager()
      if (!manager) {
        return
      }

      return manager.render({ slots })
    }
  }
})

export const Metainfo = (MetainfoImpl as any) as {
  new (): {
    $props: AllowedComponentProps &
      ComponentCustomProps &
      VNodeProps
  }
}
