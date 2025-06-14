import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersXlBoldIcon = (
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
      <path d='M0 25.5c0-.61.469-1.125 1.125-1.125h2.766c.468-1.5 1.922-2.625 3.609-2.625 1.64 0 3.094 1.125 3.563 2.625h11.812c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H11.063A3.73 3.73 0 0 1 7.5 29.25c-1.687 0-3.14-1.078-3.61-2.625H1.126C.469 26.625 0 26.156 0 25.5m6 0c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5m9-7.5c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5m1.5-3.75c1.64 0 3.094 1.125 3.563 2.625h2.812c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-2.812A3.73 3.73 0 0 1 16.5 21.75c-1.687 0-3.14-1.078-3.61-2.625H1.126C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h11.766c.468-1.5 1.922-2.625 3.609-2.625M9 12c.797 0 1.5-.656 1.5-1.5C10.5 9.703 9.797 9 9 9c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5m3.563-2.625h10.312c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H12.563A3.73 3.73 0 0 1 9 14.25c-1.687 0-3.14-1.078-3.61-2.625H1.126C.469 11.625 0 11.156 0 10.5c0-.61.469-1.125 1.125-1.125h4.266C5.859 7.875 7.313 6.75 9 6.75c1.64 0 3.094 1.125 3.563 2.625' />
    </g>
    <defs>
      <clipPath id='2218657eb6bc5a6b126cc359d28a0cae__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersXlBoldIcon);
export default ForwardRef;
