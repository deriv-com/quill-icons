import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftSmRegularIcon = (
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
      <path d='m12.488 7.55-2.625 2.626q-.3.273-.601 0-.274-.3 0-.602l1.86-1.886H.811q-.41-.029-.437-.438.027-.41.438-.437H11.12l-1.86-1.887q-.273-.3 0-.602.302-.273.602 0l2.625 2.625q.274.3 0 .602m-9.351 9.626L.512 14.55q-.274-.3 0-.602l2.625-2.625q.3-.273.601 0 .275.3 0 .602l-1.86 1.886h10.31q.41.028.437.438-.027.41-.437.438H1.877l1.86 1.886q.275.3 0 .602-.3.273-.601 0' />
    </g>
    <defs>
      <clipPath id='97a8c16cd88c5fd756f1fde98c36fff4__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftSmRegularIcon);
export default ForwardRef;
