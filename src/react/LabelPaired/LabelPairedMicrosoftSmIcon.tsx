import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrosoftSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 4.625h5.852v5.879H.375zm6.371 0h5.879v5.879H6.746zM.375 11.023h5.852v5.852H.375zm6.371 0h5.879v5.852H6.746z' />
    </g>
    <defs>
      <clipPath id='4d6d28fe992d6af4ee05446f641500c2__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftSmIcon);
export default ForwardRef;
