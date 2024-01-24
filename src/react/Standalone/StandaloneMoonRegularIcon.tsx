import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMoonRegularIcon = (
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
    <path d='M15.96 9.117q-2.694.508-4.413 2.54Q9.789 13.647 9.75 16.5q.078 3.203 2.188 5.313T17.25 24a7.7 7.7 0 0 0 3.672-.977q-3.203-.312-5.274-2.578-2.07-2.226-2.148-5.507 0-1.719.664-3.204a7.35 7.35 0 0 1 1.797-2.617m2.58-.86q.077.47-.313.704a7.2 7.2 0 0 0-2.54 2.46q-.937 1.564-.937 3.517.078 2.93 1.992 4.843 1.953 1.953 4.844 2.032.625 0 1.172-.118.468-.04.664.352.195.39-.117.742-2.422 2.383-6.055 2.461-2.46-.04-4.414-1.21a8.2 8.2 0 0 1-3.125-3.126Q8.539 18.961 8.5 16.5q.04-2.46 1.172-4.414a8.5 8.5 0 0 1 3.164-3.125q1.953-1.172 4.375-1.211.39 0 .742.04.47.038.586.468' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoonRegularIcon);
export default ForwardRef;
