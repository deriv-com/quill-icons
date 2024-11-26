import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21 12a5.97 5.97 0 0 1-2.578 4.922l-1.219-.985c1.36-.75 2.297-2.25 2.297-3.937 0-2.484-2.016-4.5-4.5-4.5-2.062 0-3.797 1.406-4.36 3.281l-1.218-.984C10.266 7.594 12.469 6 15 6c3.281 0 6 2.719 6 6m2.438 16.5 1.5 1.219a1.3 1.3 0 0 1-.844.281H5.859c-.75 0-1.359-.61-1.359-1.36 0-4.64 3.703-8.39 8.344-8.39h.14l1.922 1.5h-2.062c-3.75 0-6.797 3.047-6.844 6.75zM1.172 6.188l28.547 22.5c.281.234.375.75.093 1.03-.234.329-.703.423-1.03.141L.281 7.36c-.329-.234-.423-.75-.141-1.03.234-.329.75-.423 1.03-.141' />
    </g>
    <defs>
      <clipPath id='37822c41227e4f46aeb857e9434d5532__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashXlRegularIcon);
export default ForwardRef;
