import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardLgRegularIcon = (
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
      <path d='M18.516 15.5 10 9.328v12.383zM9.922 8c.234 0 .469.078.664.234l9.023 6.524c.235.195.391.469.391.742 0 .313-.156.586-.39.781l-9.024 6.524c-.195.117-.43.195-.664.195a1.15 1.15 0 0 1-1.172-1.172v-4.023l-6.914 5c-.195.117-.43.195-.664.195A1.15 1.15 0 0 1 0 21.828V9.172C0 8.547.508 8 1.172 8c.234 0 .469.078.664.234l6.914 5V9.172C8.75 8.547 9.258 8 9.922 8M8.75 16.281v-1.523l-7.5-5.43v12.383z' />
    </g>
    <defs>
      <clipPath id='4d77fe1ab93eb9809d410a0d8a4210f7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgRegularIcon);
export default ForwardRef;
