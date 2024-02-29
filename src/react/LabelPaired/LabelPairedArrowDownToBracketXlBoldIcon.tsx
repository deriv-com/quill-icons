import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketXlBoldIcon = (
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
      <path d='m17.297 16.172-6 6q-.797.656-1.594 0l-6-6q-.655-.797 0-1.594.797-.655 1.594 0l4.078 4.078V7.125Q9.47 6.095 10.5 6q1.032.095 1.125 1.125v11.531l4.078-4.078q.797-.655 1.594 0 .656.797 0 1.594M2.25 22.125v3.75q0 .797.563 1.313.514.562 1.312.562h12.75q.797 0 1.313-.562.562-.516.562-1.313v-3.75q.094-1.03 1.125-1.125 1.032.094 1.125 1.125v3.75q-.046 1.734-1.219 2.906Q18.61 29.954 16.875 30H4.125q-1.734-.046-2.906-1.219Q.046 27.61 0 25.875v-3.75Q.095 21.095 1.125 21q1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='dca20a8aa2bbac7d858733120bfa341a__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketXlBoldIcon);
export default ForwardRef;
