import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 6h15c1.64 0 3 1.36 3 3v1.5h-3V9H6v10.5h10.5V24H3.563A3.56 3.56 0 0 1 0 20.438c0-.516.375-.938.89-.938H3V9c0-1.64 1.313-3 3-3m15 21h6V15h-6zm-3-12.75A2.25 2.25 0 0 1 20.25 12h7.5c1.219 0 2.25 1.031 2.25 2.25v13.5A2.25 2.25 0 0 1 27.75 30h-7.5A2.22 2.22 0 0 1 18 27.75z' />
    </g>
    <defs>
      <clipPath id='be0be3b056f1fae53c7c94c8ae6ecd48__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileXlFillIcon);
export default ForwardRef;
