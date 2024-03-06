import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75q-.703.047-.75.75v15q.046.704.75.75h15q.704-.046.75-.75v-15q-.046-.703-.75-.75zm-3 .75q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zm15.797 5.297-6 6q-.797.656-1.594 0l-3-3q-.656-.797 0-1.594.797-.655 1.594 0L9 19.406l5.203-5.203q.797-.655 1.594 0 .656.797 0 1.594' />
    </g>
    <defs>
      <clipPath id='1251287f0bfdb73ce934d5f05abb171e__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlBoldIcon);
export default ForwardRef;
