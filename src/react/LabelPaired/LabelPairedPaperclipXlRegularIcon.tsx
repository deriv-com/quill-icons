import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.813 9.188a3.48 3.48 0 0 0-4.922 0l-9 9a5.574 5.574 0 0 0 0 7.921 5.574 5.574 0 0 0 7.922 0l7.124-7.125c.282-.28.797-.28 1.079 0 .28.282.28.797 0 1.078l-7.125 7.125c-2.766 2.766-7.313 2.766-10.078 0-2.766-2.812-2.766-7.312 0-10.078l9-9a5.065 5.065 0 0 1 7.078 0 5.065 5.065 0 0 1 0 7.079l-8.625 8.625c-1.313 1.312-3.516 1.171-4.688-.282-.984-1.265-.89-3.047.234-4.172l7.126-7.125c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L6.89 20.437c-.61.563-.657 1.5-.141 2.157.61.75 1.781.843 2.438.14l8.625-8.625a3.48 3.48 0 0 0 0-4.921' />
    </g>
    <defs>
      <clipPath id='a839193398bd69ab09fae38f937fb2d8__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipXlRegularIcon);
export default ForwardRef;
