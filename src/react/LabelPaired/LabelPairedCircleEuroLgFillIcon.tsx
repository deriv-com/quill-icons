import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-5-9.375a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h.938a4.97 4.97 0 0 0 4.648 3.203h1.64a.95.95 0 0 0 .938-.937.95.95 0 0 0-.937-.938h-1.641c-1.055 0-1.953-.508-2.54-1.328h3.204a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H7.5c-.04-.156-.04-.39-.04-.586 0-.234 0-.43.04-.664h3.75a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H8.086c.586-.742 1.484-1.25 2.5-1.25h1.64c.508 0 .938-.39.938-.937a.95.95 0 0 0-.937-.938h-1.641c-2.07 0-3.906 1.328-4.648 3.125H5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h.625c-.04.234-.04.469-.04.664s0 .39.04.586z' />
    </g>
    <defs>
      <clipPath id='5e37eb3e488207a2e4b0f3427cc889eb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroLgFillIcon);
export default ForwardRef;
