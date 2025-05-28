import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7c-.281 0-.5.25-.5.5v9c0 .281.219.5.5.5H3c.25 0 .5-.219.5-.5v-9c0-.25-.25-.5-.5-.5zM0 7.5A1.5 1.5 0 0 1 1.5 6H3c.813 0 1.5.688 1.5 1.5v9A1.5 1.5 0 0 1 3 18H1.5A1.48 1.48 0 0 1 0 16.5zM7 7c-.281 0-.5.25-.5.5v9c0 .281.219.5.5.5h1.5c.25 0 .5-.219.5-.5v-9c0-.25-.25-.5-.5-.5zm-1.5.5A1.5 1.5 0 0 1 7 6h1.5c.813 0 1.5.688 1.5 1.5v9A1.5 1.5 0 0 1 8.5 18H7a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='f8c221c88ac1d25980943df921820ef5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdRegularIcon);
export default ForwardRef;
