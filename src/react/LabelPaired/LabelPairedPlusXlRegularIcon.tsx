import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9v8.25h8.25q.704.046.75.75-.046.704-.75.75h-8.25V27q-.047.704-.75.75-.703-.046-.75-.75v-8.25H1.5Q.797 18.704.75 18q.047-.704.75-.75h8.25V9q.047-.703.75-.75.703.047.75.75' />
    </g>
    <defs>
      <clipPath id='8cd0a5c34a325b2d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlRegularIcon);
export default ForwardRef;
