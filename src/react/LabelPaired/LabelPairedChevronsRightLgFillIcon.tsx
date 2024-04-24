import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m18.36 16.398-7.5 7.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l6.601-6.641-6.601-6.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l7.5 7.5c.508.468.508 1.289 0 1.757m-15 7.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757L8.203 15.5 1.602 8.898a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l7.5 7.5c.508.468.508 1.289 0 1.757z' />
    </g>
    <defs>
      <clipPath id='2d4ed917235c3bd3dba36a6bbc327883__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgFillIcon);
export default ForwardRef;
