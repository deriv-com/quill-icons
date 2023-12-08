import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLightChartLineUpDownClockBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M3.5 8.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v13.75c0 .546.39.937.938.937h10.156c.234.703.625 1.328 1.093 1.875H6.313A2.8 2.8 0 0 1 3.5 22.437V8.688Zm4.336 7.187 3.125-3.125c.351-.39.937-.39 1.328 0l2.461 2.46c1.406-1.444 2.852-2.89 4.297-4.335h-.86c-.546 0-.937-.39-.937-.938 0-.507.39-.937.938-.937h3.125c.234 0 .468.117.664.273.156.196.273.43.273.665v3.124c0 .547-.43.938-.938.938-.546 0-.937-.39-.937-.938v-.859l-4.96 4.961c-.392.39-.977.39-1.33 0l-2.46-2.46-2.46 2.46c-.392.39-.977.39-1.33 0a.856.856 0 0 1 0-1.289Zm9.414 5c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.602 5.602 0 0 1-5.625-5.625Zm5-2.5v2.5c0 .352.273.625.625.625h1.875a.642.642 0 0 0 .625-.625c0-.313-.313-.625-.625-.625H23.5v-1.875c0-.313-.313-.625-.625-.625a.642.642 0 0 0-.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLightChartLineUpDownClockBoldIcon);
export default ForwardRef;