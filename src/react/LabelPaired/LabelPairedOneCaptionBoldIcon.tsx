import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.563 4.813v8.812h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H.563A.54.54 0 0 1 0 14.188c0-.305.234-.563.563-.563h1.875V5.82l-1.594.985c-.258.164-.61.07-.774-.188s-.07-.61.188-.773l2.437-1.5a.54.54 0 0 1 .563-.024c.187.117.305.305.305.492' />
    </g>
    <defs>
      <clipPath id='33d4019e88ffb9adcaff87a2f695c944__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionBoldIcon);
export default ForwardRef;
