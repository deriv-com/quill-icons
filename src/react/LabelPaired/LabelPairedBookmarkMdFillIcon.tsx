import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5A1.5 1.5 0 0 1 1.5 4h9c.813 0 1.5.688 1.5 1.5v13.75c0 .438-.344.75-.781.75a.7.7 0 0 1-.438-.125L6 16.5l-4.812 3.375A.7.7 0 0 1 .75 20a.72.72 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='05752e3d6ee35c66e87579298dd5f29a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkMdFillIcon);
export default ForwardRef;
