import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 6.375a.47.47 0 0 1 .437.438v6.125a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-5.06l-7.137 7.138a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63L8.371 7.25H3.313a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438z' />
    </g>
    <defs>
      <clipPath id='c8c4e37b4217dcd375224566ae5f0eb3__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightSmRegularIcon);
export default ForwardRef;
