import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.688 5.492-1.5 1.781C6.156 7.367 7.75 9.008 7.75 11A3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11v-.094c.023-.867.328-1.71.89-2.367l3.4-4.008c.257-.328.75-.351 1.054-.093.328.257.351.75.093 1.054M6.25 11c0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C2.172 9.477 1.75 10.203 1.75 11c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0C5.805 12.547 6.25 11.82 6.25 11' />
    </g>
    <defs>
      <clipPath id='4f8258a87acc81201365e4a0d1ac3269__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionFillIcon);
export default ForwardRef;
