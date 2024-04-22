import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 11.25c-.422 0-.75.375-.75.75v12c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75V12c0-.375-.375-.75-.75-.75zM0 12c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm24.75 11.063V12.984l-5.25 2.344v-2.437l4.875-2.203c.234-.094.469-.188.75-.188A1.88 1.88 0 0 1 27 12.375v11.297c0 1.031-.844 1.828-1.875 1.828-.281 0-.516-.047-.75-.14L19.5 23.155v-2.484z' />
    </g>
    <defs>
      <clipPath id='591ab48559d888e0e3aeb590bff32d22__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlBoldIcon);
export default ForwardRef;
