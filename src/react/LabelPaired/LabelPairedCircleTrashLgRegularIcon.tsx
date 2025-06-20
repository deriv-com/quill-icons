import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashLgRegularIcon = (
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
      <path d='M18.75 15.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 1.25 15.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 18.75 15.5M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m6.25-4.375h1.602l.43-.43a.65.65 0 0 1 .468-.195h2.5c.156 0 .313.078.43.195l.43.43h1.64c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.117l-.43 6.992c-.078.625-.625 1.133-1.25 1.133H8.008a1.23 1.23 0 0 1-1.211-1.133l-.469-6.992H6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m6.133 1.25H7.578l.43 6.875h3.945z' />
    </g>
    <defs>
      <clipPath id='bba7a6fcfe0d962ec76ed44142197ca0__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashLgRegularIcon);
export default ForwardRef;
