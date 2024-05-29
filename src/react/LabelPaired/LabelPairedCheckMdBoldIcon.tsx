import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckMdBoldIcon = (
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
      <path d='M13.781 7.219c.281.312.281.781 0 1.062l-8.25 8.25c-.312.313-.781.313-1.062 0l-4.25-4.25a.684.684 0 0 1 0-1.031.684.684 0 0 1 1.031 0l3.719 3.719 7.75-7.75a.736.736 0 0 1 1.031 0z' />
    </g>
    <defs>
      <clipPath id='10ae4dbe4c77fa1120b820c35e9c4835__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckMdBoldIcon);
export default ForwardRef;
