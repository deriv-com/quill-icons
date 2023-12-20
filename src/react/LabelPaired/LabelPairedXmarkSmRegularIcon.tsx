import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.137 14.988 5.5 11.378l-3.61 3.61c-.218.164-.428.164-.628 0-.164-.2-.164-.4 0-.601l3.61-3.637-3.61-3.61c-.164-.218-.164-.428 0-.628.2-.164.41-.164.629 0l3.609 3.61 3.637-3.61c.2-.164.4-.164.601 0 .164.2.164.41 0 .629l-3.61 3.609 3.61 3.637c.164.2.164.4 0 .601-.2.164-.4.164-.601 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmRegularIcon);
export default ForwardRef;
