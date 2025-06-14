import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.375 5.063V9h.875a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437h-2.625a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438h.875V5.691l-.738.247c-.246.054-.492-.055-.575-.301a.456.456 0 0 1 .301-.547l1.313-.438c.11-.027.273-.027.383.055s.191.219.191.356m-7.574-.301 2.625 2.625a.463.463 0 0 1 0 .629.463.463 0 0 1-.63 0L4.938 6.129v10.308a.45.45 0 0 1-.437.438.43.43 0 0 1-.437-.437V6.127L2.176 8.017a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l2.626-2.624a.463.463 0 0 1 .629 0m7.027 9.707a1.41 1.41 0 0 0 1.23-.711c.247-.438.247-.957 0-1.422-.273-.438-.738-.711-1.23-.711-.52 0-.984.273-1.258.71-.246.466-.246.985 0 1.423.274.465.739.71 1.258.71m-2.297-1.422a2.293 2.293 0 0 1 2.297-2.297 2.31 2.31 0 0 1 2.297 2.297c0 .055 0 .082-.027.11h.027c0 .6-.219 1.148-.602 1.585l-1.695 1.996c-.164.192-.437.192-.629.055-.191-.164-.191-.437-.054-.629l.71-.82h-.027a2.276 2.276 0 0 1-2.297-2.297' />
    </g>
    <defs>
      <clipPath id='d9fea95ed3b87a0ca11f70da0c9141da__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineSmRegularIcon);
export default ForwardRef;
