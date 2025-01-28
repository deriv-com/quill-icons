import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashSmBoldIcon = (
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
      <path d='M5.215 5.063c-.082 0-.137.054-.192.109l-.52.766H8.47l-.52-.766a.23.23 0 0 0-.191-.11zm4.84.875h1.914c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-.328l-.657 8.887c-.082.93-.82 1.613-1.75 1.613H3.738c-.93 0-1.668-.684-1.75-1.613L1.332 7.25h-.3a.63.63 0 0 1-.657-.656c0-.356.273-.657.656-.657h1.887L3.93 4.435c.273-.41.765-.684 1.285-.684h2.543c.52 0 1.012.273 1.285.684zm.273 1.312H2.645l.656 8.805a.44.44 0 0 0 .437.383h5.496c.22 0 .41-.165.438-.383z' />
    </g>
    <defs>
      <clipPath id='a4c6a669609fea66daba73027114f893__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashSmBoldIcon);
export default ForwardRef;
