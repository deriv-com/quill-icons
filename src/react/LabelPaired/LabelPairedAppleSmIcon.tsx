import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.945 11.106c0 .054-.082 1.667 1.696 2.515-.328 1.012-1.477 3.254-2.817 3.254-.765 0-1.203-.492-2.078-.492-.902 0-1.394.492-2.078.492-1.313.055-2.57-2.406-2.926-3.418a6.5 6.5 0 0 1-.383-2.215c0-2.433 1.614-3.61 3.145-3.637.738 0 1.668.52 2.078.52.383 0 1.45-.629 2.434-.547 1.011.082 1.777.465 2.297 1.203-.903.574-1.368 1.313-1.368 2.324M7.415 6.62c-.548.629-1.204.984-1.915.93-.055-.739.219-1.422.71-1.969.438-.492 1.204-.902 1.86-.957 0 .3.082 1.121-.656 1.996' />
    </g>
    <defs>
      <clipPath id='bbaebc7522937ee301a9c9b9963c904d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleSmIcon);
export default ForwardRef;
