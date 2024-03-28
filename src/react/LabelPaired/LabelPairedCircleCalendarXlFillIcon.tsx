import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 10.5c-.422 0-.75.375-.75.75V12H7.5c-.844 0-1.5.703-1.5 1.5V15h12v-1.5c0-.797-.703-1.5-1.5-1.5H15v-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75V12h-3v-.75c0-.375-.375-.75-.75-.75M6 22.5c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-6H6z' />
    </g>
    <defs>
      <clipPath id='fb2ee53a816300405fa76f25ff1187b1__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarXlFillIcon);
export default ForwardRef;
