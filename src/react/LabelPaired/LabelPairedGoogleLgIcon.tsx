import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGoogleLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.531 15.734c0 5.547-3.789 9.454-9.375 9.454A9.636 9.636 0 0 1 .47 15.5a9.66 9.66 0 0 1 9.687-9.687c2.578 0 4.805.976 6.485 2.539l-2.657 2.539c-3.437-3.32-9.843-.82-9.843 4.609 0 3.398 2.695 6.133 6.015 6.133 3.828 0 5.274-2.735 5.469-4.18h-5.469v-3.32h9.219c.078.508.156.976.156 1.601' />
    </g>
    <defs>
      <clipPath id='bb1b9d780fa0fb2b69b7f195e5f5bca8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGoogleLgIcon);
export default ForwardRef;
