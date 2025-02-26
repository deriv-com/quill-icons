import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdFillIcon = (
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
      <path d='M8.5 16h-5c-.312-.969-.937-1.844-1.562-2.687l-.47-.657A5.47 5.47 0 0 1 .5 9.5C.5 6.469 2.938 4 6 4c3.031 0 5.5 2.469 5.5 5.531 0 1.156-.375 2.219-1 3.125l-.469.656c-.625.844-1.25 1.72-1.531 2.688M6 20a2.47 2.47 0 0 1-2.5-2.5V17h5v.5C8.5 18.906 7.375 20 6 20M3.5 9.5C3.5 8.125 4.594 7 6 7c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-1.937 0-3.5 1.594-3.5 3.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5' />
    </g>
    <defs>
      <clipPath id='60169e60d3c17c2585959a7faf8046af__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdFillIcon);
export default ForwardRef;
