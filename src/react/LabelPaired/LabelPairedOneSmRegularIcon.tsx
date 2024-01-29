import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.938 5.063V16h2.625q.41.027.437.438-.027.41-.437.437H.438q-.411-.027-.438-.437.027-.411.438-.438h2.625V5.883L1.12 7.168q-.355.192-.601-.11-.192-.354.109-.601l2.625-1.75a.47.47 0 0 1 .465-.027.43.43 0 0 1 .219.383' />
    </g>
    <defs>
      <clipPath id='274986a91faabf395762762b738bf82a__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmRegularIcon);
export default ForwardRef;
