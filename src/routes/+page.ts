import type { PageLoad } from './$types';
import * as earthquakeData from "$lib/data/data";

export const load: PageLoad = () => {
  return {
    earthquakeData
  }
}
