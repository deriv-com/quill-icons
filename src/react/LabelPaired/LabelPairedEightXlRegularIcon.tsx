import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 13.125c0 1.969-.984 3.656-2.484 4.688 1.875.89 3.234 2.812 3.234 5.062A5.61 5.61 0 0 1 9.375 28.5h-3.75A5.58 5.58 0 0 1 0 22.875a5.59 5.59 0 0 1 3.188-5.062C1.688 16.78.75 15.093.75 13.125A5.61 5.61 0 0 1 6.375 7.5h2.25c3.094 0 5.625 2.531 5.625 5.625M8.625 18.75h-3A4.13 4.13 0 0 0 1.5 22.875 4.1 4.1 0 0 0 5.625 27h3.75a4.13 4.13 0 0 0 4.125-4.125c0-2.25-1.875-4.125-4.125-4.125zm0-1.5a4.13 4.13 0 0 0 4.125-4.125C12.75 10.875 10.875 9 8.625 9h-2.25a4.13 4.13 0 0 0-4.125 4.125c0 2.297 1.828 4.125 4.078 4.125h2.297' />
    </g>
    <defs>
      <clipPath id='f922bfcc3b9cf02649fbc96f96258caa__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightXlRegularIcon);
export default ForwardRef;
