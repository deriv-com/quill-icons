import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleBookmarkXlRegularIcon = (
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
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9 14.25v7.453l2.531-2.015c.235-.235.656-.235.938 0L15 21.703V14.25c0-.375-.375-.75-.75-.75h-4.5c-.422 0-.75.375-.75.75M9.75 12h4.5c1.219 0 2.25 1.031 2.25 2.25v9c0 .328-.187.563-.469.703a.64.64 0 0 1-.75-.094L12 21.234 8.719 23.86c-.235.188-.563.188-.797.094q-.422-.21-.422-.703v-9A2.25 2.25 0 0 1 9.75 12' />
    </g>
    <defs>
      <clipPath id='d9a77952e107a0b84f2551c2349bb687__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkXlRegularIcon);
export default ForwardRef;
