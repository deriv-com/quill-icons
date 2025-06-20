import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 5.75c0 .844.656 1.5 1.5 1.5V6.5a.77.77 0 0 0-.75-.75zm-.75 0h-7.5A2.25 2.25 0 0 1 1 8v3a2.25 2.25 0 0 1 2.25 2.25h7.5A2.25 2.25 0 0 1 13 11V8a2.25 2.25 0 0 1-2.25-2.25M1 12.5c0 .422.328.75.75.75h.75c0-.82-.68-1.5-1.5-1.5zm12-.75c-.844 0-1.5.68-1.5 1.5h.75c.398 0 .75-.328.75-.75zm-11.25-6A.755.755 0 0 0 1 6.5v.75c.82 0 1.5-.656 1.5-1.5zm-1.5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm8.25 3c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313m-3.75 0c0-.797.422-1.523 1.125-1.945a2.27 2.27 0 0 1 2.25 0c.68.422 1.125 1.148 1.125 1.945 0 .82-.445 1.547-1.125 1.969a2.27 2.27 0 0 1-2.25 0A2.27 2.27 0 0 1 4.75 9.5' />
    </g>
    <defs>
      <clipPath id='8b82018bcce28b0d0d5c0cc291916310__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionRegularIcon);
export default ForwardRef;
