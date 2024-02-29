import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignCaptionBoldIcon = (
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
      <path d='M1.398 9.125H.813Q.297 9.078.25 8.563.297 8.047.813 8h.773A5.25 5.25 0 0 1 3.46 5.305Q4.819 4.273 6.625 4.25h.563q.514.047.562.563-.047.514-.562.562h-.563q-1.335.024-2.344.727A4.17 4.17 0 0 0 2.781 8h3.657q.514.047.562.563-.047.514-.562.562H2.523a3 3 0 0 0 0 .75h3.915q.514.047.562.563-.047.514-.562.562H2.78a4.17 4.17 0 0 0 1.5 1.898q1.008.704 2.344.727h.563q.514.047.562.563-.047.514-.562.562h-.563q-1.805-.024-3.164-1.055A5.25 5.25 0 0 1 1.586 11H.812q-.514-.047-.562-.562.047-.516.563-.563h.585a3 3 0 0 1 0-.75' />
    </g>
    <defs>
      <clipPath id='779b8297e31d0497e0dbc7cea096bd2b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionBoldIcon);
export default ForwardRef;
