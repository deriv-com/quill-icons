import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenXlFillIcon = (
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
      <path d='M4.125 16.5 0 23.625V10.5c0-1.64 1.313-3 3-3h5.484c.797 0 1.547.328 2.11.89l1.265 1.266c.563.563 1.313.844 2.11.844H19.5c1.64 0 3 1.36 3 3V15H6.75a3.05 3.05 0 0 0-2.625 1.5m1.313.75c.28-.469.75-.75 1.312-.75H25.5c.516 0 1.031.328 1.266.797a1.44 1.44 0 0 1 0 1.5l-5.25 9c-.282.422-.75.703-1.266.703H1.5a1.5 1.5 0 0 1-1.312-.75 1.44 1.44 0 0 1 0-1.5z' />
    </g>
    <defs>
      <clipPath id='9c5bec66a1565b591e3f83b27968135e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenXlFillIcon);
export default ForwardRef;
