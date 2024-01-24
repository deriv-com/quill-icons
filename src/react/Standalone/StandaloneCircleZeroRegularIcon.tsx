import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleZeroRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m0-15q1.602.039 2.656 1.094 1.055 1.054 1.094 2.656v2.5q-.038 1.602-1.094 2.656Q17.602 21.461 16 21.5q-1.602-.038-2.656-1.094-1.055-1.054-1.094-2.656v-2.5q.039-1.602 1.094-2.656Q14.398 11.539 16 11.5m-2.5 3.75v2.5q.039 1.055.742 1.758T16 20.25q1.055-.039 1.758-.742.703-.704.742-1.758v-2.5q-.039-1.055-.742-1.758-.704-.703-1.758-.742-1.055.039-1.758.742T13.5 15.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleZeroRegularIcon);
export default ForwardRef;
