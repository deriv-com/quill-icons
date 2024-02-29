import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketXlBoldIcon = (
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
      <path d='m11.297 6.328 6 6q.656.797 0 1.594-.797.656-1.594 0l-4.078-4.078v11.531q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V9.844l-4.078 4.078q-.797.656-1.594 0-.655-.797 0-1.594l6-6q.797-.656 1.594 0M2.25 22.125v3.75q0 .797.563 1.313.514.562 1.312.562h12.75q.797 0 1.313-.562.562-.516.562-1.313v-3.75q.094-1.03 1.125-1.125 1.032.094 1.125 1.125v3.75q-.046 1.734-1.219 2.906Q18.61 29.954 16.875 30H4.125q-1.734-.046-2.906-1.219Q.046 27.61 0 25.875v-3.75Q.095 21.095 1.125 21q1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='fdb9694e633e3703959377abeab7f50a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketXlBoldIcon);
export default ForwardRef;
