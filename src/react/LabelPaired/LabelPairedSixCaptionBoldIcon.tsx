import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.625 11c-.016-.75-.273-1.367-.773-1.852-.485-.5-1.102-.757-1.852-.773-.781.016-1.422.297-1.922.844l-.117.14A2.545 2.545 0 0 0 1.375 11c.016.75.273 1.367.773 1.852.485.5 1.102.757 1.852.773.75-.016 1.367-.273 1.852-.773.5-.485.757-1.102.773-1.852M3.672 7.273c.11-.015.219-.023.328-.023 1.063.031 1.945.398 2.648 1.102.704.703 1.07 1.585 1.102 2.648-.031 1.063-.398 1.945-1.102 2.648-.703.704-1.585 1.07-2.648 1.102-1.062-.031-1.945-.398-2.648-1.102C.648 12.945.282 12.063.25 11c.016-1 .344-1.844.984-2.531L4.492 4.46c.25-.25.516-.281.797-.094.25.25.281.516.094.797z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionBoldIcon);
export default ForwardRef;
