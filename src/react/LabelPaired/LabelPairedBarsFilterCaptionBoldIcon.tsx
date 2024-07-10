import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterCaptionBoldIcon = (
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
      <path d='M.25 5.563C.25 5.258.484 5 .813 5h9.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562m1.5 3.75c0-.305.234-.563.563-.563h6.374a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H2.311a.54.54 0 0 1-.562-.562M7 13.063a.555.555 0 0 1-.562.562H4.563A.54.54 0 0 1 4 13.063c0-.305.234-.563.563-.563h1.875a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='c6bd09c41e59aa9e7524fdc1bf41c9b4__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterCaptionBoldIcon);
export default ForwardRef;
