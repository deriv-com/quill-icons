import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowDownXlFillIcon = (
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
      <path d='M12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6M5.953 19.172l5.25 5.25c.422.469 1.125.469 1.594 0L18 19.172a1.027 1.027 0 0 0 0-1.547 1.027 1.027 0 0 0-1.547 0l-3.328 3.328v-8.578A1.14 1.14 0 0 0 12 11.25a1.11 1.11 0 0 0-1.125 1.125l-.047 8.578L7.5 17.625a1.026 1.026 0 0 0-1.547 0 1.027 1.027 0 0 0 0 1.547' />
    </g>
    <defs>
      <clipPath id='75e24409fd31d712dfedcc5ca92bc87b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownXlFillIcon);
export default ForwardRef;
