import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 24h-7.5c-.469-1.453-1.406-2.766-2.344-4.031l-.703-.985C1.266 17.625.75 16.031.75 14.25A8.23 8.23 0 0 1 9 6c4.547 0 8.25 3.703 8.25 8.297 0 1.734-.562 3.328-1.5 4.687l-.703.985c-.938 1.265-1.875 2.578-2.297 4.031M9 30c-2.11 0-3.75-1.64-3.75-3.75v-.75h7.5v.75C12.75 28.36 11.063 30 9 30M5.25 14.25c0-2.062 1.64-3.75 3.75-3.75.375 0 .75-.328.75-.75C9.75 9.375 9.375 9 9 9c-2.906 0-5.25 2.39-5.25 5.25 0 .422.328.75.75.75.375 0 .75-.328.75-.75' />
    </g>
    <defs>
      <clipPath id='069f85e99c09255ae4284f7d2ee1fb77__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbXlFillIcon);
export default ForwardRef;
