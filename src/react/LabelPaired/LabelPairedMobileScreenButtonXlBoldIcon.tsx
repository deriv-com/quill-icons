import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 27q.046.704.75.75h10.5q.703-.046.75-.75v-3.75H3zm0-6h12V9q-.047-.703-.75-.75H3.75Q3.047 8.297 3 9zM.75 9q.047-1.266.89-2.11.844-.843 2.11-.89h10.5q1.266.047 2.11.89.843.844.89 2.11v18q-.047 1.266-.89 2.11-.844.843-2.11.89H3.75q-1.266-.047-2.11-.89Q.798 28.265.75 27zM7.5 24.75h3q.703.046.75.75-.047.704-.75.75h-3q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='bf1d4948bea9e90ac6503c68367cfffa__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlBoldIcon);
export default ForwardRef;
