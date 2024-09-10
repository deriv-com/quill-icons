import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownXlRegularIcon = (
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
      <path d='M1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18M24 18c0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36m-12.562 7.313-4.5-4.5c-.188-.235-.282-.563-.141-.844.094-.282.375-.469.703-.469h9c.281 0 .563.188.656.469.14.281.047.61-.14.843l-4.5 4.5c-.282.282-.797.282-1.078 0M9.28 21 12 23.719 14.672 21zm-2.344-5.766 4.5-4.5c.282-.28.797-.28 1.079 0l4.5 4.5c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L12 12.328l-3.984 3.985c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079' />
    </g>
    <defs>
      <clipPath id='03b18169b3ca3be1f12c9c391ed0f65f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownXlRegularIcon);
export default ForwardRef;
