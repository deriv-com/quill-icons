import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarSmFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.793 4.242 1.75 3.61 3.938.601a.86.86 0 0 1 .71.574.908.908 0 0 1-.218.903l-2.844 2.816.656 3.992c.055.347-.064.63-.355.848a.815.815 0 0 1-.903.055L8 15.78l-3.5 1.86c-.328.164-.638.146-.93-.055a.903.903 0 0 1-.355-.848l.683-3.992L1.055 9.93a.835.835 0 0 1-.22-.903c.11-.328.338-.52.685-.574l3.937-.601 1.75-3.61c.182-.31.447-.474.793-.492.365.018.629.182.793.492'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarSmFillIcon);
export default ForwardRef;
