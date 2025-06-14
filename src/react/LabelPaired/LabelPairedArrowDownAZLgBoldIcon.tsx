import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.086 20.227c-.39-.352-.39-.938 0-1.329.352-.351.937-.351 1.328 0l2.149 2.188V7.688c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v13.398l2.148-2.148a.856.856 0 0 1 1.289 0c.39.351.39.937 0 1.289l-3.75 3.75a.856.856 0 0 1-1.29 0zM14 16.75h5c.352 0 .703.234.82.586a.84.84 0 0 1-.156.977l-3.594 4.062H19a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-5c-.39 0-.742-.195-.86-.547a.84.84 0 0 1 .157-.976l3.594-4.102H14c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938m2.5-10c.352 0 .664.234.82.547l3.125 6.25a.925.925 0 0 1-.43 1.25.925.925 0 0 1-1.25-.43l-.546-1.055h-3.516l-.508 1.055a.925.925 0 0 1-1.25.43.925.925 0 0 1-.43-1.25l3.126-6.25a.96.96 0 0 1 .859-.547m-.86 4.688h1.68l-.82-1.641z' />
    </g>
    <defs>
      <clipPath id='095c0a039e927da8e31c931fd15cec8b__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZLgBoldIcon);
export default ForwardRef;
