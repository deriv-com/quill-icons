import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashLgFillIcon = (
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
      <path d='M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-3.75-15a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-1.64l-.43-.43a.63.63 0 0 0-.43-.195h-2.5a.65.65 0 0 0-.469.195l-.43.43zm0 2.5.508 6.367c.039.664.586 1.133 1.25 1.133h3.945c.664 0 1.211-.469 1.25-1.133L13.75 13z' />
    </g>
    <defs>
      <clipPath id='158e67ad60a5ee1650b2f7c9076a144d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashLgFillIcon);
export default ForwardRef;
