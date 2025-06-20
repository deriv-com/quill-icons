import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 10.5c0 1.688 1.313 3 3 3V12c0-.797-.703-1.5-1.5-1.5zm-1.5 0H6C6 12.984 3.984 15 1.5 15v6C3.984 21 6 23.016 6 25.5h15c0-2.484 2.016-4.5 4.5-4.5v-6a4.5 4.5 0 0 1-4.5-4.5M1.5 24c0 .844.656 1.5 1.5 1.5h1.5c0-1.64-1.36-3-3-3zm24-1.5c-1.687 0-3 1.36-3 3H24c.797 0 1.5-.656 1.5-1.5zM3 10.5c-.844 0-1.5.703-1.5 1.5v1.5c1.64 0 3-1.312 3-3zM0 12c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm16.5 6c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578 0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625M9 18c0-1.594.844-3.047 2.25-3.89 1.36-.797 3.094-.797 4.5 0C17.11 14.952 18 16.405 18 18c0 1.64-.89 3.094-2.25 3.938-1.406.796-3.14.796-4.5 0C9.844 21.094 9 19.64 9 18' />
    </g>
    <defs>
      <clipPath id='91f0913797d9bfbc146bbf22be26dbb0__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillXlRegularIcon);
export default ForwardRef;
