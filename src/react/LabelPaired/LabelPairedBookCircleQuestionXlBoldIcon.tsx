import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.125A4.13 4.13 0 0 1 4.125 6h14.25C19.781 6 21 7.219 21 8.625v6.703c-.844.235-1.594.563-2.25 1.031V8.625a.4.4 0 0 0-.375-.375H4.125a1.85 1.85 0 0 0-1.875 1.875v12.703a3.7 3.7 0 0 1 1.5-.328H15v.75c0 .516.047 1.031.094 1.5H3.75c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5h12.563c.562.89 1.312 1.688 2.156 2.25H3.75C1.64 30 0 28.36 0 26.25V10.125m6 2.25c0-.61.469-1.125 1.125-1.125h8.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-8.25C6.469 13.5 6 13.031 6 12.375m0 3.75C6 15.515 6.469 15 7.125 15h8.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-8.25C6.469 17.25 6 16.781 6 16.125m10.5 7.125c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m3.75-2.156v.281c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.281c0-.235.188-.469.422-.469h1.922c.328 0 .656.328.656.656 0 .282-.14.469-.375.61l-1.5.75c-.234.14-.375.422-.375.703V24c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.234l1.078-.563c.703-.375 1.172-1.125 1.172-1.922 0-1.172-.984-2.11-2.156-2.11h-1.922a1.9 1.9 0 0 0-1.922 1.923m1.875 5.531c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 23.25 25.5a1.11 1.11 0 0 0-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='e070b1762ea1b1705e14d8ca8a77cd10__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionXlBoldIcon);
export default ForwardRef;
