import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkLgRegularIcon = (
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
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5M7.5 12.375v6.21l2.11-1.679c.195-.195.546-.195.78 0l2.11 1.68v-6.211c0-.312-.312-.625-.625-.625h-3.75a.64.64 0 0 0-.625.625m.625-1.875h3.75c1.016 0 1.875.86 1.875 1.875v7.5c0 .273-.156.469-.39.586a.53.53 0 0 1-.626-.078L10 18.195l-2.734 2.188c-.196.156-.47.156-.664.078q-.352-.176-.352-.586v-7.5c0-1.016.82-1.875 1.875-1.875' />
    </g>
    <defs>
      <clipPath id='1d0d8001943854f4d0f2e9a34168da4c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkLgRegularIcon);
export default ForwardRef;
