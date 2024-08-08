import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.75 13.703c-1.758.04-3.398-.508-4.805-1.523v6.992c0 2.656-1.64 5-4.14 5.937a6.3 6.3 0 0 1-6.992-1.757 6.4 6.4 0 0 1-.82-7.227c1.25-2.305 3.827-3.594 6.484-3.242v3.515a2.95 2.95 0 0 0-3.282 1.055c-.703 1.055-.703 2.422.04 3.438.742 1.015 2.07 1.445 3.242 1.054a2.93 2.93 0 0 0 2.03-2.773V5.5h3.438c0 .313 0 .586.078.898a4.62 4.62 0 0 0 2.11 3.125c.742.508 1.68.782 2.617.782z' />
    </g>
    <defs>
      <clipPath id='2d8cfe650720d553bb694e71e9424df8__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokLgIcon);
export default ForwardRef;
