import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpLeftXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m3-17.25H7.875a1.11 1.11 0 0 0-1.125 1.125v7.5c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 9 21.375v-4.781l6.328 6.328c.422.469 1.125.469 1.594 0 .422-.422.422-1.125 0-1.594L10.547 15H15a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 15 12.75' />
    </g>
    <defs>
      <clipPath id='20816d063d225fadf56b8ef1811dab08__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpLeftXlFillIcon);
export default ForwardRef;
