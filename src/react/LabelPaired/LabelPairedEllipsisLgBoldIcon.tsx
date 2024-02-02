import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisLgBoldIcon = (
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
      <path d='M17.125 15.5q-.039 1.055-.937 1.64-.937.47-1.875 0-.9-.585-.938-1.64.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64m-6.25 0q-.039 1.055-.937 1.64-.938.47-1.876 0-.897-.585-.937-1.64.04-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64M2.75 17.375q-1.055-.039-1.64-.937-.47-.937 0-1.875.585-.9 1.64-.938 1.055.038 1.64.938.47.937 0 1.874-.585.9-1.64.938' />
    </g>
    <defs>
      <clipPath id='1b37ec2de8a45602__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisLgBoldIcon);
export default ForwardRef;
