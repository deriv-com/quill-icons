import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteLgRegularIcon = (
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
      <path d='M5.313 7.531C5.273 7.805 5 8 4.688 8h-.313a.64.64 0 0 0-.625.625v.625h5v-.625c0-.312-.312-.625-.625-.625h-.352a.63.63 0 0 1-.625-.469c-.078-.43-.468-.781-.898-.781a.964.964 0 0 0-.937.781M6.25 5.5c.86 0 1.602.547 1.953 1.25H10c1.367 0 2.5 1.133 2.5 2.5h-1.25C11.25 8.586 10.664 8 10 8h-.117c.078.195.117.43.117.625v.703A3.06 3.06 0 0 0 8.125 10.5H3.75c-.703 0-1.25-.547-1.25-1.25v-.625c0-.195.04-.43.078-.625H2.5c-.703 0-1.25.586-1.25 1.25V20.5c0 .703.547 1.25 1.25 1.25h5V23h-5A2.47 2.47 0 0 1 0 20.5V9.25c0-1.367 1.094-2.5 2.5-2.5h1.758C4.609 6.047 5.352 5.5 6.25 5.5M17.5 24.25c.664 0 1.25-.547 1.25-1.25v-7.969a.63.63 0 0 0-.195-.43l-2.657-2.656a.63.63 0 0 0-.43-.195H11.25c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25zm1.914-10.547c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5h-6.25a2.47 2.47 0 0 1-2.5-2.5V13c0-1.367 1.094-2.5 2.5-2.5h4.219c.469 0 .976.195 1.328.547z' />
    </g>
    <defs>
      <clipPath id='9c625c6d61895f783d6c8d98cf92e1d3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteLgRegularIcon);
export default ForwardRef;
