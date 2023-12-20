import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlayBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.5 17.5 9-5.5-9-5.5zM.781 5.188c.5-.271 1-.26 1.5.03l9 5.5c.459.292.698.72.719 1.282-.02.563-.26.99-.719 1.281l-9 5.5c-.5.292-1 .302-1.5.032-.5-.292-.76-.73-.781-1.313v-11c.02-.583.281-1.02.781-1.312'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayBoldIcon);
export default ForwardRef;
