import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeLgBoldIcon = (
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
      <path d='M10 23.625c.273 0 1.055-.273 1.836-1.875a9.9 9.9 0 0 0 .86-2.5h-5.43c.234.977.507 1.797.859 2.5.82 1.602 1.563 1.875 1.875 1.875m-3.047-6.25h6.055q.117-.878.117-1.875 0-.937-.117-1.875H6.953c-.078.625-.078 1.25-.078 1.875 0 .664 0 1.29.078 1.875m.313-5.625h5.43a10 10 0 0 0-.86-2.46C11.055 7.687 10.273 7.374 10 7.374c-.312 0-1.055.313-1.875 1.914-.352.703-.625 1.524-.86 2.461m7.617 1.875c.078.625.078 1.25.078 1.875 0 .664 0 1.29-.078 1.875h3.008a7.3 7.3 0 0 0 .234-1.875q0-.937-.234-1.875zm2.305-1.875a8.04 8.04 0 0 0-3.829-3.633c.547 1.016.977 2.266 1.25 3.633zm-11.836 0c.273-1.367.703-2.617 1.25-3.633a8.04 8.04 0 0 0-3.829 3.633zM2.07 13.625c-.117.625-.195 1.25-.195 1.875 0 .664.04 1.29.195 1.875h3.008C5 16.789 5 16.165 5 15.5c0-.625 0-1.25.078-1.875zm11.29 9.297a7.94 7.94 0 0 0 3.828-3.672h-2.579c-.273 1.406-.703 2.656-1.25 3.672m-6.758 0c-.547-1.016-.977-2.266-1.25-3.672H2.773a7.94 7.94 0 0 0 3.829 3.672M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5' />
    </g>
    <defs>
      <clipPath id='36b20072ae2df083699ee59889df54ff__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeLgBoldIcon);
export default ForwardRef;
