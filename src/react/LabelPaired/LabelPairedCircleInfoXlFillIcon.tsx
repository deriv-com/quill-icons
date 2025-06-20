import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleInfoXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m-1.875-8.25A1.11 1.11 0 0 0 9 22.875C9 23.531 9.469 24 10.125 24h3.75A1.11 1.11 0 0 0 15 22.875a1.14 1.14 0 0 0-1.125-1.125H13.5v-4.125a1.14 1.14 0 0 0-1.125-1.125h-2.25A1.11 1.11 0 0 0 9 17.625c0 .656.469 1.125 1.125 1.125h1.125v3zM12 12c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='669cf31aaa97ac24015bd10d0eed6749__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoXlFillIcon);
export default ForwardRef;
