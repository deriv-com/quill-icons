import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenSmRegularIcon = (
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
        d='M.563 3.75h14.875c.273.018.419.164.437.438-.018.273-.164.419-.437.437H.563c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438M1 5.5h.875v6.125c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h10.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V5.5H15v6.125c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H8.438v1.121l2.488 2.516c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L8 15.316l-2.324 2.297c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601l2.489-2.516v-1.121H2.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmRegularIcon);
export default ForwardRef;
