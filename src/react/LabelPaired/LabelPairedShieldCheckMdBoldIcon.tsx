import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckMdBoldIcon = (
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
      <path d='M2.281 7.969q-.28.156-.281.406 0 1.47.5 3.375.5 1.875 1.75 3.688 1.281 1.78 3.563 2.937.188.063.375 0 2.28-1.156 3.562-2.937Q13 13.625 13.5 11.75q.5-1.906.5-3.375 0-.25-.281-.406L8 5.53zm12.032-1.375q.531.219.843.687a1.8 1.8 0 0 1 .344 1.094q.03 1.595-.531 3.75-.563 2.156-2.031 4.188-1.438 2.062-4.126 3.406-.812.375-1.624 0-2.688-1.344-4.125-3.407-1.47-2.031-2.032-4.187Q.47 9.97.5 8.375a1.8 1.8 0 0 1 .344-1.094q.313-.468.844-.687l5.906-2.5A.9.9 0 0 1 8 4q.219 0 .406.094zM9.75 10.5q-.063 1.094-1 1.594v2.156q-.063.687-.75.75-.687-.063-.75-.75v-2.156q-.937-.5-1-1.594.031-.75.5-1.25.5-.469 1.25-.5.75.031 1.25.5.47.5.5 1.25' />
    </g>
    <defs>
      <clipPath id='f30fe2f2d88e5bf342cf25ae3d8f86ab__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckMdBoldIcon);
export default ForwardRef;
