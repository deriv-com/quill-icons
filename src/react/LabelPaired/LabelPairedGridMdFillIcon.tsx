import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.25C0 5.563.531 5 1.25 5h1.5C3.438 5 4 5.563 4 6.25v1.5C4 8.469 3.438 9 2.75 9h-1.5C.531 9 0 8.469 0 7.75zm0 5C0 10.563.531 10 1.25 10h1.5c.688 0 1.25.563 1.25 1.25v1.5C4 13.469 3.438 14 2.75 14h-1.5C.531 14 0 13.469 0 12.75zm4 5v1.5C4 18.469 3.438 19 2.75 19h-1.5C.531 19 0 18.469 0 17.75v-1.5C0 15.563.531 15 1.25 15h1.5c.688 0 1.25.563 1.25 1.25m1-10C5 5.563 5.531 5 6.25 5h1.5C8.438 5 9 5.563 9 6.25v1.5C9 8.469 8.438 9 7.75 9h-1.5C5.531 9 5 8.469 5 7.75zm4 5v1.5C9 13.469 8.438 14 7.75 14h-1.5C5.531 14 5 13.469 5 12.75v-1.5c0-.687.531-1.25 1.25-1.25h1.5c.688 0 1.25.563 1.25 1.25m-4 5c0-.687.531-1.25 1.25-1.25h1.5c.688 0 1.25.563 1.25 1.25v1.5C9 18.469 8.438 19 7.75 19h-1.5C5.531 19 5 18.469 5 17.75zm9-10v1.5C14 8.469 13.438 9 12.75 9h-1.5C10.531 9 10 8.469 10 7.75v-1.5c0-.687.531-1.25 1.25-1.25h1.5c.688 0 1.25.563 1.25 1.25m-4 5c0-.687.531-1.25 1.25-1.25h1.5c.688 0 1.25.563 1.25 1.25v1.5c0 .719-.562 1.25-1.25 1.25h-1.5c-.719 0-1.25-.531-1.25-1.25zm4 5v1.5c0 .719-.562 1.25-1.25 1.25h-1.5c-.719 0-1.25-.531-1.25-1.25v-1.5c0-.687.531-1.25 1.25-1.25h1.5c.688 0 1.25.563 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='7094323d691600138f47525f156ad1bd__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridMdFillIcon);
export default ForwardRef;
