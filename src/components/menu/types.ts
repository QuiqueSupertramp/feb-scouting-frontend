import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'

export type SlideMenu = Record<string, SlideMenuItem>

export interface SlideMenuItem {
  to: RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  label: string
}
