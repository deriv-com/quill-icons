import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroXlBoldIcon = (
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
      <path d='M0 15q.094-3.187 2.203-5.297T7.5 7.5q3.187.094 5.297 2.203T15 15v6q-.094 3.187-2.203 5.297T7.5 28.5q-3.187-.094-5.297-2.203T0 21zm7.5-5.25q-2.25.047-3.703 1.547Q2.297 12.75 2.25 15v6q.047 2.25 1.547 3.703 1.453 1.5 3.703 1.547 2.25-.047 3.703-1.547 1.5-1.453 1.547-3.703v-6q-.047-2.25-1.547-3.703Q9.75 9.797 7.5 9.75' />
    </g>
    <defs>
      <clipPath id='93115d5a2fa0ac8e91c2f9a30fd81632__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlBoldIcon);
export default ForwardRef;
