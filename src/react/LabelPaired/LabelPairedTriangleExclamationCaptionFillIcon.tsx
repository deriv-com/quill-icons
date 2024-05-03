import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationCaptionFillIcon = (
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
      <path d='M6 4.25c.328 0 .633.188.797.469l5.062 8.625a.95.95 0 0 1 0 .937.89.89 0 0 1-.796.469H.938c-.352 0-.657-.164-.82-.469a.95.95 0 0 1 0-.937L5.18 4.719A.95.95 0 0 1 6 4.25m0 3a.555.555 0 0 0-.562.563v2.625c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562V7.812A.57.57 0 0 0 6 7.25m.75 5.25a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75' />
    </g>
    <defs>
      <clipPath id='526d4b636c78efaf6b839a96279f5818__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationCaptionFillIcon);
export default ForwardRef;
