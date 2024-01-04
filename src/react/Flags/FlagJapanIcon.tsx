import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagJapanIcon = (
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
      d='M22.203.026H1.797C.805.026 0 .844 0 1.852v12.322C0 15.182.805 16 1.797 16h20.406c.992 0 1.797-.818 1.797-1.826V1.852C24 .844 23.195.026 22.203.026Z'
    />
    <path
      fill='#ED293F'
      d='M12 12.637c2.514 0 4.552-2.07 4.552-4.624S14.514 3.389 12 3.389 7.448 5.46 7.448 8.013 9.486 12.637 12 12.637Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagJapanIcon);
export default ForwardRef;
