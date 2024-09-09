import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6h14c1.094 0 2 .906 2 2v8c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2m.5 2c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zM2 11.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5m.5 2.5c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zM5 8.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5m.5 2.5c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zM5 14.5v1c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5M8.5 8c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zM8 11.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5M11.5 8c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zm-.5 3.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5M14.5 8c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5zm-.5 3.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5h-1c-.281 0-.5.25-.5.5m.5 2.5c-.281 0-.5.25-.5.5v1c0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5v-1c0-.25-.25-.5-.5-.5z' />
    </g>
    <defs>
      <clipPath id='c5640e52c402e170b8171a661f20f142__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardMdFillIcon);
export default ForwardRef;
