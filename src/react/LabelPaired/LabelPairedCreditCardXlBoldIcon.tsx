import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24 9.75H3q-.703.047-.75.75V12h22.5v-1.5q-.046-.703-.75-.75m.75 6.75H2.25v9q.046.704.75.75h21q.704-.046.75-.75zM3 7.5h21q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89m2.625 14.25h2.25q1.032.094 1.125 1.125Q8.907 23.907 7.875 24h-2.25q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125m6 0h5.25q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-5.25q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='28a141a5c844939dc1e8c17b0a091725__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardXlBoldIcon);
export default ForwardRef;
