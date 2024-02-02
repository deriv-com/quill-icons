import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsCaptionBoldIcon = (
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
      <path d='M.25 5.563Q.297 5.047.813 5h9.375q.514.047.562.563-.047.514-.562.562H.813Q.297 6.078.25 5.563m0 3.75q.047-.516.563-.563h9.375q.514.047.562.563-.047.514-.562.562H.813Q.297 9.828.25 9.313m10.5 3.75q-.047.514-.562.562H.813q-.516-.047-.563-.562.047-.516.563-.563h9.375q.514.047.562.563' />
    </g>
    <defs>
      <clipPath id='b9ba0fa394392d90__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionBoldIcon);
export default ForwardRef;
