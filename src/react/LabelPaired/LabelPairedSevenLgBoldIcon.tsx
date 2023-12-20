import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSevenLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 7.688c.052-.573.365-.886.938-.938h10.625a.89.89 0 0 1 .82.469.996.996 0 0 1 0 .937L3.258 23.781c-.339.469-.768.586-1.29.352-.468-.339-.572-.768-.312-1.29l8.516-14.218H1.188C.615 8.573.302 8.26.25 7.688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgBoldIcon);
export default ForwardRef;
