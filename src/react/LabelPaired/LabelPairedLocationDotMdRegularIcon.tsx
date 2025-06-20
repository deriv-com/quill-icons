import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11 10c0-2.75-2.25-5-5-5-2.781 0-5 2.25-5 5 0 .5.156 1.156.5 2 .344.813.813 1.688 1.375 2.563A45 45 0 0 0 6 18.937c.781-1 2.031-2.656 3.125-4.375.531-.874 1-1.75 1.344-2.562.344-.844.531-1.5.531-2m1 0c0 2.75-3.656 7.594-5.281 9.625a.943.943 0 0 1-1.469 0C3.656 17.594 0 12.75 0 10c0-3.312 2.688-6 6-6 3.313 0 6 2.688 6 6m-7.5 0c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0C4.781 9 4.5 9.469 4.5 10M6 12.5a2.53 2.53 0 0 1-2.187-1.25c-.438-.75-.438-1.719 0-2.5C4.28 8 5.093 7.5 6 7.5c.875 0 1.688.5 2.156 1.25.438.781.438 1.75 0 2.5-.469.781-1.281 1.25-2.156 1.25' />
    </g>
    <defs>
      <clipPath id='d25c985612de6de6d82d91e7dc89ad56__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotMdRegularIcon);
export default ForwardRef;
