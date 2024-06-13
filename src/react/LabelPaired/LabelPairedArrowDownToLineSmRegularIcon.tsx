import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineSmRegularIcon = (
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
      <path d='M.688 16.875a.43.43 0 0 1-.438-.437A.45.45 0 0 1 .688 16h9.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437zM5.8 14.141a.463.463 0 0 1-.63 0l-3.5-3.5a.463.463 0 0 1 0-.63.463.463 0 0 1 .63 0l2.762 2.762v-7.71a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438v7.71l2.734-2.761a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629z' />
    </g>
    <defs>
      <clipPath id='db785c2a92e16951d4fa21d090616c34__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmRegularIcon);
export default ForwardRef;
