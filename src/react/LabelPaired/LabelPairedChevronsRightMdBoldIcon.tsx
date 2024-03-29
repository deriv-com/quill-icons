import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.531 11.469c.281.312.281.781 0 1.062l-6 6c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l5.469-5.469-5.47-5.5a.684.684 0 0 1 0-1.031.684.684 0 0 1 1.032 0zm-12-6 6 6c.281.312.281.781 0 1.062l-6 6c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l5.469-5.469-5.47-5.5a.684.684 0 0 1 0-1.031.684.684 0 0 1 1.032 0z' />
    </g>
    <defs>
      <clipPath id='621d6a838d277e2783feaddba3221827__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightMdBoldIcon);
export default ForwardRef;
