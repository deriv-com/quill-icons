import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMicrophoneRegularIcon = (
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
    <path d='M18.5 10.25q-.039-1.055-.742-1.758Q17.054 7.79 16 7.75q-1.055.039-1.758.742T13.5 10.25v6.25q.039 1.055.742 1.758T16 19q1.055-.039 1.758-.742.703-.704.742-1.758zm-6.25 0q.039-1.602 1.094-2.656Q14.398 6.539 16 6.5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656v6.25q-.038 1.602-1.094 2.656Q17.602 20.211 16 20.25q-1.602-.038-2.656-1.094-1.055-1.054-1.094-2.656zM11 14.625V16.5q.04 2.109 1.445 3.555Q13.891 21.46 16 21.5q2.109-.04 3.555-1.445Q20.96 18.609 21 16.5v-1.875q.039-.585.625-.625.585.039.625.625V16.5q-.04 2.5-1.64 4.219-1.563 1.719-3.985 1.992v2.539h2.5q.585.039.625.625-.039.585-.625.625h-6.25q-.585-.039-.625-.625.039-.585.625-.625h2.5v-2.54q-2.422-.272-3.984-1.991Q9.789 19 9.75 16.5v-1.875q.039-.585.625-.625.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMicrophoneRegularIcon);
export default ForwardRef;
