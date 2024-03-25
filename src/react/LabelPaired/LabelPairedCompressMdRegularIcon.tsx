import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressMdRegularIcon = (
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
      <path d='M5 5.5v4c0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H4V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5M.5 14h4c.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V15H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M10 5.5V9h3.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5.25 0 .5.25.5.5M9.5 14h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H10v3.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='629ea362f5143ac2d841d4a0f4828e6d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdRegularIcon);
export default ForwardRef;
