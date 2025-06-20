import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveXlRegularIcon = (
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
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 12H15c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.687l-.75 3.094 3.75.375c1.78.187 3.14 1.734 3.14 3.515A3.48 3.48 0 0 1 12.938 24h-2.063c-1.266 0-2.484-.61-3.187-1.687l-.094-.141c-.235-.328-.14-.797.234-1.031.328-.235.797-.141 1.031.187l.094.14c.422.657 1.172 1.032 1.922 1.032h2.063c1.124 0 2.062-.89 2.062-2.016 0-1.03-.797-1.875-1.828-2.015L8.532 18c-.235 0-.423-.14-.563-.281-.094-.188-.14-.422-.094-.61L9 12.61c.094-.375.375-.609.75-.609' />
    </g>
    <defs>
      <clipPath id='f63271bfcf0bc5c7554912e90314a56a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveXlRegularIcon);
export default ForwardRef;
