import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxXlRegularIcon = (
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
      <path d='M12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5M12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6m1.125 4.5A1.11 1.11 0 0 1 12 11.625c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m-2.625 12c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5m-1.5 0c0-1.64 1.313-3 3-3 .797 0 1.547.328 2.063.89l5.015-3c.375-.234.844-.093 1.031.235.235.375.094.844-.234 1.031l-5.016 3q.141.423.141.844c0 1.688-1.36 3-3 3-1.687 0-3-1.312-3-3m9.375-9.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M4.5 16.875c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 4.5 19.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m3.375-4.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='d8ab77e97a665aa846b0ff9579604287__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxXlRegularIcon);
export default ForwardRef;
