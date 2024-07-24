import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.164 7.063 6.563 6.875c.351.39.351.976-.04 1.328-.39.351-.976.351-1.328-.04l-4.921-5.195v13.282c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V10.03l-4.961 5.196c-.352.39-.938.39-1.329.039a.93.93 0 0 1-.039-1.328l6.563-6.876c.195-.195.43-.312.703-.312.234 0 .469.117.664.313' />
    </g>
    <defs>
      <clipPath id='12f8ca1ed24002c291064097264cb08b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgBoldIcon);
export default ForwardRef;
