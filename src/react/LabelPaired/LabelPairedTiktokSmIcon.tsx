import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTiktokSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.625 9.492c-1.24 0-2.36-.355-3.363-1.066v4.867c0 .948-.265 1.796-.793 2.543a4.423 4.423 0 0 1-2.078 1.64c-.894.31-1.778.356-2.653.137-.875-.218-1.631-.683-2.27-1.394a4.53 4.53 0 0 1-1.066-2.434c-.09-.893.082-1.759.52-2.597a4.522 4.522 0 0 1 1.887-1.86 4.625 4.625 0 0 1 2.625-.437v2.46a1.975 1.975 0 0 0-1.258.028 2.01 2.01 0 0 0-1.012.738 2.052 2.052 0 0 0-.383 1.203c0 .42.128.82.383 1.203.273.347.62.584 1.04.711.4.146.82.146 1.257 0a2.07 2.07 0 0 0 1.012-.738c.255-.346.382-.747.382-1.203V3.75h2.407c0 .2.018.401.054.602.2.93.693 1.658 1.477 2.187a3.501 3.501 0 0 0 1.832.574z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokSmIcon);
export default ForwardRef;
