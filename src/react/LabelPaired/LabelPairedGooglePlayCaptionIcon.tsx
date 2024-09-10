import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayCaptionIcon = (
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
      <path d='m7.617 9.008 1.406-1.406-6.585-3.797zM1.102 3.5l6 6-6 6a.89.89 0 0 1-.516-.82V4.344c0-.375.21-.68.516-.844m9.96 5.297c.446.328.446 1.101.024 1.43l-1.406.796L8.133 9.5 9.68 8zm-8.624 6.398 5.18-5.18 1.405 1.407z' />
    </g>
    <defs>
      <clipPath id='b104e9ce0ac156e3878a27b12f71911c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayCaptionIcon);
export default ForwardRef;
