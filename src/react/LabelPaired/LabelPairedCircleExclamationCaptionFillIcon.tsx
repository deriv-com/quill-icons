import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleExclamationCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m0-9a.555.555 0 0 0-.562.563v2.625c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562V7.062A.57.57 0 0 0 6 6.5m-.75 5.25c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 11a.755.755 0 0 0-.75.75' />
    </g>
    <defs>
      <clipPath id='f01854e6665fa1f583414b0df6e14d8d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleExclamationCaptionFillIcon);
export default ForwardRef;
