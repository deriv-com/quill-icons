import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M23.766 7.781a.697.697 0 0 1-.047 1.032l-8.25 7.5a.736.736 0 0 1-1.031 0l-5.532-5.579-7.734 5.625c-.328.282-.797.188-1.031-.14-.282-.328-.188-.797.14-1.078l8.25-6c.281-.188.703-.141.985.093L15 14.72l7.734-6.985a.697.697 0 0 1 1.032.047M3.75 26.25v-3c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v3c0 .422.328.75.75.75.375 0 .75-.328.75-.75M3 21c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 3 28.5a2.22 2.22 0 0 1-2.25-2.25v-3A2.25 2.25 0 0 1 3 21m6.75-2.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75zm-3 0A2.25 2.25 0 0 1 9 16.5c1.219 0 2.25 1.031 2.25 2.25v7.5A2.25 2.25 0 0 1 9 28.5a2.22 2.22 0 0 1-2.25-2.25zm9 7.5v-4.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75M15 19.5c1.219 0 2.25 1.031 2.25 2.25v4.5A2.25 2.25 0 0 1 15 28.5a2.22 2.22 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 15 19.5m6.75-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75zm-3 0A2.25 2.25 0 0 1 21 16.5c1.219 0 2.25 1.031 2.25 2.25v7.5A2.25 2.25 0 0 1 21 28.5a2.22 2.22 0 0 1-2.25-2.25z' />
    </g>
    <defs>
      <clipPath id='df822f9f52e57aa71bd5c76e3fe11fb8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedXlRegularIcon);
export default ForwardRef;
