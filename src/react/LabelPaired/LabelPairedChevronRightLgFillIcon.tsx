import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.36 14.64c.507.47.507 1.29 0 1.758l-7.5 7.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757L9.703 15.5 3.102 8.898a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0z' />
    </g>
    <defs>
      <clipPath id='289ef96e178731f6966eae747ca0716a__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgFillIcon);
export default ForwardRef;
