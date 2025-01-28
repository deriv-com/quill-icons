import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowRightCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.586 3.023L9.21 9.898c.21-.21.21-.562 0-.796L6.586 6.5c-.234-.234-.586-.234-.797 0a.513.513 0 0 0 0 .773l1.664 1.665H3.188a.555.555 0 0 0-.563.562c0 .328.234.563.563.563l4.265.023L5.79 11.75a.513.513 0 0 0 0 .773c.211.235.563.235.797 0' />
    </g>
    <defs>
      <clipPath id='1ef1d6325ac882b9b276cab5384a7733__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightCaptionFillIcon);
export default ForwardRef;
