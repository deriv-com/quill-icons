import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={24}
    viewBox='0 0 17 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m2.031 4.875 13.813 6c1 .438 1 1.844 0 2.281l-13.813 6c-1.062.469-2.156-.718-1.594-1.75l2.188-4.031a.86.86 0 0 1 .688-.469l5.5-.687c.093 0 .187-.094.187-.219a.2.2 0 0 0-.187-.187l-5.5-.688c-.313-.062-.563-.219-.688-.469L.438 6.625c-.563-1.031.53-2.219 1.593-1.75' />
    </g>
    <defs>
      <clipPath id='04a6e9a6c4ae59f72dd3a44576834b56__a'>
        <path d='M0 0h17v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopMdFillIcon);
export default ForwardRef;
