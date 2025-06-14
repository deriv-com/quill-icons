import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={36}
    viewBox='0 0 25 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m2.797 7.313 20.719 9c1.5.656 1.5 2.765 0 3.421l-20.72 9c-1.593.703-3.233-1.078-2.39-2.625l3.282-6.047a1.29 1.29 0 0 1 1.03-.703l8.25-1.03c.141 0 .282-.142.282-.329 0-.14-.14-.281-.281-.281l-8.25-1.032c-.469-.093-.844-.328-1.032-.703L.408 9.938c-.844-1.547.796-3.329 2.39-2.626' />
    </g>
    <defs>
      <clipPath id='8f09b16c86c56d702ed60a0ec349f916__a'>
        <path d='M0 0h25v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopXlFillIcon);
export default ForwardRef;
