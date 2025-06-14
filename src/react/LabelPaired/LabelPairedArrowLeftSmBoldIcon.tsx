import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftSmBoldIcon = (
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
      <path d='M.566 11.242a.66.66 0 0 1-.191-.492.64.64 0 0 1 .191-.465L5.38 5.691c.273-.246.684-.246.93.028a.653.653 0 0 1-.028.93l-3.636 3.445h9.324c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H2.645L6.28 14.88c.274.246.274.656.028.93-.247.273-.657.273-.93.027z' />
    </g>
    <defs>
      <clipPath id='07d4d7a7c17701ec1b85353e4fb55279__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftSmBoldIcon);
export default ForwardRef;
