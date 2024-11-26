import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m1.5-3.375a.555.555 0 0 0 .563-.562A.57.57 0 0 0 7.5 11H5.273l3.188-3.164a.55.55 0 0 0 0-.774c-.234-.234-.586-.234-.797 0L4.5 10.228V7.812a.57.57 0 0 0-.562-.562.555.555 0 0 0-.563.563v3.75c0 .328.234.562.563.562z' />
    </g>
    <defs>
      <clipPath id='8678414212a5c66effadfa611342c87d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownLeftCaptionFillIcon);
export default ForwardRef;
