import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.336 5.555 1.055 8.672A.19.19 0 0 0 1 8.809q.027.164.191.191H7.81A.214.214 0 0 0 8 8.809q0-.082-.055-.137l-3.28-3.117A.3.3 0 0 0 4.5 5.5a.3.3 0 0 0-.164.055m-.602-.63q.329-.3.766-.3.438 0 .766.3l3.28 3.09q.33.33.329.794 0 .465-.3.765-.302.3-.766.301H1.19q-.465 0-.765-.3-.3-.302-.301-.766 0-.466.328-.793z' />
    </g>
    <defs>
      <clipPath id='754bc274675e5b739274a25d693eae23__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmRegularIcon);
export default ForwardRef;
