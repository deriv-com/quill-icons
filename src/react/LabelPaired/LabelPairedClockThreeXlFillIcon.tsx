import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClockThreeXlFillIcon = (
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
      <path d='M12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6m-1.125 5.625V18c0 .656.469 1.125 1.125 1.125h4.875A1.11 1.11 0 0 0 18 18a1.14 1.14 0 0 0-1.125-1.125h-3.75v-5.25A1.14 1.14 0 0 0 12 10.5a1.11 1.11 0 0 0-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='ae17a75aa5b91ddd94a8253efe593fbe__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClockThreeXlFillIcon);
export default ForwardRef;
