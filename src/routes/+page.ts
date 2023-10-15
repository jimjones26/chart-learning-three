import type { PageLoad } from './$types';
import * as earthquakeData from "$lib/data/data";
import { keys } from "$lib/data/data";

export const load: PageLoad = () => {
  return {
    data: earthquakeData,
    keys: keys
  }
}
