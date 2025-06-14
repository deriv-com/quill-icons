import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserXlRegularIcon = (
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
      <path d='M19.313 25.547A10.51 10.51 0 0 0 22.5 18c0-5.766-4.734-10.5-10.5-10.5C6.188 7.5 1.5 12.234 1.5 18c0 2.953 1.219 5.625 3.14 7.547C5.298 22.969 7.689 21 10.5 21h3c2.766 0 5.156 1.969 5.813 4.547m-1.36 1.078v.047c-.187-2.344-2.11-4.172-4.453-4.172h-3c-2.39 0-4.312 1.828-4.5 4.172 1.688 1.172 3.75 1.828 6 1.828 2.203 0 4.266-.656 5.953-1.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-12c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C13.5 13.969 12.797 13.5 12 13.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C10.453 17.578 11.156 18 12 18m-3.75-2.25c0-1.312.703-2.531 1.875-3.234 1.125-.657 2.578-.657 3.75 0 1.125.703 1.875 1.922 1.875 3.234 0 1.36-.75 2.578-1.875 3.281-1.172.657-2.625.657-3.75 0-1.172-.703-1.875-1.922-1.875-3.281' />
    </g>
    <defs>
      <clipPath id='14e76323aa3ed74d60cb8d3fb2b002bc__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlRegularIcon);
export default ForwardRef;
