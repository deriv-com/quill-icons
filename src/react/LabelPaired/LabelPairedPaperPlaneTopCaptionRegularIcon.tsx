import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopCaptionRegularIcon = (
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
      <path d='M.57 5.352a.79.79 0 0 1 .118-.868.8.8 0 0 1 .843-.164l10.5 4.5a.76.76 0 0 1 .469.68.77.77 0 0 1-.469.703l-10.5 4.5a.76.76 0 0 1-.843-.187.75.75 0 0 1-.118-.844L2.656 9.5zm2.743 4.523L1.25 14l9.61-4.125zm7.546-.75L1.25 5l2.063 4.125z' />
    </g>
    <defs>
      <clipPath id='97560fa40d3d68ce4cb23bcb10676a44__a'>
        <path d='M0 0h13v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopCaptionRegularIcon);
export default ForwardRef;
