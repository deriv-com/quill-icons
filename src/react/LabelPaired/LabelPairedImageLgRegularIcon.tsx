import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageLgRegularIcon = (
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
      <path d='M2.5 8c-.703 0-1.25.586-1.25 1.25v9.14l2.617-2.656a1.63 1.63 0 0 1 2.227 0l2.656 2.657 5.117-5.157a1.63 1.63 0 0 1 2.227 0l2.656 2.657V9.25c0-.664-.586-1.25-1.25-1.25zM1.25 20.148v1.602c0 .703.547 1.25 1.25 1.25h1.602l3.75-3.75-2.657-2.617a.307.307 0 0 0-.43 0zm13.945-6.015a.307.307 0 0 0-.43 0L5.86 23H17.5c.664 0 1.25-.547 1.25-1.25v-4.102zM0 9.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5zm6.25 1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64' />
    </g>
    <defs>
      <clipPath id='6830d328f871c7465798c1df407538ec__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageLgRegularIcon);
export default ForwardRef;
