import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterXlIcon = (
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
      <path d='M18.234 8.25h3.282l-7.22 8.297 8.532 11.203h-6.656l-5.25-6.797-5.953 6.797H1.64l7.734-8.812L1.219 8.25h6.844l4.687 6.234zm-1.172 17.531h1.829L7.078 10.125H5.11z' />
    </g>
    <defs>
      <clipPath id='ceb17538ca7fb26e04b0822db153cd2d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterXlIcon);
export default ForwardRef;
