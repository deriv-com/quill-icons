import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 15q.047 2.25 1.547 3.703 1.453 1.5 3.703 1.547 2.344-.047 3.844-1.687l.234-.282Q12.75 16.83 12.75 15q-.047-2.25-1.547-3.703Q9.75 9.797 7.5 9.75q-2.25.047-3.703 1.547Q2.297 12.75 2.25 15m5.906 7.453a5 5 0 0 1-.656.047q-3.187-.094-5.297-2.203T0 15q.094-3.187 2.203-5.297T7.5 7.5q3.187.094 5.297 2.203T15 15q-.046 3-1.969 5.063l-6.515 8.015q-.75.75-1.594.188-.75-.75-.188-1.594z' />
    </g>
    <defs>
      <clipPath id='a47a1a163f78730523dd5901e84cf4af__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlBoldIcon);
export default ForwardRef;
