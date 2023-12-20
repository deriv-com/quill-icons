import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagNorwayIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      d='M10.759 5.898H24v.84H9.931V.014h.828zM7.448.013h-.827v5.885H0v.84h7.448zM0 9.261v.84h6.62v5.886h.828V9.26zM9.931 15.987h.828v-5.885H24v-.84H9.931z'
    />
    <path
      fill='#F44336'
      d='M22 0a2 2 0 0 1 2 2v3.898H10.759V.013zM6.62 5.898V.013L2 0a2 2 0 0 0-2 2v3.898zM0 14v-3.898h6.62v5.885L2 16a2 2 0 0 1-2-2M24 14a2 2 0 0 1-2 2l-11.241-.013v-5.885H24z'
    />
    <path fill='#0D47A1' d='M24 6.739H9.931V.013H7.448V6.74H0V9.26h7.448v6.726h2.483V9.26H24z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagNorwayIcon);
export default ForwardRef;
