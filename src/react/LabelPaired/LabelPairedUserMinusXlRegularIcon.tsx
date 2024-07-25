import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 7.5c-1.64 0-3.094.89-3.937 2.25-.797 1.406-.797 3.14 0 4.5.843 1.406 2.296 2.25 3.937 2.25 1.594 0 3.047-.844 3.89-2.25.797-1.36.797-3.094 0-4.5-.843-1.36-2.296-2.25-3.89-2.25m0 10.5a5.97 5.97 0 0 1-5.203-3c-1.078-1.828-1.078-4.125 0-6C6.375 7.172 8.344 6 10.5 6c2.11 0 4.078 1.172 5.156 3 1.078 1.875 1.078 4.172 0 6a5.95 5.95 0 0 1-5.156 3m-2.156 3.75c-3.75 0-6.797 3.047-6.844 6.75h18c-.094-3.703-3.14-6.75-6.89-6.75zm0-1.5h4.265C17.25 20.25 21 24 21 28.64c0 .75-.656 1.36-1.406 1.36H1.359C.61 30 0 29.39 0 28.64c0-4.64 3.703-8.39 8.344-8.39M20.25 16.5h9c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-9a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='b202a78013ac6224cdf17ce3d580b720__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusXlRegularIcon);
export default ForwardRef;
