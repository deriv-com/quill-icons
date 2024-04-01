import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightLgBoldIcon = (
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
      <path d='m17.438 16.203-6.875 6.563c-.391.351-.977.351-1.329-.04-.351-.39-.351-.976.04-1.328l5.195-4.96H1.188c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h13.28L9.274 9.64a.93.93 0 0 1-.039-1.328.93.93 0 0 1 1.329-.04l6.874 6.563c.196.195.313.43.313.664 0 .273-.117.508-.312.703' />
    </g>
    <defs>
      <clipPath id='8b1e605ef8aa3157b1b76fa5ab1bcae9__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgBoldIcon);
export default ForwardRef;
