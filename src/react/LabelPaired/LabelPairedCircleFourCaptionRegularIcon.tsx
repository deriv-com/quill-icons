import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m5.367-2.953c.211.07.305.281.211.469L4.29 10.25H6.75V8.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.875h.375c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.5v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11h-3c-.14 0-.258-.047-.328-.164a.33.33 0 0 1-.024-.328l1.5-3.75c.07-.211.282-.305.493-.211z' />
    </g>
    <defs>
      <clipPath id='eccdc46102c43fb2ae93b6cec3a4a962__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourCaptionRegularIcon);
export default ForwardRef;
