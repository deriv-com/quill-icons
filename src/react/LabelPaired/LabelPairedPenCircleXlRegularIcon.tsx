import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleXlRegularIcon = (
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
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m15.516-4.312c-.282-.282-.75-.282-1.078 0l-.985.984 1.875 1.875.985-.985a.713.713 0 0 0 0-1.078zM8.53 19.594c-.094.093-.14.234-.187.375l-.563 2.297 2.297-.61c.094 0 .235-.093.328-.187l3.844-3.844-1.875-1.875zm4.875-6.985c.89-.89 2.297-.89 3.188 0l.797.844a2.18 2.18 0 0 1 0 3.14l-5.907 5.954c-.328.281-.656.469-1.078.562L6.891 24c-.235.047-.516 0-.703-.187-.188-.188-.235-.47-.188-.704l.89-3.515c.094-.422.282-.75.563-1.078z' />
    </g>
    <defs>
      <clipPath id='e127e8176f37de1c948c7663bb3f4aa3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleXlRegularIcon);
export default ForwardRef;
