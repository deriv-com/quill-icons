import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.898 8.586-3 3q-.397.328-.796 0l-3-3q-.33-.399 0-.797.397-.328.796 0l2.04 2.04V4.061q.045-.514.562-.562.516.047.563.563v5.765L8.102 7.79q.397-.328.796 0 .33.399 0 .797m-7.523 2.976v1.876q0 .398.281.656.257.28.657.281h6.374a.85.85 0 0 0 .657-.281.85.85 0 0 0 .281-.656v-1.876q.047-.514.563-.562.514.047.562.563v1.874q-.024.868-.61 1.454-.585.585-1.453.609H2.314q-.868-.024-1.454-.61-.585-.585-.609-1.453v-1.874q.047-.516.563-.563.514.047.562.563' />
    </g>
    <defs>
      <clipPath id='40389a2fdf26c7d2__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionBoldIcon);
export default ForwardRef;
