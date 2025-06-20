import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.5A1.5 1.5 0 0 1 1.5 5h3C5.313 5 6 5.688 6 6.5v3A1.5 1.5 0 0 1 4.5 11h-3A1.48 1.48 0 0 1 0 9.5zM2 7v2h2V7zm-2 7.5A1.5 1.5 0 0 1 1.5 13h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5zm2 .5v2h2v-2zM9.5 5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 9.5v-3A1.5 1.5 0 0 1 9.5 5M12 7h-2v2h2zm-4 6.5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2c0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5zm3.5 5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5 0 .281-.25.5-.5.5m2 0a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5 0 .281-.25.5-.5.5' />
    </g>
    <defs>
      <clipPath id='74776778e1fad8f0b4861122fdc155b3__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeMdFillIcon);
export default ForwardRef;
