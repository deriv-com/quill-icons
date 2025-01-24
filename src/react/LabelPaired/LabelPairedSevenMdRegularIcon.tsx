import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5c0-.25.219-.5.5-.5h9c.156 0 .344.125.438.281a.57.57 0 0 1-.032.5l-8 13a.494.494 0 0 1-.687.157C1 18.78.906 18.5 1.062 18.25L8.595 6H.5a.494.494 0 0 1-.5-.5' />
    </g>
    <defs>
      <clipPath id='b57b407121dc08960e49afdf3c6aacb5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdRegularIcon);
export default ForwardRef;
