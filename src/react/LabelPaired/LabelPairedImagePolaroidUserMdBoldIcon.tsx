import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserMdBoldIcon = (
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
      <path d='M1.5 17c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5v-1.5h-11zm8.938-3H12.5V7c0-.25-.25-.5-.5-.5H2c-.281 0-.5.25-.5.5v7h2.063c.218-.844 1-1.5 1.937-1.5h3c.906 0 1.688.656 1.938 1.5M14 7v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2M5 9.5a2.02 2.02 0 0 1 1-1.719c.594-.343 1.375-.343 2 0 .594.375 1 1.032 1 1.719 0 .719-.406 1.375-1 1.75-.625.344-1.406.344-2 0A2.03 2.03 0 0 1 5 9.5' />
    </g>
    <defs>
      <clipPath id='356d506750af14c9f983e9993d231207__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserMdBoldIcon);
export default ForwardRef;
