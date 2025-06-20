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
      <path d='M.25 5.563C.25 5.258.484 5 .813 5h9.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562m0 3.75c0-.305.234-.563.563-.563h9.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562m10.5 3.75a.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h9.375a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='fc22772027f2407bfe5ceedd96089583__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionBoldIcon);
export default ForwardRef;
