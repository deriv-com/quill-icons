import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookCaptionIcon = (
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
      <path d='M12 9.5c0 3.07-2.32 5.602-5.273 5.977v-4.125h1.617L8.672 9.5H6.727v-.633c0-.984.375-1.36 1.359-1.36.305 0 .539.024.68.024v-1.64c-.258-.094-.914-.164-1.29-.164-2.015 0-2.93.96-2.93 3V9.5H3.306v1.852h1.242v3.984A6.01 6.01 0 0 1 0 9.5c0-3.305 2.672-6 6-6 3.305 0 6 2.695 6 6' />
    </g>
    <defs>
      <clipPath id='49b9a909fd29c7ab2de991a7dca2a353__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookCaptionIcon);
export default ForwardRef;
