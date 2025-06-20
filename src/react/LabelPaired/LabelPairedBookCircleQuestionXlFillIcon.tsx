import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionXlFillIcon = (
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
      <path d='M0 10.5C0 8.016 2.016 6 4.5 6h15c.797 0 1.5.703 1.5 1.5v7.828c-3.469.985-6 4.172-6 7.922V24H4.5c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5h11.39a8 8 0 0 0 2.579 3H4.5A4.5 4.5 0 0 1 0 25.5zm6 2.25c0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-9c-.422 0-.75.375-.75.75m0 3c0 .422.328.75.75.75h9c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-9c-.422 0-.75.375-.75.75m10.5 7.5c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m3.75-2.156v.281c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.281c0-.235.188-.469.422-.469h1.922c.328 0 .656.328.656.656 0 .282-.14.469-.375.61l-1.5.75c-.234.14-.375.422-.375.703V24c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.234l1.078-.563c.703-.375 1.172-1.125 1.172-1.922 0-1.172-.984-2.11-2.156-2.11h-1.922a1.9 1.9 0 0 0-1.922 1.923m1.875 5.531c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 23.25 25.5a1.11 1.11 0 0 0-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='3e198bcc34426566aaf8b82778a36227__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionXlFillIcon);
export default ForwardRef;
