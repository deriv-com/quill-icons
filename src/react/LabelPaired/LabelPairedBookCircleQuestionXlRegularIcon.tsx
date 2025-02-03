import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionXlRegularIcon = (
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
      <path d='M0 9c0-1.64 1.313-3 3-3h15.75C19.969 6 21 7.031 21 8.25v7.078a5.3 5.3 0 0 0-1.5.61V8.25c0-.375-.375-.75-.75-.75H6V24h9c.047.516.14 1.031.281 1.5H3c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5h13.875c.469.61.984 1.078 1.594 1.5H3c-1.687 0-3-1.312-3-3zm1.5 0v15.422C1.922 24.187 2.438 24 3 24h1.5V7.5H3c-.844 0-1.5.703-1.5 1.5m6.75 3.75c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75m0 4.5c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H9a.74.74 0 0 1-.75-.75m8.25 6c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m2.25-1.781c0-1.078.844-1.969 1.922-1.969h1.922c1.172 0 2.156.984 2.156 2.156 0 .797-.469 1.547-1.172 1.922l-1.125.563a.705.705 0 0 1-.703.609.74.74 0 0 1-.75-.75v-.281c0-.282.14-.563.375-.703l1.5-.75c.234-.141.375-.375.375-.61 0-.328-.328-.656-.656-.656h-1.922c-.235 0-.422.234-.422.469v.281c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm2.25 4.781c0-.375.328-.75.75-.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='404efb3e9a055f804c8b18e3dc95ea22__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionXlRegularIcon);
export default ForwardRef;
