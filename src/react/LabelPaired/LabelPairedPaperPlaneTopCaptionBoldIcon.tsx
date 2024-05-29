import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={18}
    viewBox='0 0 13 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.617 8.938h5.86L2.023 5.75zm0 1.124-1.594 3.211 7.454-3.21zM1.531 4.32l10.5 4.5a.77.77 0 0 1 .469.703.76.76 0 0 1-.469.68l-10.5 4.5a.76.76 0 0 1-.843-.187c-.211-.211-.258-.563-.118-.844L2.656 9.5.57 5.352a.79.79 0 0 1 .118-.868.8.8 0 0 1 .843-.164' />
    </g>
    <defs>
      <clipPath id='3ef821fc007164a7f679bb4201a04a89__a'>
        <path d='M0 0h13v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopCaptionBoldIcon);
export default ForwardRef;
