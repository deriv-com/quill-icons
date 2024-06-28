import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m6.047-13.172-5.297-5.25a1.103 1.103 0 0 0-1.547 0l-5.25 5.25c-.469.469-.469 1.172 0 1.594.422.469 1.125.469 1.594 0l3.328-3.328v8.531c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-8.531l3.328 3.328c.422.469 1.125.469 1.594 0 .422-.422.422-1.125 0-1.594' />
    </g>
    <defs>
      <clipPath id='149090a7e0fbab615ca864624d5e3b08__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpXlFillIcon);
export default ForwardRef;
