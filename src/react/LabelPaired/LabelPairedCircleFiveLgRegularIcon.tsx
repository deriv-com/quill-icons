import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveLgRegularIcon = (
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
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-1.875-15H12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H8.594l-.625 2.578 3.125.313c1.484.156 2.617 1.445 2.617 2.93 0 1.64-1.29 2.929-2.93 2.929H9.062c-1.054 0-2.07-.508-2.656-1.406l-.078-.117c-.195-.274-.117-.665.195-.86a.624.624 0 0 1 .86.156l.078.118c.351.547.976.859 1.601.859h1.72c.937 0 1.718-.742 1.718-1.68 0-.86-.664-1.562-1.523-1.68l-3.868-.39c-.195 0-.351-.117-.468-.234a.78.78 0 0 1-.079-.508l.938-3.75c.078-.313.313-.508.625-.508' />
    </g>
    <defs>
      <clipPath id='0717292fcc382aa7bb23d6304642ffb1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveLgRegularIcon);
export default ForwardRef;
