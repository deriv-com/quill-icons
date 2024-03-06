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
      <path d='M18.234 8.25h3.328l-7.218 8.25 8.484 11.25h-6.656l-5.203-6.797-5.953 6.797H1.688l7.734-8.812L1.266 8.25h6.797l4.734 6.234zm-1.172 17.531h1.875L7.079 10.125H5.11z' />
    </g>
    <defs>
      <clipPath id='12fe9a702bed173aa6fe2217d1e41da3__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterXlIcon);
export default ForwardRef;
